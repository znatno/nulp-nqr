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
 * GET /api/centres
 * Get paginated list of qualification centres with optional search
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
                      { address: { contains: search, mode: 'insensitive' as const } },
                  ],
              }
            : {};

        // Get total count and items
        const [total, items] = await Promise.all([
            prisma.qualificationCenter.count({ where }),
            prisma.qualificationCenter.findMany({
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
    } catch (err) {
        console.error('Failed to get qualification centres', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/centres/:id
 * Get a single qualification centre by ID
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const centre = await prisma.qualificationCenter.findUnique({
            where: { id },
        });

        if (!centre) {
            res.sendStatus(404);
            return;
        }

        res.json(centre);
    } catch (err) {
        console.error('Failed to get qualification centre', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * POST /api/centres
 * Create a new qualification centre
 * Requires MANAGER role
 */
router.post('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const { name, edrpou, address } = req.body as {
        name?: unknown;
        edrpou?: unknown;
        address?: unknown;
    };

    // Validation
    if (typeof name !== 'string' || !name.trim()) {
        res.status(400).json({ error: 'Name is required' });
        return;
    }
    if (typeof edrpou !== 'string' || !edrpou.trim()) {
        res.status(400).json({ error: 'edrpou is required' });
        return;
    }
    if (typeof address !== 'string' || !address.trim()) {
        res.status(400).json({ error: 'address is required' });
        return;
    }

    try {
        const centre = await prisma.qualificationCenter.create({
            data: { name: name.trim(), edrpou: edrpou.trim(), address: address.trim() },
        });
        res.status(201).json(centre);
    } catch (err) {
        console.error('Failed to create qualification centre', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * PUT /api/centres/:id
 * Update an existing qualification centre
 * Requires MANAGER role
 */
router.put('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    const { name, edrpou, address } = req.body as {
        name?: unknown;
        edrpou?: unknown;
        address?: unknown;
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
    if (address !== undefined && (typeof address !== 'string' || !address.trim())) {
        res.status(400).json({ error: 'address must be a non-empty string' });
        return;
    }

    try {
        // Check if centre exists
        const existing = await prisma.qualificationCenter.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        const centre = await prisma.qualificationCenter.update({
            where: { id },
            data: {
                ...(name !== undefined ? { name: name.trim() } : {}),
                ...(edrpou !== undefined ? { edrpou: edrpou.trim() } : {}),
                ...(address !== undefined ? { address: address.trim() } : {}),
            },
        });
        res.json(centre);
    } catch (err) {
        console.error('Failed to update qualification centre', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * DELETE /api/centres/:id
 * Delete a qualification centre
 * Requires MANAGER role
 */
router.delete('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    try {
        // Check if centre exists
        const existing = await prisma.qualificationCenter.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        await prisma.qualificationCenter.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err) {
        console.error('Failed to delete qualification centre', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
