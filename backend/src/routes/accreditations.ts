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
 * GET /api/accreditations
 * Get paginated list of accreditations with optional search
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
                      { accreditationDocumentId: { contains: search, mode: 'insensitive' as const } },
                  ],
              }
            : {};

        // Get total count and items
        const [total, items] = await Promise.all([
            prisma.qualificationCenterAccreditation.count({ where }),
            prisma.qualificationCenterAccreditation.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { id: 'asc' },
                include: {
                    professionalQualification: true,
                    qualificationCenter: true,
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
        console.error('Failed to get accreditations', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/accreditations/:id
 * Get a single accreditation by ID
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const accreditation = await prisma.qualificationCenterAccreditation.findUnique({
            where: { id },
            include: {
                professionalQualification: true,
                qualificationCenter: true,
            },
        });

        if (!accreditation) {
            res.sendStatus(404);
            return;
        }

        res.json(accreditation);
    } catch (err) {
        console.error('Failed to get accreditation', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * POST /api/accreditations
 * Create a new accreditation
 * Requires MANAGER role
 */
router.post('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const { professionalQualificationId, qualificationCenterId, accreditationDocumentId, naqCommissionDate } = req.body as {
        professionalQualificationId?: unknown;
        qualificationCenterId?: unknown;
        accreditationDocumentId?: unknown;
        naqCommissionDate?: unknown;
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
    if (typeof accreditationDocumentId !== 'string' || !accreditationDocumentId.trim()) {
        res.status(400).json({ error: 'accreditationDocumentId is required' });
        return;
    }

    try {
        const accreditation = await prisma.qualificationCenterAccreditation.create({
            data: {
                professionalQualificationId,
                qualificationCenterId,
                accreditationDocumentId: accreditationDocumentId.trim(),
                naqCommissionDate: naqCommissionDate ? new Date(naqCommissionDate as string) : new Date(),
            },
            include: {
                professionalQualification: true,
                qualificationCenter: true,
            },
        });
        res.status(201).json(accreditation);
    } catch (err) {
        console.error('Failed to create accreditation', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * PUT /api/accreditations/:id
 * Update an existing accreditation
 * Requires MANAGER role
 */
router.put('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    const { professionalQualificationId, qualificationCenterId, accreditationDocumentId, naqCommissionDate } = req.body as {
        professionalQualificationId?: unknown;
        qualificationCenterId?: unknown;
        accreditationDocumentId?: unknown;
        naqCommissionDate?: unknown;
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
    if (accreditationDocumentId !== undefined && (typeof accreditationDocumentId !== 'string' || !accreditationDocumentId.trim())) {
        res.status(400).json({ error: 'accreditationDocumentId must be a non-empty string' });
        return;
    }

    try {
        // Check if accreditation exists
        const existing = await prisma.qualificationCenterAccreditation.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        const accreditation = await prisma.qualificationCenterAccreditation.update({
            where: { id },
            data: {
                ...(professionalQualificationId !== undefined ? { professionalQualificationId } : {}),
                ...(qualificationCenterId !== undefined ? { qualificationCenterId } : {}),
                ...(accreditationDocumentId !== undefined ? { accreditationDocumentId: accreditationDocumentId.trim() } : {}),
                ...(naqCommissionDate !== undefined ? { naqCommissionDate: new Date(naqCommissionDate as string) } : {}),
            },
            include: {
                professionalQualification: true,
                qualificationCenter: true,
            },
        });
        res.json(accreditation);
    } catch (err) {
        console.error('Failed to update accreditation', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * DELETE /api/accreditations/:id
 * Delete an accreditation
 * Requires MANAGER role
 */
router.delete('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    try {
        // Check if accreditation exists
        const existing = await prisma.qualificationCenterAccreditation.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        await prisma.qualificationCenterAccreditation.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err) {
        console.error('Failed to delete accreditation', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
