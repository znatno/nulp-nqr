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
 * GET /api/applications
 * List/filter all applications by status, qualification, center
 * Requires MANAGER role
 */
router.get('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const page = Math.max(1, parseInt(req.query.page as string) || 1);
        const pageSize = Math.max(1, Math.min(100, parseInt(req.query.pageSize as string) || 10));
        const status = req.query.status as string | undefined;
        const qualificationId = req.query.qualificationId as string | undefined;
        const centerId = req.query.centerId as string | undefined;

        const skip = (page - 1) * pageSize;

        const where: any = {};
        if (status) {
            where.status = status;
        }
        if (qualificationId) {
            const qId = parseInt(qualificationId);
            if (Number.isInteger(qId)) {
                where.professionalQualificationId = qId;
            }
        }
        if (centerId) {
            const cId = parseInt(centerId);
            if (Number.isInteger(cId)) {
                where.OR = [
                    { preferredQualificationCenterId: cId },
                    { qualificationCenterId: cId },
                ];
            }
        }

        const [total, items] = await Promise.all([
            prisma.application.count({ where }),
            prisma.application.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { createdAt: 'desc' },
                include: {
                    applicant: {
                        select: {
                            id: true,
                            email: true,
                        },
                    },
                    professionalQualification: {
                        include: {
                            profession: {
                                select: {
                                    id: true,
                                    name: true,
                                    code: true,
                                },
                            },
                        },
                    },
                    preferredQualificationCenter: {
                        select: {
                            id: true,
                            name: true,
                            edrpou: true,
                        },
                    },
                    assignedQualificationCenter: {
                        select: {
                            id: true,
                            name: true,
                            edrpou: true,
                        },
                    },
                    testSessions: {
                        include: {
                            qualificationCenter: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                        orderBy: { scheduledAt: 'desc' },
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
        console.error('Failed to get applications', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/applications/:id
 * Get application details including linked TestSession and resulting Professional
 * Requires MANAGER role
 */
router.get('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const application = await prisma.application.findUnique({
            where: { id },
            include: {
                applicant: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
                professionalQualification: {
                    include: {
                        profession: {
                            select: {
                                id: true,
                                name: true,
                                code: true,
                            },
                        },
                    },
                },
                preferredQualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                        edrpou: true,
                        address: true,
                    },
                },
                assignedQualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                        edrpou: true,
                        address: true,
                    },
                },
                testSessions: {
                    include: {
                        qualificationCenter: {
                            select: {
                                id: true,
                                name: true,
                                edrpou: true,
                            },
                        },
                    },
                    orderBy: { scheduledAt: 'desc' },
                },
            },
        });

        if (!application) {
            res.sendStatus(404);
            return;
        }

        // Check if there's a resulting Professional record (certificate holder)
        const professional = await prisma.professional.findFirst({
            where: {
                professionalQualificationId: application.professionalQualificationId,
                userId: application.applicantId,
            },
            include: {
                qualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                        edrpou: true,
                    },
                },
                professionalQualification: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
            orderBy: { certificateReceivedAt: 'desc' },
        });

        res.json({
            ...application,
            resultingProfessional: professional || null,
        });
    } catch (err) {
        console.error('Failed to get application', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * PUT /api/applications/:id/assign-center
 * Assign application to a specific QualificationCenter
 * Requires MANAGER role
 */
router.put('/:id/assign-center', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const { qualificationCenterId } = req.body as {
            qualificationCenterId?: unknown;
        };

        if (typeof qualificationCenterId !== 'number' || !Number.isInteger(qualificationCenterId)) {
            res.status(400).json({ error: 'qualificationCenterId must be an integer' });
            return;
        }

        // Check if application exists
        const application = await prisma.application.findUnique({
            where: { id },
            include: { professionalQualification: true },
        });

        if (!application) {
            res.status(404).json({ error: 'Application not found' });
            return;
        }

        // Verify center exists
        const center = await prisma.qualificationCenter.findUnique({
            where: { id: qualificationCenterId },
        });

        if (!center) {
            res.status(404).json({ error: 'Qualification center not found' });
            return;
        }

        // Verify that the qualification is available at this center (has active accreditation)
        const accreditation = await prisma.qualificationCenterAccreditation.findFirst({
            where: {
                qualificationCenterId,
                professionalQualificationId: application.professionalQualificationId,
                status: 'ACTIVE',
            },
        });

        if (!accreditation) {
            res.status(400).json({
                error: 'This qualification is not available at the selected centre',
            });
            return;
        }

        // Update application
        const updated = await prisma.application.update({
            where: { id },
            data: {
                qualificationCenterId,
                status: application.status === 'DRAFT' ? 'UNDER_REVIEW' : application.status,
            },
            include: {
                applicant: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
                professionalQualification: {
                    include: {
                        profession: true,
                    },
                },
                assignedQualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                        edrpou: true,
                    },
                },
            },
        });

        res.json(updated);
    } catch (err) {
        console.error('Failed to assign center to application', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
