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
 * GET /api/professions
 * Get paginated list of professions with optional search
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
                      { code: { contains: search, mode: 'insensitive' as const } },
                  ],
              }
            : {};

        // Get total count and items
        const [total, items] = await Promise.all([
            prisma.profession.count({ where }),
            prisma.profession.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { id: 'asc' },
                include: { qualificationStandardDeveloper: true },
            }),
        ]);

        res.json({
            items,
            total,
            page,
            pageSize,
        });
    } catch (err) {
        console.error('Failed to get professions', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/professions/:id
 * Get a single profession by ID
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const profession = await prisma.profession.findUnique({
            where: { id },
            include: { qualificationStandardDeveloper: true },
        });

        if (!profession) {
            res.sendStatus(404);
            return;
        }

        res.json(profession);
    } catch (err) {
        console.error('Failed to get profession', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * POST /api/professions
 * Create a new profession
 * Requires MANAGER role
 */
router.post('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const { name, code, developerId } = req.body as {
        name?: unknown;
        code?: unknown;
        developerId?: unknown;
    };

    // Validation
    if (typeof name !== 'string' || !name.trim()) {
        res.status(400).json({ error: 'Name is required' });
        return;
    }
    if (typeof code !== 'string' || !code.trim()) {
        res.status(400).json({ error: 'Code is required' });
        return;
    }
    if (typeof developerId !== 'number' || !Number.isInteger(developerId)) {
        res.status(400).json({ error: 'developerId must be an integer' });
        return;
    }

    try {
        // Verify developer exists
        const developer = await prisma.qualificationStandardDeveloper.findUnique({
            where: { id: developerId },
        });
        if (!developer) {
            res.status(404).json({ error: 'Розробника стандартів не знайдено' });
            return;
        }

        const profession = await prisma.profession.create({
            data: {
                name: name.trim(),
                code: code.trim(),
                developerId,
            },
            include: { qualificationStandardDeveloper: true },
        });
        res.status(201).json(profession);
    } catch (err: any) {
        console.error('Failed to create profession', err);
        // Handle Prisma errors
        if (err.code === 'P2002') {
            const field = err.meta?.target?.[0];
            if (field === 'code') {
                res.status(400).json({ error: 'Професія з таким кодом вже існує' });
                return;
            }
            res.status(400).json({ error: 'Професія з такими даними вже існує' });
            return;
        }
        if (err.code === 'P2003') {
            res.status(400).json({ error: 'Невірний ідентифікатор розробника стандартів' });
            return;
        }
        res.status(500).json({ error: err.message || 'Внутрішня помилка сервера' });
    }
});

/**
 * PUT /api/professions/:id
 * Update an existing profession
 * Requires MANAGER role
 */
router.put('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    const { name, code, developerId } = req.body as {
        name?: unknown;
        code?: unknown;
        developerId?: unknown;
    };

    // Validation
    if (name !== undefined && (typeof name !== 'string' || !name.trim())) {
        res.status(400).json({ error: 'Name must be a non-empty string' });
        return;
    }
    if (code !== undefined && (typeof code !== 'string' || !code.trim())) {
        res.status(400).json({ error: 'Code must be a non-empty string' });
        return;
    }
    if (developerId !== undefined && (typeof developerId !== 'number' || !Number.isInteger(developerId))) {
        res.status(400).json({ error: 'developerId must be an integer' });
        return;
    }

    try {
        // Check if profession exists
        const existing = await prisma.profession.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        const profession = await prisma.profession.update({
            where: { id },
            data: {
                ...(name !== undefined ? { name: name.trim() } : {}),
                ...(code !== undefined ? { code: code.trim() } : {}),
                ...(developerId !== undefined ? { developerId } : {}),
            },
            include: { qualificationStandardDeveloper: true },
        });
        res.json(profession);
    } catch (err) {
        console.error('Failed to update profession', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * DELETE /api/professions/:id
 * Delete a profession
 * Requires MANAGER role
 */
router.delete('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    try {
        // Check if profession exists
        const existing = await prisma.profession.findUnique({ 
            where: { id },
            include: {
                professionalQualifications: {
                    take: 1,
                },
            },
        });
        if (!existing) {
            res.status(404).json({ error: 'Професію не знайдено' });
            return;
        }

        // Check if there are related professional qualifications
        if (existing.professionalQualifications.length > 0) {
            res.status(400).json({ 
                error: 'Неможливо видалити професію, оскільки до неї прив\'язані професійні кваліфікації. Спочатку видаліть всі пов\'язані кваліфікації.' 
            });
            return;
        }

        await prisma.profession.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err: any) {
        console.error('Failed to delete profession', err);
        // Handle Prisma foreign key constraint errors
        if (err.code === 'P2003') {
            res.status(400).json({ 
                error: 'Неможливо видалити професію, оскільки вона використовується в інших записах системи.' 
            });
            return;
        }
        res.status(500).json({ error: err.message || 'Внутрішня помилка сервера' });
    }
});

export default router;
