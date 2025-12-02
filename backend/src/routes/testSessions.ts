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
 * PUT /api/test-sessions/:id
 * Update test session schedule/result
 * When result becomes PASSED, trigger certificate creation
 * Requires MANAGER role
 */
router.put('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const { scheduledAt, result, notes } = req.body as {
            scheduledAt?: unknown;
            result?: unknown;
            notes?: unknown;
        };

        // Check if test session exists
        const testSession = await prisma.testSession.findUnique({
            where: { id },
            include: {
                application: {
                    include: {
                        applicant: true,
                        professionalQualification: true,
                    },
                },
                qualificationCenter: true,
            },
        });

        if (!testSession) {
            res.status(404).json({ error: 'Test session not found' });
            return;
        }

        const updateData: any = {};
        if (scheduledAt !== undefined) {
            if (typeof scheduledAt !== 'string') {
                res.status(400).json({ error: 'scheduledAt must be an ISO date string' });
                return;
            }
            const scheduledAtDate = new Date(scheduledAt);
            if (isNaN(scheduledAtDate.getTime())) {
                res.status(400).json({ error: 'Invalid scheduledAt format' });
                return;
            }
            updateData.scheduledAt = scheduledAtDate;
        }

        if (result !== undefined) {
            if (result !== 'PENDING' && result !== 'PASSED' && result !== 'FAILED') {
                res.status(400).json({ error: 'result must be PENDING, PASSED, or FAILED' });
                return;
            }
            updateData.result = result;
        }

        if (notes !== undefined) {
            updateData.notes = typeof notes === 'string' ? notes.trim() || null : null;
        }

        // Update test session
        const updated = await prisma.testSession.update({
            where: { id },
            data: updateData,
            include: {
                application: {
                    include: {
                        applicant: {
                            select: {
                                id: true,
                                email: true,
                            },
                        },
                        professionalQualification: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
                qualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                        edrpou: true,
                    },
                },
            },
        });

        // If result is PASSED, create Professional record (certificate holder)
        if (updateData.result === 'PASSED' && testSession.result !== 'PASSED') {
            const application = testSession.application;

            // Check if Professional already exists for this user+qualification
            const existingProfessional = await prisma.professional.findFirst({
                where: {
                    userId: application.applicantId,
                    professionalQualificationId: application.professionalQualificationId,
                },
            });

            if (!existingProfessional) {
                // Generate certificate number (format: NQR-YYYY-XXXXXX)
                const year = new Date().getFullYear();
                const randomSuffix = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
                const certificateNumber = `NQR-${year}-${randomSuffix}`;

                // Get applicant's name (use email as fallback if no name field)
                // In a real app, you might have a separate profile table with fullName
                const applicantName = application.applicant.email.split('@')[0]; // Fallback

                // Create Professional record
                await prisma.professional.create({
                    data: {
                        fullName: applicantName, // In production, get from user profile
                        qualificationCenterId: testSession.qualificationCenterId,
                        professionalQualificationId: application.professionalQualificationId,
                        certificateNumber,
                        certificateReceivedAt: new Date(),
                        userId: application.applicantId,
                    },
                });
            }

            // Update application status
            await prisma.application.update({
                where: { id: application.id },
                data: { status: 'APPROVED' },
            });
        } else if (updateData.result === 'FAILED' && testSession.result !== 'FAILED') {
            // Update application status to REFUSED
            await prisma.application.update({
                where: { id: testSession.application.id },
                data: { status: 'REFUSED' },
            });
        } else if (updateData.result) {
            // Update application status to TESTED if result is set
            await prisma.application.update({
                where: { id: testSession.application.id },
                data: { status: 'TESTED' },
            });
        }

        res.json(updated);
    } catch (err) {
        console.error('Failed to update test session', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/test-sessions
 * List test sessions with optional filters
 * Requires MANAGER role
 */
router.get('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const page = Math.max(1, parseInt(req.query.page as string) || 1);
        const pageSize = Math.max(1, Math.min(100, parseInt(req.query.pageSize as string) || 10));
        const applicationId = req.query.applicationId as string | undefined;
        const centerId = req.query.centerId as string | undefined;
        const result = req.query.result as string | undefined;

        const skip = (page - 1) * pageSize;

        const where: any = {};
        if (applicationId) {
            const appId = parseInt(applicationId);
            if (Number.isInteger(appId)) {
                where.applicationId = appId;
            }
        }
        if (centerId) {
            const cId = parseInt(centerId);
            if (Number.isInteger(cId)) {
                where.qualificationCenterId = cId;
            }
        }
        if (result && (result === 'PENDING' || result === 'PASSED' || result === 'FAILED')) {
            where.result = result;
        }

        const [total, items] = await Promise.all([
            prisma.testSession.count({ where }),
            prisma.testSession.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { scheduledAt: 'desc' },
                include: {
                    application: {
                        include: {
                            applicant: {
                                select: {
                                    id: true,
                                    email: true,
                                },
                            },
                            professionalQualification: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                    },
                    qualificationCenter: {
                        select: {
                            id: true,
                            name: true,
                            edrpou: true,
                        },
                    },
                },
            }),
        ]);

        res.json({
            items,
            total,
            page,
            pageSize,
        });
    } catch (err) {
        console.error('Failed to get test sessions', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
