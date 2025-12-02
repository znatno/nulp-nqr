import { Router, Request, Response } from 'express';
import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { requireManager } from '../middleware/auth.js';
import {
    exportReportToPdf,
    exportReportToCsv,
    exportReportToExcel,
    exportReportToTxt,
} from '../services/reportExportService.js';

const router = Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

interface ReportRow {
    period: string;
    from: string;
    to: string;
    applicationsTotal: number;
    applicationsApproved: number;
    applicationsRejected: number;
    applicationsPending: number;
    certificatesIssued: number;
}

interface PeriodDefinition {
    period: string;
    from: Date;
    to: Date;
}

/**
 * Build period definitions based on periodType and year
 */
function buildPeriods(periodType: string, year: number): PeriodDefinition[] {
    const periods: PeriodDefinition[] = [];

    if (periodType === 'monthly') {
        for (let month = 1; month <= 12; month++) {
            const from = new Date(year, month - 1, 1);
            const to = new Date(year, month, 0, 23, 59, 59, 999);
            periods.push({
                period: `${year}-${String(month).padStart(2, '0')}`,
                from,
                to,
            });
        }
    } else if (periodType === 'quarterly') {
        const quarters = [
            { start: 1, end: 3 },
            { start: 4, end: 6 },
            { start: 7, end: 9 },
            { start: 10, end: 12 },
        ];
        quarters.forEach((q, index) => {
            const from = new Date(year, q.start - 1, 1);
            const to = new Date(year, q.end, 0, 23, 59, 59, 999);
            periods.push({
                period: `${year}-Q${index + 1}`,
                from,
                to,
            });
        });
    } else if (periodType === 'yearly') {
        const from = new Date(year, 0, 1);
        const to = new Date(year, 11, 31, 23, 59, 59, 999);
        periods.push({
            period: String(year),
            from,
            to,
        });
    }

    return periods;
}

/**
 * Aggregate data for a single period
 */
async function aggregatePeriodData(
    period: PeriodDefinition,
    scope: string,
    centreId: number | null
): Promise<ReportRow> {
    // Build base where clause for applications
    const applicationWhere: any = {
        createdAt: {
            gte: period.from,
            lte: period.to,
        },
    };

    if (scope === 'centre' && centreId !== null) {
        applicationWhere.qualificationCenterId = centreId;
    }

    // Build base where clause for certificates (Professional records)
    const certificateWhere: any = {
        certificateReceivedAt: {
            gte: period.from,
            lte: period.to,
        },
    };

    if (scope === 'centre' && centreId !== null) {
        certificateWhere.qualificationCenterId = centreId;
    }

    // Get application counts by status
    const [applicationsTotal, applicationsByStatus, certificatesIssued] = await Promise.all([
        prisma.application.count({ where: applicationWhere }),
        prisma.application.groupBy({
            by: ['status'],
            where: applicationWhere,
            _count: {
                status: true,
            },
        }),
        prisma.professional.count({ where: certificateWhere }),
    ]);

    // Calculate status-specific counts
    const applicationsApproved =
        applicationsByStatus.find((item) => item.status === 'APPROVED')?._count.status || 0;
    const applicationsRejected =
        applicationsByStatus.find((item) => item.status === 'REFUSED')?._count.status || 0;
    const applicationsPending =
        applicationsByStatus.find((item) => item.status === 'DRAFT')?._count.status || 0;

    return {
        period: period.period,
        from: period.from.toISOString(),
        to: period.to.toISOString(),
        applicationsTotal,
        applicationsApproved,
        applicationsRejected,
        applicationsPending,
        certificatesIssued,
    };
}

/**
 * GET /api/reports
 * Get time-based aggregated report data
 * Requires MANAGER role
 * Query params: scope (global|centre), centreId (required if scope=centre), periodType (monthly|quarterly|yearly), year
 */
