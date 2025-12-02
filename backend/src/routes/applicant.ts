import { Router, Request, Response } from 'express';
import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { authenticate, requireApplicant } from '../middleware/auth.js';

const router = Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// All routes require authentication and applicant capability
router.use(authenticate);
router.use(requireApplicant());

/**
 * GET /api/applicant/centres
 * Get list of qualification centres (read-only for applicants)
 * Query params: search (optional)
 */
router.get('/centres', async (req: Request, res: Response): Promise<void> => {
    try {
        const search = (req.query.search as string)?.trim() || '';

        // Build where clause for search
        const where = search
            ? {
                  OR: [
                      { name: { contains: search, mode: 'insensitive' as const } },
                      { edrpou: { contains: search, mode: 'insensitive' as const } },
                      { address: { contains: search, mode: 'insensitive' as const } },
                  ],
              }
            : {};

        const centres = await prisma.qualificationCenter.findMany({
            where,
            orderBy: { name: 'asc' },
            select: {
                id: true,
                name: true,
                edrpou: true,
                address: true,
            },
        });

        res.json(centres);
    } catch (err) {
        console.error('Failed to get qualification centres', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/applicant/centres/:id/qualifications
 * Get qualifications available at a specific centre
 */
router.get('/centres/:id/qualifications', async (req: Request, res: Response): Promise<void> => {
    try {
        const centreId = Number(req.params.id);
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

        // Get qualifications that have accreditations at this centre
        const accreditations = await prisma.qualificationCenterAccreditation.findMany({
            where: { qualificationCenterId: centreId },
            include: {
                professionalQualification: {
                    include: {
                        profession: true,
                    },
                },
            },
        });

        // Map to return unique qualifications with basic info
        const qualificationsMap = new Map();
        accreditations.forEach((acc) => {
            const pq = acc.professionalQualification;
            if (!qualificationsMap.has(pq.id)) {
                qualificationsMap.set(pq.id, {
                    id: pq.id,
                    name: pq.name,
                    nqrLevel: pq.nqrLevel,
                    profession: pq.profession ? {
                        id: pq.profession.id,
                        name: pq.profession.name,
                        code: pq.profession.code,
                    } : null,
                });
            }
        });

        res.json(Array.from(qualificationsMap.values()));
    } catch (err) {
        console.error('Failed to get centre qualifications', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/applicant/applications/:id
 * Get a single application by ID (must belong to current user)
 */
router.get('/applications/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const application = await prisma.application.findFirst({
            where: {
                id,
                applicantId: req.user.id, // Ensure user owns this application
            },
            include: {
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
        });

        if (!application) {
            res.status(404).json({ error: 'Application not found' });
            return;
        }

        res.json(application);
    } catch (err) {
        console.error('Failed to get application', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/applicant/applications
 * Get current user's applications
 * Query params: page, pageSize, status (optional filter)
 */
router.get('/applications', async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        const page = Math.max(1, parseInt(req.query.page as string) || 1);
        const pageSize = Math.max(1, Math.min(100, parseInt(req.query.pageSize as string) || 10));
        const status = req.query.status as string | undefined;

        const skip = (page - 1) * pageSize;

        const where: any = {
            applicantId: req.user.id,
        };

        if (status) {
            where.status = status;
        }

        const [total, items] = await Promise.all([
            prisma.application.count({ where }),
            prisma.application.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { createdAt: 'desc' },
                include: {
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
 * POST /api/applicant/applications
 * Create a new application
 */
router.post('/applications', async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        const { centreId, qualificationId, fullName, comment } = req.body as {
            centreId?: unknown;
            qualificationId?: unknown;
            fullName?: unknown;
            comment?: unknown;
        };

        // Validation
        if (centreId !== undefined && (typeof centreId !== 'number' || !Number.isInteger(centreId))) {
            res.status(400).json({ error: 'centreId must be an integer' });
            return;
        }

        if (typeof qualificationId !== 'number' || !Number.isInteger(qualificationId)) {
            res.status(400).json({ error: 'qualificationId must be an integer' });
            return;
        }

        if (typeof fullName !== 'string' || !fullName.trim()) {
            res.status(400).json({ error: 'fullName is required' });
            return;
        }

        // Verify qualification exists
        const qualification = await prisma.professionalQualification.findUnique({
            where: { id: qualificationId },
        });

        if (!qualification) {
            res.status(404).json({ error: 'Professional qualification not found' });
            return;
        }

        // If centreId provided, verify it exists and has accreditation
        if (centreId !== undefined) {
            const centre = await prisma.qualificationCenter.findUnique({
                where: { id: centreId },
            });

            if (!centre) {
                res.status(404).json({ error: 'Qualification centre not found' });
                return;
            }

            // Verify that the qualification is available at this centre (has accreditation)
            const accreditation = await prisma.qualificationCenterAccreditation.findFirst({
                where: {
                    qualificationCenterId: centreId,
                    professionalQualificationId: qualificationId,
                    status: 'ACTIVE', // Only active accreditations
                },
            });

            if (!accreditation) {
                res.status(400).json({
                    error: 'This qualification is not available at the selected centre',
                });
                return;
            }
        }

        // Create application
        const application = await prisma.application.create({
            data: {
                applicantId: req.user.id,
                fullName: fullName.trim(),
                preferredQualificationCenterId: centreId,
                professionalQualificationId: qualificationId,
                status: 'SUBMITTED',
                comment: typeof comment === 'string' ? comment.trim() || null : null,
            },
            include: {
                preferredQualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                        edrpou: true,
                        address: true,
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
            },
        });

        res.status(201).json(application);
    } catch (err) {
        console.error('Failed to create application', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/applicant/certificates
 * Get current user's certificates (Professional records linked to user)
 */
router.get('/certificates', async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        const professionals = await prisma.professional.findMany({
            where: {
                userId: req.user.id,
            },
            include: {
                qualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                        edrpou: true,
                        address: true,
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
            },
            orderBy: { certificateReceivedAt: 'desc' },
        });

        // Map to certificate-like format
        const certificates = professionals.map((professional) => {
            // Calculate status (simplified: assume certificates don't expire unless business logic says otherwise)
            // For now, all are "valid" - you can add expiry logic later
            const status = 'valid'; // Could be 'valid' | 'expired' | 'revoked'

            return {
                id: professional.id,
                certificateNumber: professional.certificateNumber,
                fullName: professional.fullName,
                qualification: {
                    id: professional.professionalQualification.id,
                    name: professional.professionalQualification.name,
                    nqrLevel: professional.professionalQualification.nqrLevel,
                    profession: professional.professionalQualification.profession,
                },
                centre: professional.qualificationCenter,
                issueDate: professional.certificateReceivedAt,
                expiryDate: null, // Add if you have expiry logic
                status,
            };
        });

        res.json(certificates);
    } catch (err) {
        console.error('Failed to get certificates', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
