import { Router, Request, Response } from 'express';
import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { requireManager } from '../middleware/auth.js';

const router = Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

/**
 * GET /api/dashboard/global
 * Get global metrics across the whole system
 * Requires MANAGER role
 */
router.get('/global', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const now = new Date();
        const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
        const threeSixtyFiveDaysAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);

        // Get all metrics in parallel
        const [
            totalCentres,
            totalQualifications,
            activeCertificates,
            applicationsLast30Days,
            applicationsLast90Days,
            applicationsLast365Days,
            applicationsByStatus,
        ] = await Promise.all([
            // Total centres
            prisma.qualificationCenter.count(),

            // Total qualifications
            prisma.professionalQualification.count(),

            // Active certificates (all Professional records are considered active since there's no expiry)
            prisma.professional.count(),

            // Applications in last 30 days
            prisma.application.count({
                where: {
                    createdAt: {
                        gte: thirtyDaysAgo,
                    },
                },
            }),

            // Applications in last 90 days
            prisma.application.count({
                where: {
                    createdAt: {
                        gte: ninetyDaysAgo,
                    },
                },
            }),

            // Applications in last 365 days
            prisma.application.count({
                where: {
                    createdAt: {
                        gte: threeSixtyFiveDaysAgo,
                    },
                },
            }),

            // Applications grouped by status
            prisma.application.groupBy({
                by: ['status'],
                _count: {
                    status: true,
                },
            }),
        ]);

        // Convert applicationsByStatus to object format
        const applicationsByStatusObj: Record<string, number> = {};
        applicationsByStatus.forEach((item) => {
            applicationsByStatusObj[item.status] = item._count.status;
        });

        res.json({
            totalCentres,
            totalQualifications,
            activeCertificates,
            applicationsLast30Days,
            applicationsLast90Days,
            applicationsLast365Days,
            applicationsByStatus: applicationsByStatusObj,
        });
    } catch (err) {
        console.error('Failed to get global dashboard metrics', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/dashboard/centre/:centreId
 * Get metrics for a specific qualification centre
 * Requires MANAGER role
 */
router.get('/centre/:centreId', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const centreId = Number(req.params.centreId);
        if (!Number.isInteger(centreId)) {
            res.status(400).json({ error: 'Invalid centre ID' });
            return;
        }

        // Check if centre exists
        const centre = await prisma.qualificationCenter.findUnique({
            where: { id: centreId },
        });

        if (!centre) {
            res.status(404).json({ error: 'Qualification centre not found' });
            return;
        }

        const now = new Date();
        const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
        const threeSixtyFiveDaysAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);

        // Get qualifications offered by this centre (via accreditations)
        const accreditations = await prisma.qualificationCenterAccreditation.findMany({
            where: { qualificationCenterId: centreId },
            select: { professionalQualificationId: true },
        });
        const qualificationIds = [...new Set(accreditations.map((a) => a.professionalQualificationId))];

        // Get all metrics in parallel
        const [
            totalQualifications,
            activeCertificates,
            applicationsLast30Days,
            applicationsLast90Days,
            applicationsLast365Days,
            applicationsByStatus,
        ] = await Promise.all([
            // Total qualifications for this centre
            Promise.resolve(qualificationIds.length),

            // Active certificates for this centre
            prisma.professional.count({
                where: {
                    qualificationCenterId: centreId,
                },
            }),

            // Applications in last 30 days for this centre
            prisma.application.count({
                where: {
                    qualificationCenterId: centreId,
                    createdAt: {
                        gte: thirtyDaysAgo,
                    },
                },
            }),

            // Applications in last 90 days for this centre
            prisma.application.count({
                where: {
                    qualificationCenterId: centreId,
                    createdAt: {
                        gte: ninetyDaysAgo,
                    },
                },
            }),

            // Applications in last 365 days for this centre
            prisma.application.count({
                where: {
                    qualificationCenterId: centreId,
                    createdAt: {
                        gte: threeSixtyFiveDaysAgo,
                    },
                },
            }),

            // Applications grouped by status for this centre
            prisma.application.groupBy({
                by: ['status'],
                where: {
                    qualificationCenterId: centreId,
                },
                _count: {
                    status: true,
                },
            }),
        ]);

        // Convert applicationsByStatus to object format
        const applicationsByStatusObj: Record<string, number> = {};
        applicationsByStatus.forEach((item) => {
            applicationsByStatusObj[item.status] = item._count.status;
        });

        res.json({
            centreId: centre.id,
            centreName: centre.name,
            totalQualifications,
            activeCertificates,
            applicationsLast30Days,
            applicationsLast90Days,
            applicationsLast365Days,
            applicationsByStatus: applicationsByStatusObj,
        });
    } catch (err) {
        console.error('Failed to get centre dashboard metrics', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