router.get('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const scope = (req.query.scope as string) || 'global';
        const periodType = (req.query.periodType as string) || 'monthly';
        const yearParam = req.query.year as string;

        // Validation
        if (scope !== 'global' && scope !== 'centre') {
            res.status(400).json({ error: 'scope must be "global" or "centre"' });
            return;
        }

        if (periodType !== 'monthly' && periodType !== 'quarterly' && periodType !== 'yearly') {
            res.status(400).json({ error: 'periodType must be "monthly", "quarterly", or "yearly"' });
            return;
        }

        if (!yearParam) {
            res.status(400).json({ error: 'year parameter is required' });
            return;
        }

        const year = parseInt(yearParam, 10);
        if (isNaN(year) || year < 2000 || year > 2100) {
            res.status(400).json({ error: 'year must be a valid number between 2000 and 2100' });
            return;
        }

        let centreId: number | null = null;
        if (scope === 'centre') {
            const centreIdParam = req.query.centreId as string;
            if (!centreIdParam) {
                res.status(400).json({ error: 'centreId is required when scope=centre' });
                return;
            }
            centreId = parseInt(centreIdParam, 10);
            if (isNaN(centreId)) {
                res.status(400).json({ error: 'centreId must be a valid number' });
                return;
            }

            // Verify centre exists
            const centre = await prisma.qualificationCenter.findUnique({
                where: { id: centreId },
            });
            if (!centre) {
                res.status(404).json({ error: 'Qualification centre not found' });
                return;
            }
        }

        // Build periods
        const periods = buildPeriods(periodType, year);

        // Aggregate data for each period
        const reportRows = await Promise.all(
            periods.map((period) => aggregatePeriodData(period, scope, centreId))
        );

        res.json(reportRows);
    } catch (err) {
        console.error('Failed to generate report', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * Shared function to generate report data (used by both JSON and export endpoints)
 */
async function generateReportData(
    scope: string,
    periodType: string,
    year: number,
    centreId: number | null
): Promise<{ rows: ReportRow[]; centreName?: string }> {
    // Verify centre exists if scope is centre
    let centreName: string | undefined;
    if (scope === 'centre' && centreId !== null) {
        const centre = await prisma.qualificationCenter.findUnique({
            where: { id: centreId },
        });
        if (!centre) {
            throw new Error('Qualification centre not found');
        }
        centreName = centre.name;
    }

    // Build periods
    const periods = buildPeriods(periodType, year);

    // Aggregate data for each period
    const rows = await Promise.all(
        periods.map((period) => aggregatePeriodData(period, scope, centreId))
    );

    return { rows, centreName };
}

/**
 * GET /api/reports/export
 * Export report in various formats (PDF, Excel, CSV, TXT)
 * Requires MANAGER role
 * Query params: scope, centreId (if scope=centre), periodType, year, format (pdf|excel|csv|txt)
 */
router.get('/export', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const scope = (req.query.scope as string) || 'global';
        const periodType = (req.query.periodType as string) || 'monthly';
        const yearParam = req.query.year as string;
        const format = (req.query.format as string) || 'pdf';

        // Validation
        if (scope !== 'global' && scope !== 'centre') {
            res.status(400).json({ error: 'scope must be "global" or "centre"' });
            return;
        }

        if (periodType !== 'monthly' && periodType !== 'quarterly' && periodType !== 'yearly') {
            res.status(400).json({ error: 'periodType must be "monthly", "quarterly", or "yearly"' });
            return;
        }

        if (!yearParam) {
            res.status(400).json({ error: 'year parameter is required' });
            return;
        }

        const year = parseInt(yearParam, 10);
        if (isNaN(year) || year < 2000 || year > 2100) {
            res.status(400).json({ error: 'year must be a valid number between 2000 and 2100' });
            return;
        }

        if (!['pdf', 'excel', 'csv', 'txt'].includes(format)) {
            res.status(400).json({ error: 'format must be "pdf", "excel", "csv", or "txt"' });
            return;
        }

        let centreId: number | null = null;
        if (scope === 'centre') {
            const centreIdParam = req.query.centreId as string;
            if (!centreIdParam) {
                res.status(400).json({ error: 'centreId is required when scope=centre' });
                return;
            }
            centreId = parseInt(centreIdParam, 10);
            if (isNaN(centreId)) {
                res.status(400).json({ error: 'centreId must be a valid number' });
                return;
            }
        }

        // Generate report data
        const { rows, centreName } = await generateReportData(scope, periodType, year, centreId);

        // Build filename
        const scopePart = scope === 'centre' ? `centre-${centreId}` : 'global';
        const filename = `nqr-report-${scopePart}-${year}-${periodType}.${format === 'excel' ? 'xlsx' : format}`;

        // Export based on format
        if (format === 'pdf') {
            const pdfBuffer = await exportReportToPdf(
                { scope, centreId: centreId ?? undefined, centreName, periodType, year },
                rows
            );
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
            res.send(pdfBuffer);
        } else if (format === 'excel') {
            const excelBuffer = await exportReportToExcel(
                { scope, centreId: centreId ?? undefined, centreName, periodType, year },
                rows
            );
            res.setHeader(
                'Content-Type',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            );
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
            res.send(excelBuffer);
        } else if (format === 'csv') {
            const csvContent = exportReportToCsv(rows);
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
            res.send(csvContent);
        } else if (format === 'txt') {
            const txtContent = exportReportToTxt(
                { scope, centreId: centreId ?? undefined, centreName, periodType, year },
                rows
            );
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
            res.send(txtContent);
        }
    } catch (err: any) {
        console.error('Failed to export report', err);
        if (err.message === 'Qualification centre not found') {
            res.status(404).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

export default router;
export type { ReportRow, PeriodDefinition };
export { buildPeriods, aggregatePeriodData };
