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
 * GET /api/developers
 * Get paginated list of developers with optional search
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
                      { name: { contains: search, mode: 'insensitive' as const } },
                      { edrpou: { contains: search, mode: 'insensitive' as const } },
                  ],
              }
            : {};

        // Get total count and items
        const [total, items] = await Promise.all([
            prisma.qualificationStandardDeveloper.count({ where }),
            prisma.qualificationStandardDeveloper.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { id: 'asc' },
            }),
        ]);

        res.json({
            items,
            total,
            page,
            pageSize,
        });
    } catch (err: any) {
        console.error('Failed to get developers', err);
        console.error('Error details:', {
            message: err.message,
            code: err.code,
            meta: err.meta,
            stack: err.stack,
        });
        res.status(500).json({ error: err.message || 'Internal server error' });
    }
});

/**
 * GET /api/developers/:id
 * Get a single developer by ID
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const developer = await prisma.qualificationStandardDeveloper.findUnique({
            where: { id },
        });

        if (!developer) {
            res.sendStatus(404);
            return;
        }

        res.json(developer);
    } catch (err) {
        console.error('Failed to get developer', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * POST /api/developers
 * Create a new developer
 * Requires MANAGER role
 */
router.post('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const { name, edrpou } = req.body as {
        name?: unknown;
        edrpou?: unknown;
    };

    // Validation
    if (typeof name !== 'string' || !name.trim()) {
        res.status(400).json({ error: 'Назва обов\'язкова' });
        return;
    }
    if (edrpou !== undefined && (typeof edrpou !== 'string' || !edrpou.trim())) {
        res.status(400).json({ error: 'ЄДРПОУ має бути непустим рядком' });
        return;
    }

    try {
        const developer = await prisma.qualificationStandardDeveloper.create({
            data: {
                name: name.trim(),
                edrpou: edrpou !== undefined && typeof edrpou === 'string' ? edrpou.trim() : '',
            },
        });
        res.status(201).json(developer);
    } catch (err: any) {
        console.error('Failed to create developer', err);
        // Handle Prisma errors
        if (err.code === 'P2002') {
            const field = err.meta?.target?.[0];
            if (field === 'edrpou') {
                res.status(400).json({ error: 'Розробник стандартів з таким ЄДРПОУ вже існує' });
                return;
            }
            res.status(400).json({ error: 'Розробник стандартів з такими даними вже існує' });
            return;
        }
        res.status(500).json({ error: err.message || 'Внутрішня помилка сервера' });
    }
});

/**
 * PUT /api/developers/:id
 * Update an existing developer
 * Requires MANAGER role
 */
router.put('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    const { name, edrpou } = req.body as {
        name?: unknown;
        edrpou?: unknown;
    };

    // Validation
    if (name !== undefined && (typeof name !== 'string' || !name.trim())) {
        res.status(400).json({ error: 'Name must be a non-empty string' });
        return;
    }
    if (edrpou !== undefined && (typeof edrpou !== 'string' || !edrpou.trim())) {
        res.status(400).json({ error: 'edrpou must be a non-empty string' });
        return;
    }

    try {
        // Check if developer exists
        const existing = await prisma.qualificationStandardDeveloper.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        const developer = await prisma.qualificationStandardDeveloper.update({
            where: { id },
            data: {
                ...(name !== undefined ? { name: name.trim() } : {}),
                ...(edrpou !== undefined ? { edrpou: edrpou.trim() } : {}),
            },
        });
        res.json(developer);
    } catch (err) {
        console.error('Failed to update developer', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * DELETE /api/developers/:id
 * Delete a developer
 * Requires MANAGER role
 */
router.delete('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    try {
        // Check if developer exists and has related records
        const existing = await prisma.qualificationStandardDeveloper.findUnique({ 
            where: { id },
            include: {
                professions: { take: 1 },
            },
        });
        if (!existing) {
            res.status(404).json({ error: 'Розробника стандартів не знайдено' });
            return;
        }

        // Check if there are related professions
        if (existing.professions.length > 0) {
            res.status(400).json({ 
                error: 'Неможливо видалити розробника стандартів, оскільки до нього прив\'язані професії. Спочатку видаліть всі пов\'язані професії.' 
            });
            return;
        }

        await prisma.qualificationStandardDeveloper.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err: any) {
        console.error('Failed to delete developer', err);
        // Handle Prisma foreign key constraint errors
        if (err.code === 'P2003') {
            res.status(400).json({ 
                error: 'Неможливо видалити розробника стандартів, оскільки він використовується в інших записах системи.' 
            });
            return;
        }
        res.status(500).json({ error: err.message || 'Внутрішня помилка сервера' });
    }
});

export default router;
