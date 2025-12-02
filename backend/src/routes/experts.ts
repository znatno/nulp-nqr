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
 * GET /api/experts
 * Get paginated list of accreditation experts with optional search
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
                  fullName: { contains: search, mode: 'insensitive' as const },
              }
            : {};

        // Get total count and items
        const [total, items] = await Promise.all([
            prisma.accreditationExpert.count({ where }),
            prisma.accreditationExpert.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { id: 'asc' },
                include: {
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
                    user: {
                        select: {
                            id: true,
                            email: true,
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
        console.error('Failed to get experts', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/experts/:id
 * Get a single expert by ID
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const expert = await prisma.accreditationExpert.findUnique({
            where: { id },
            include: {
                professionalQualification: {
                    include: {
                        profession: true,
                    },
                },
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
        });

        if (!expert) {
            res.sendStatus(404);
            return;
        }

        res.json(expert);
    } catch (err) {
        console.error('Failed to get expert', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * POST /api/experts
 * Create a new accreditation expert
 * Requires MANAGER role
 */
router.post('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const { fullName, professionalQualificationId, userId } = req.body as {
        fullName?: unknown;
        professionalQualificationId?: unknown;
        userId?: unknown;
    };

    // Validation
    if (typeof fullName !== 'string' || !fullName.trim()) {
        res.status(400).json({ error: 'fullName is required' });
        return;
    }

    if (typeof professionalQualificationId !== 'number' || !Number.isInteger(professionalQualificationId)) {
        res.status(400).json({ error: 'professionalQualificationId must be an integer' });
        return;
    }

    // Verify qualification exists
    const qualification = await prisma.professionalQualification.findUnique({
        where: { id: professionalQualificationId },
    });

    if (!qualification) {
        res.status(404).json({ error: 'Professional qualification not found' });
        return;
    }

    // If userId provided, verify it exists
    if (userId !== undefined) {
        if (typeof userId !== 'number' || !Number.isInteger(userId)) {
            res.status(400).json({ error: 'userId must be an integer' });
            return;
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
    }

    try {
        const expert = await prisma.accreditationExpert.create({
            data: {
                fullName: fullName.trim(),
                professionalQualificationId,
                userId: userId !== undefined ? userId : null,
            },
            include: {
                professionalQualification: {
                    include: {
                        profession: true,
                    },
                },
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
        });
        res.status(201).json(expert);
    } catch (err) {
        console.error('Failed to create expert', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * PUT /api/experts/:id
 * Update an existing expert
 * Requires MANAGER role
 */
router.put('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    const { fullName, professionalQualificationId, userId } = req.body as {
        fullName?: unknown;
        professionalQualificationId?: unknown;
        userId?: unknown;
    };

    // Validation
    if (fullName !== undefined && (typeof fullName !== 'string' || !fullName.trim())) {
        res.status(400).json({ error: 'fullName must be a non-empty string' });
        return;
    }

    if (professionalQualificationId !== undefined && (typeof professionalQualificationId !== 'number' || !Number.isInteger(professionalQualificationId))) {
        res.status(400).json({ error: 'professionalQualificationId must be an integer' });
        return;
    }

    if (userId !== undefined && userId !== null && (typeof userId !== 'number' || !Number.isInteger(userId))) {
        res.status(400).json({ error: 'userId must be an integer or null' });
        return;
    }

    try {
        // Check if expert exists
        const existing = await prisma.accreditationExpert.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        // If qualificationId provided, verify it exists
        if (professionalQualificationId !== undefined) {
            const qualification = await prisma.professionalQualification.findUnique({
                where: { id: professionalQualificationId },
            });
            if (!qualification) {
                res.status(404).json({ error: 'Professional qualification not found' });
                return;
            }
        }

        // If userId provided, verify it exists
        if (userId !== undefined && userId !== null) {
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
        }

        const expert = await prisma.accreditationExpert.update({
            where: { id },
            data: {
                ...(fullName !== undefined ? { fullName: fullName.trim() } : {}),
                ...(professionalQualificationId !== undefined ? { professionalQualificationId } : {}),
                ...(userId !== undefined ? { userId: userId === null ? null : userId } : {}),
            },
            include: {
                professionalQualification: {
                    include: {
                        profession: true,
                    },
                },
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
        });
        res.json(expert);
    } catch (err) {
        console.error('Failed to update expert', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * DELETE /api/experts/:id
 * Delete an expert
 * Requires MANAGER role
 */
router.delete('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    try {
        // Check if expert exists
        const existing = await prisma.accreditationExpert.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        await prisma.accreditationExpert.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err) {
        console.error('Failed to delete expert', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
