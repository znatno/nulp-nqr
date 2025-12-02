import PDFDocument from 'pdfkit';
import ExcelJS from 'exceljs';
import type { ReportRow } from '../routes/reports.js';

interface ReportMetadata {
    scope: string;
    centreId?: number;
    centreName?: string;
    periodType: string;
    year: number;
}

/**
 * Export report to PDF
 */
export function exportReportToPdf(meta: ReportMetadata, rows: ReportRow[]): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        try {
            const doc = new PDFDocument({ margin: 50 });
            const chunks: Buffer[] = [];

            doc.on('data', (chunk) => chunks.push(chunk));
            doc.on('end', () => resolve(Buffer.concat(chunks)));
            doc.on('error', reject);

            // Title
            const title =
                meta.scope === 'centre'
                    ? `NQR Report – Centre ${meta.centreName || meta.centreId} – ${meta.year} – ${meta.periodType}`
                    : `NQR Report – Global – ${meta.year} – ${meta.periodType}`;
            doc.fontSize(16).text(title, { align: 'center' });
            doc.moveDown();

            // Generation timestamp
            doc.fontSize(10).text(`Generated: ${new Date().toISOString()}`, { align: 'center' });
            doc.moveDown(2);

            // Centre info if applicable
            if (meta.scope === 'centre' && meta.centreName) {
                doc.fontSize(12).text(`Centre: ${meta.centreName} (ID: ${meta.centreId})`);
                doc.moveDown();
            }

            // Table header
            const startY = doc.y;
            const tableTop = startY;
            const rowHeight = 20;
            const colWidths = [80, 100, 100, 60, 60, 60, 60, 80];
            const headers = [
                'Period',
                'From',
                'To',
                'Apps Total',
                'Approved',
                'Rejected',
                'Pending',
                'Certificates',
            ];

            // Draw header
            doc.fontSize(10).font('Helvetica-Bold');
            let x = 50;
            headers.forEach((header, i) => {
                doc.text(header, x, tableTop, { width: colWidths[i], align: 'left' });
                x += colWidths[i];
            });

            // Draw rows
            doc.font('Helvetica');
            let currentY = tableTop + rowHeight;
            rows.forEach((row) => {
                const values = [
                    row.period,
                    new Date(row.from).toLocaleDateString('en-US'),
                    new Date(row.to).toLocaleDateString('en-US'),
                    String(row.applicationsTotal),
                    String(row.applicationsApproved),
                    String(row.applicationsRejected),
                    String(row.applicationsPending),
                    String(row.certificatesIssued),
                ];

                x = 50;
                values.forEach((value, i) => {
                    doc.text(value, x, currentY, { width: colWidths[i], align: 'left' });
                    x += colWidths[i];
                });

                currentY += rowHeight;
            });

            doc.end();
        } catch (err) {
            reject(err);
        }
    });
}

/**
 * Export report to CSV (raw data only)
 */
export function exportReportToCsv(rows: ReportRow[]): string {
    // Header row
    const header = 'period,from,to,applicationsTotal,applicationsApproved,applicationsRejected,applicationsPending,certificatesIssued';

    // Data rows
    const dataRows = rows.map((row) => {
        // CSV escape: wrap in quotes if contains comma, quote, or newline
        const escapeCsv = (value: string | number): string => {
            const str = String(value);
            if (str.includes(',') || str.includes('"') || str.includes('\n')) {
                return `"${str.replace(/"/g, '""')}"`;
            }
            return str;
        };

        return [
            escapeCsv(row.period),
            escapeCsv(row.from),
            escapeCsv(row.to),
            escapeCsv(row.applicationsTotal),
            escapeCsv(row.applicationsApproved),
            escapeCsv(row.applicationsRejected),
            escapeCsv(row.applicationsPending),
            escapeCsv(row.certificatesIssued),
        ].join(',');
    });

    return [header, ...dataRows].join('\n');
}

/**
 * Export report to Excel
 */
export async function exportReportToExcel(meta: ReportMetadata, rows: ReportRow[]): Promise<Buffer> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Report');

    // Title row (optional metadata)
    const title =
        meta.scope === 'centre'
            ? `NQR Report – Centre ${meta.centreName || meta.centreId} – ${meta.year} – ${meta.periodType}`
            : `NQR Report – Global – ${meta.year} – ${meta.periodType}`;
    worksheet.mergeCells('A1:H1');
    worksheet.getCell('A1').value = title;
    worksheet.getCell('A1').font = { size: 14, bold: true };
    worksheet.getCell('A1').alignment = { horizontal: 'center' };

    worksheet.mergeCells('A2:H2');
    worksheet.getCell('A2').value = `Generated: ${new Date().toISOString()}`;
    worksheet.getCell('A2').font = { size: 10 };
    worksheet.getCell('A2').alignment = { horizontal: 'center' };

    if (meta.scope === 'centre' && meta.centreName) {
        worksheet.mergeCells('A3:H3');
        worksheet.getCell('A3').value = `Centre: ${meta.centreName} (ID: ${meta.centreId})`;
        worksheet.getCell('A3').font = { size: 10 };
        worksheet.getCell('A3').alignment = { horizontal: 'center' };
    }

    // Header row
    const headerRow = worksheet.addRow([
        'Period',
        'From',
        'To',
        'Applications Total',
        'Approved',
        'Rejected',
        'Pending',
        'Certificates Issued',
    ]);
    headerRow.font = { bold: true };
    headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFE0E0E0' },
    };

    // Data rows
    rows.forEach((row) => {
        worksheet.addRow([
            row.period,
            new Date(row.from),
            new Date(row.to),
            row.applicationsTotal,
            row.applicationsApproved,
            row.applicationsRejected,
            row.applicationsPending,
            row.certificatesIssued,
        ]);
    });

    // Auto-fit columns
    worksheet.columns.forEach((column) => {
        if (column.eachCell) {
            let maxLength = 0;
            column.eachCell({ includeEmpty: false }, (cell) => {
                const columnLength = cell.value ? cell.value.toString().length : 10;
                if (columnLength > maxLength) {
                    maxLength = columnLength;
                }
            });
            column.width = Math.min(Math.max(maxLength + 2, 10), 50);
        }
    });

    const buffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(buffer);
}

/**
 * Export report to TXT (human-readable)
 */
export function exportReportToTxt(meta: ReportMetadata, rows: ReportRow[]): string {
    const title =
        meta.scope === 'centre'
            ? `NQR Report – Centre ${meta.centreName || meta.centreId} – ${meta.year} – ${meta.periodType}`
            : `NQR Report – Global – ${meta.year} – ${meta.periodType}`;

    const lines: string[] = [title, `Generated: ${new Date().toISOString()}`];

    if (meta.scope === 'centre' && meta.centreName) {
        lines.push(`Centre: ${meta.centreName} (ID: ${meta.centreId})`);
    }

    lines.push(''); // Empty line

    // Data rows
    rows.forEach((row) => {
        const line = `${row.period} | from=${new Date(row.from).toISOString().split('T')[0]} | to=${new Date(row.to).toISOString().split('T')[0]} | apps=${row.applicationsTotal} | approved=${row.applicationsApproved} | rejected=${row.applicationsRejected} | pending=${row.applicationsPending} | certs=${row.certificatesIssued}`;
        lines.push(line);
    });

    return lines.join('\n');
}
