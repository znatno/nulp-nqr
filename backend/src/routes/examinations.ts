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
 * GET /api/examinations
 * Get paginated list of examinations with optional search
 * Query params: page, pageSize, search
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const page = Math.max(1, parseInt(req.query.page as string) || 1);
        const pageSize = Math.max(1, Math.min(100, parseInt(req.query.pageSize as string) || 10));
        const search = (req.query.search as string)?.trim() || '';

        const skip = (page - 1) * pageSize;

        // Build where clause for search (examinations don't have direct text fields, so we'll search by related entities)
        const where = search
            ? {
                  OR: [
                      // Note: Prisma doesn't support nested search easily, so we'll keep it simple for now
                      // In a real app, you might want to join and search related entities
                  ],
              }
            : {};

        // Get total count and items
        const [total, items] = await Promise.all([
            prisma.qualificationCenterExpertise.count({ where }),
            prisma.qualificationCenterExpertise.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { id: 'asc' },
                include: {
                    professionalQualification: true,
                    qualificationCenter: true,
                    accreditationExpert: true,
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
        console.error('Failed to get examinations', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/examinations/:id
 * Get a single examination by ID
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const examination = await prisma.qualificationCenterExpertise.findUnique({
            where: { id },
            include: {
                professionalQualification: true,
                qualificationCenter: true,
                accreditationExpert: true,
            },
        });

        if (!examination) {
            res.sendStatus(404);
            return;
        }

        res.json(examination);
    } catch (err) {
        console.error('Failed to get examination', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * POST /api/examinations
 * Create a new examination
 * Requires MANAGER role
 */
router.post('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const { professionalQualificationId, qualificationCenterId, accreditationExpertId, expertiseDate } = req.body as {
        professionalQualificationId?: unknown;
        qualificationCenterId?: unknown;
        accreditationExpertId?: unknown;
        expertiseDate?: unknown;
    };

    // Validation
    if (typeof professionalQualificationId !== 'number' || !Number.isInteger(professionalQualificationId)) {
        res.status(400).json({ error: 'professionalQualificationId must be an integer' });
        return;
    }
    if (typeof qualificationCenterId !== 'number' || !Number.isInteger(qualificationCenterId)) {
        res.status(400).json({ error: 'qualificationCenterId must be an integer' });
        return;
    }
    if (typeof accreditationExpertId !== 'number' || !Number.isInteger(accreditationExpertId)) {
        res.status(400).json({ error: 'accreditationExpertId must be an integer' });
        return;
    }

    try {
        const examination = await prisma.qualificationCenterExpertise.create({
            data: {
                professionalQualificationId,
                qualificationCenterId,
                accreditationExpertId,
                expertiseDate: expertiseDate ? new Date(expertiseDate as string) : new Date(),
            },
            include: {
                professionalQualification: true,
                qualificationCenter: true,
                accreditationExpert: true,
            },
        });
        res.status(201).json(examination);
    } catch (err) {
        console.error('Failed to create examination', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * PUT /api/examinations/:id
 * Update an existing examination
 * Requires MANAGER role
 */
router.put('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    const { professionalQualificationId, qualificationCenterId, accreditationExpertId, expertiseDate } = req.body as {
        professionalQualificationId?: unknown;
        qualificationCenterId?: unknown;
        accreditationExpertId?: unknown;
        expertiseDate?: unknown;
    };

    // Validation
    if (professionalQualificationId !== undefined && (typeof professionalQualificationId !== 'number' || !Number.isInteger(professionalQualificationId))) {
        res.status(400).json({ error: 'professionalQualificationId must be an integer' });
        return;
    }
    if (qualificationCenterId !== undefined && (typeof qualificationCenterId !== 'number' || !Number.isInteger(qualificationCenterId))) {
        res.status(400).json({ error: 'qualificationCenterId must be an integer' });
        return;
    }
    if (accreditationExpertId !== undefined && (typeof accreditationExpertId !== 'number' || !Number.isInteger(accreditationExpertId))) {
        res.status(400).json({ error: 'accreditationExpertId must be an integer' });
        return;
    }

    try {
        // Check if examination exists
        const existing = await prisma.qualificationCenterExpertise.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        const examination = await prisma.qualificationCenterExpertise.update({
            where: { id },
            data: {
                ...(professionalQualificationId !== undefined ? { professionalQualificationId } : {}),
                ...(qualificationCenterId !== undefined ? { qualificationCenterId } : {}),
                ...(accreditationExpertId !== undefined ? { accreditationExpertId } : {}),
                ...(expertiseDate !== undefined ? { expertiseDate: new Date(expertiseDate as string) } : {}),
            },
            include: {
                professionalQualification: true,
                qualificationCenter: true,
                accreditationExpert: true,
            },
        });
        res.json(examination);
    } catch (err) {
        console.error('Failed to update examination', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * DELETE /api/examinations/:id
 * Delete an examination
 * Requires MANAGER role
 */
router.delete('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    try {
        // Check if examination exists
        const existing = await prisma.qualificationCenterExpertise.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        await prisma.qualificationCenterExpertise.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err) {
        console.error('Failed to delete examination', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
