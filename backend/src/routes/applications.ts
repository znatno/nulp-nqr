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

/**
 * POST /api/applications/:id/test-sessions
 * Create TestSession for the application
 * Requires MANAGER role
 */
router.post('/:id/test-sessions', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const applicationId = Number(req.params.id);
        if (!Number.isInteger(applicationId)) {
            res.status(400).json({ error: 'Invalid application ID' });
            return;
        }

        const { qualificationCenterId, scheduledAt, notes } = req.body as {
            qualificationCenterId?: unknown;
            scheduledAt?: unknown;
            notes?: unknown;
        };

        // Validation
        if (typeof qualificationCenterId !== 'number' || !Number.isInteger(qualificationCenterId)) {
            res.status(400).json({ error: 'qualificationCenterId must be an integer' });
            return;
        }

        if (!scheduledAt || typeof scheduledAt !== 'string') {
            res.status(400).json({ error: 'scheduledAt is required and must be an ISO date string' });
            return;
        }

        const scheduledAtDate = new Date(scheduledAt);
        if (isNaN(scheduledAtDate.getTime())) {
            res.status(400).json({ error: 'Invalid scheduledAt format' });
            return;
        }

        // Check if application exists and has assigned center
        const application = await prisma.application.findUnique({
            where: { id: applicationId },
            include: {
                professionalQualification: true,
                assignedQualificationCenter: true,
            },
        });

        if (!application) {
            res.status(404).json({ error: 'Application not found' });
            return;
        }

        if (!application.qualificationCenterId) {
            res.status(400).json({ error: 'Application must have an assigned center before creating test session' });
            return;
        }

        if (application.qualificationCenterId !== qualificationCenterId) {
            res.status(400).json({ error: 'Test session center must match assigned center' });
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

        // Create test session
        const testSession = await prisma.testSession.create({
            data: {
                applicationId,
                qualificationCenterId,
                scheduledAt: scheduledAtDate,
                result: 'PENDING',
                notes: typeof notes === 'string' ? notes.trim() || null : null,
            },
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

        // Update application status
        await prisma.application.update({
            where: { id: applicationId },
            data: { status: 'SCHEDULED' },
        });

        res.status(201).json(testSession);
    } catch (err) {
        console.error('Failed to create test session', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * POST /api/applications/:id/issue-certificate
 * Issue a certificate for an approved application
 * Requires MANAGER role
 */
router.post('/:id/issue-certificate', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        // Get application with all necessary data
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
                    select: {
                        id: true,
                        name: true,
                    },
                },
                assignedQualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                preferredQualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });

        if (!application) {
            res.status(404).json({ error: 'Заявку не знайдено' });
            return;
        }

        // Check if application is approved
        if (application.status !== 'APPROVED') {
            res.status(400).json({ error: 'Сертифікат можна видати тільки для схвалених заявок' });
            return;
        }

        // Check if certificate already exists
        const existingProfessional = await prisma.professional.findFirst({
            where: {
                userId: application.applicantId,
                professionalQualificationId: application.professionalQualificationId,
            },
        });

        if (existingProfessional) {
            res.status(400).json({ error: 'Сертифікат для цієї заявки вже видано' });
            return;
        }

        // Determine qualification center (assigned or preferred)
        const qualificationCenterId = application.qualificationCenterId || application.preferredQualificationCenterId;
        if (!qualificationCenterId) {
            res.status(400).json({ error: 'Не вказано кваліфікаційний центр. Спочатку призначте центр заявці.' });
            return;
        }

        // Verify center exists
        const center = await prisma.qualificationCenter.findUnique({
            where: { id: qualificationCenterId },
        });
        if (!center) {
            res.status(404).json({ error: 'Кваліфікаційний центр не знайдено' });
            return;
        }

        // Generate unique certificate number (format: NQR-YYYY-XXXXXX)
        let certificateNumber: string;
        let attempts = 0;
        const maxAttempts = 10;
        do {
            const year = new Date().getFullYear();
            const randomSuffix = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
            certificateNumber = `NQR-${year}-${randomSuffix}`;
            
            const existing = await prisma.professional.findUnique({
                where: { certificateNumber },
            });
            
            if (!existing) {
                break;
            }
            attempts++;
        } while (attempts < maxAttempts);

        if (attempts >= maxAttempts) {
            res.status(500).json({ error: 'Не вдалося згенерувати унікальний номер сертифікату. Спробуйте ще раз.' });
            return;
        }

        // Create Professional record (certificate)
        const professional = await prisma.professional.create({
            data: {
                fullName: application.fullName,
                qualificationCenterId,
                professionalQualificationId: application.professionalQualificationId,
                certificateNumber,
                certificateReceivedAt: new Date(),
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
        });

        res.status(201).json(professional);
    } catch (err: any) {
        console.error('Failed to issue certificate', err);
        // Handle Prisma errors
        if (err.code === 'P2002') {
            res.status(400).json({ error: 'Сертифікат з таким номером вже існує. Спробуйте ще раз.' });
            return;
        }
        if (err.code === 'P2003') {
            res.status(400).json({ error: 'Невірні дані для створення сертифікату' });
            return;
        }
        res.status(500).json({ error: err.message || 'Внутрішня помилка сервера' });
    }
});

/**
 * PUT /api/applications/:id
 * Update application (status, comment, etc.)
 * Requires MANAGER role
 * Note: This route must come after more specific routes like /:id/assign-center
 */
router.put('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const { status, comment, fullName } = req.body as {
            status?: unknown;
            comment?: unknown;
            fullName?: unknown;
        };

        // Check if application exists
        const application = await prisma.application.findUnique({
            where: { id },
        });

        if (!application) {
            res.status(404).json({ error: 'Application not found' });
            return;
        }

        // Validate status if provided
        const validStatuses = ['DRAFT', 'SUBMITTED', 'UNDER_REVIEW', 'SCHEDULED', 'TESTED', 'APPROVED', 'REFUSED'];
        if (status !== undefined) {
            if (typeof status !== 'string' || !validStatuses.includes(status)) {
                res.status(400).json({ error: `status must be one of: ${validStatuses.join(', ')}` });
                return;
            }
        }

        // Validate fullName if provided
        if (fullName !== undefined && (typeof fullName !== 'string' || !fullName.trim())) {
            res.status(400).json({ error: 'fullName must be a non-empty string' });
            return;
        }

        // Build update data
        const updateData: any = {};
        if (status !== undefined) {
            updateData.status = status;
        }
        if (comment !== undefined) {
            updateData.comment = typeof comment === 'string' ? comment.trim() || null : null;
        }
        if (fullName !== undefined) {
            updateData.fullName = fullName.trim();
        }

        // Update application
        const updated = await prisma.application.update({
            where: { id },
            data: updateData,
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

        res.json(updated);
    } catch (err) {
        console.error('Failed to update application', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
