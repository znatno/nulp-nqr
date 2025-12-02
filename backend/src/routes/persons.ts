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
 * GET /api/persons
 * Get paginated list of persons with optional search
 * Query params: page, pageSize, search
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const page = Math.max(1, parseInt(req.query.page as string) || 1);
        const pageSize = Math.max(1, Math.min(100, parseInt(req.query.pageSize as string) || 10));
        const search = (req.query.search as string)?.trim() || '';

        const skip = (page - 1) * pageSize;

        // Build where clause for search
        const where = search
            ? {
                  OR: [
                      { fullName: { contains: search, mode: 'insensitive' as const } },
                  ],
              }
            : {};

        // Get total count and items
        const [total, items] = await Promise.all([
            prisma.professional.count({ where }),
            prisma.professional.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { id: 'asc' },
                select: {
                    id: true,
                    fullName: true,
                    qualificationCenterId: true,
                    professionalQualificationId: true,
                    certificateNumber: true,
                    certificateReceivedAt: true,
                    qualificationCenter: {
                        select: {
                            id: true,
                            name: true,
                            edrpou: true,
                            address: true,
                        },
                    },
                    professionalQualification: {
                        select: {
                            id: true,
                            name: true,
                            nqrLevel: true,
                            professionId: true,
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
            }),
        ]);

        res.json({
            items,
            total,
            page,
            pageSize,
        });
    } catch (err) {
        console.error('Failed to get persons', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/persons/:id
 * Get a single person by ID
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const person = await prisma.professional.findUnique({
            where: { id },
            select: {
                id: true,
                fullName: true,
                qualificationCenterId: true,
                professionalQualificationId: true,
                userId: true,
                certificateNumber: true,
                certificateReceivedAt: true,
                qualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                        edrpou: true,
                        address: true,
                    },
                },
                professionalQualification: {
                    select: {
                        id: true,
                        name: true,
                        nqrLevel: true,
                        professionId: true,
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

        if (!person) {
            res.sendStatus(404);
            return;
        }

        res.json(person);
    } catch (err) {
        console.error('Failed to get person', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * POST /api/persons
 * Create a new person
 * Requires MANAGER role
 */
router.post('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const { fullName, qualificationCenterId, professionalQualificationId, certificateNumber, certificateReceivedAt } = req.body as {
        fullName?: unknown;
        qualificationCenterId?: unknown;
        professionalQualificationId?: unknown;
        certificateNumber?: unknown;
        certificateReceivedAt?: unknown;
    };

    // Validation
    if (typeof fullName !== 'string' || !fullName.trim()) {
        res.status(400).json({ error: 'fullName is required' });
        return;
    }
    if (typeof qualificationCenterId !== 'number' || !Number.isInteger(qualificationCenterId)) {
        res.status(400).json({ error: 'qualificationCenterId must be an integer' });
        return;
    }
    if (typeof professionalQualificationId !== 'number' || !Number.isInteger(professionalQualificationId)) {
        res.status(400).json({ error: 'professionalQualificationId must be an integer' });
        return;
    }
    if (typeof certificateNumber !== 'string' || !certificateNumber.trim()) {
        res.status(400).json({ error: 'certificateNumber is required' });
        return;
    }

    try {
        const person = await prisma.professional.create({
            data: {
                fullName: fullName.trim(),
                qualificationCenterId,
                professionalQualificationId,
                certificateNumber: certificateNumber.trim(),
                certificateReceivedAt: certificateReceivedAt ? new Date(certificateReceivedAt as string) : new Date(),
            },
            select: {
                id: true,
                fullName: true,
                qualificationCenterId: true,
                professionalQualificationId: true,
                userId: true,
                certificateNumber: true,
                certificateReceivedAt: true,
                qualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                        edrpou: true,
                        address: true,
                    },
                },
                professionalQualification: {
                    select: {
                        id: true,
                        name: true,
                        nqrLevel: true,
                        professionId: true,
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
        res.status(201).json(person);
    } catch (err) {
        console.error('Failed to create person', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * PUT /api/persons/:id
 * Update an existing person
 * Requires MANAGER role
 */
router.put('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    const { fullName, qualificationCenterId, professionalQualificationId, certificateNumber, certificateReceivedAt } = req.body as {
        fullName?: unknown;
        qualificationCenterId?: unknown;
        professionalQualificationId?: unknown;
        certificateNumber?: unknown;
        certificateReceivedAt?: unknown;
    };

    // Validation
    if (fullName !== undefined && (typeof fullName !== 'string' || !fullName.trim())) {
        res.status(400).json({ error: 'fullName must be a non-empty string' });
        return;
    }
    if (qualificationCenterId !== undefined && (typeof qualificationCenterId !== 'number' || !Number.isInteger(qualificationCenterId))) {
        res.status(400).json({ error: 'qualificationCenterId must be an integer' });
        return;
    }
    if (professionalQualificationId !== undefined && (typeof professionalQualificationId !== 'number' || !Number.isInteger(professionalQualificationId))) {
        res.status(400).json({ error: 'professionalQualificationId must be an integer' });
        return;
    }
    if (certificateNumber !== undefined && (typeof certificateNumber !== 'string' || !certificateNumber.trim())) {
        res.status(400).json({ error: 'certificateNumber must be a non-empty string' });
        return;
    }

    try {
        // Check if person exists
        const existing = await prisma.professional.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        const person = await prisma.professional.update({
            where: { id },
            data: {
                ...(fullName !== undefined ? { fullName: fullName.trim() } : {}),
                ...(qualificationCenterId !== undefined ? { qualificationCenterId } : {}),
                ...(professionalQualificationId !== undefined ? { professionalQualificationId } : {}),
                ...(certificateNumber !== undefined ? { certificateNumber: certificateNumber.trim() } : {}),
                ...(certificateReceivedAt !== undefined ? { certificateReceivedAt: new Date(certificateReceivedAt as string) } : {}),
            },
            select: {
                id: true,
                fullName: true,
                qualificationCenterId: true,
                professionalQualificationId: true,
                userId: true,
                certificateNumber: true,
                certificateReceivedAt: true,
                qualificationCenter: {
                    select: {
                        id: true,
                        name: true,
                        edrpou: true,
                        address: true,
                    },
                },
                professionalQualification: {
                    select: {
                        id: true,
                        name: true,
                        nqrLevel: true,
                        professionId: true,
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
        res.json(person);
    } catch (err) {
        console.error('Failed to update person', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * DELETE /api/persons/:id
 * Delete a person
 * Requires MANAGER role
 */
router.delete('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    try {
        // Check if person exists
        const existing = await prisma.professional.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        await prisma.professional.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err) {
        console.error('Failed to delete person', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
