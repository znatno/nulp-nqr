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

        // Transform items to match frontend expectations
        const transformedItems = items.map((item) => ({
            ...item,
            certificateNumber: item.accreditationDocumentId,
            sessionNQADate: item.naqCommissionDate,
        }));

        res.json({
            items: transformedItems,
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

        // Transform to match frontend expectations
        res.json({
            ...accreditation,
            certificateNumber: accreditation.accreditationDocumentId,
            sessionNQADate: accreditation.naqCommissionDate,
        });
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
    const { 
        professionalQualificationId, 
        qualificationCenterId, 
        accreditationDocumentId,
        certificateNumber, // Frontend field name
        naqCommissionDate,
        sessionNQADate, // Frontend field name
    } = req.body as {
        professionalQualificationId?: unknown;
        qualificationCenterId?: unknown;
        accreditationDocumentId?: unknown;
        certificateNumber?: unknown;
        naqCommissionDate?: unknown;
        sessionNQADate?: unknown;
    };

    // Use frontend field names if provided, fallback to backend field names
    const finalAccreditationDocumentId = certificateNumber ?? accreditationDocumentId;
    const finalNaqCommissionDate = sessionNQADate ?? naqCommissionDate;

    // Validation
    if (typeof professionalQualificationId !== 'number' || !Number.isInteger(professionalQualificationId)) {
        res.status(400).json({ error: 'professionalQualificationId must be an integer' });
        return;
    }
    if (typeof qualificationCenterId !== 'number' || !Number.isInteger(qualificationCenterId)) {
        res.status(400).json({ error: 'qualificationCenterId must be an integer' });
        return;
    }
    if (typeof finalAccreditationDocumentId !== 'string' || !finalAccreditationDocumentId.trim()) {
        res.status(400).json({ error: 'certificateNumber/accreditationDocumentId is required' });
        return;
    }

    try {
        // Verify related entities exist
        const [qualification, center] = await Promise.all([
            prisma.professionalQualification.findUnique({ where: { id: professionalQualificationId } }),
            prisma.qualificationCenter.findUnique({ where: { id: qualificationCenterId } }),
        ]);

        if (!qualification) {
            res.status(404).json({ error: 'Професійну кваліфікацію не знайдено' });
            return;
        }
        if (!center) {
            res.status(404).json({ error: 'Кваліфікаційний центр не знайдено' });
            return;
        }

        const accreditation = await prisma.qualificationCenterAccreditation.create({
            data: {
                professionalQualificationId,
                qualificationCenterId,
                accreditationDocumentId: (finalAccreditationDocumentId as string).trim(),
                naqCommissionDate: finalNaqCommissionDate ? new Date(finalNaqCommissionDate as string) : new Date(),
            },
            include: {
                professionalQualification: true,
                qualificationCenter: true,
            },
        });
        // Transform response to match frontend expectations
        res.status(201).json({
            ...accreditation,
            certificateNumber: accreditation.accreditationDocumentId,
            sessionNQADate: accreditation.naqCommissionDate,
        });
    } catch (err: any) {
        console.error('Failed to create accreditation', err);
        // Handle Prisma errors
        if (err.code === 'P2002') {
            res.status(400).json({ error: 'Акредитація з такими даними вже існує (перевірте унікальність комбінації кваліфікації, центру та номера документа)' });
            return;
        }
        if (err.code === 'P2003') {
            const field = err.meta?.field_name;
            if (field?.includes('professionalQualificationId')) {
                res.status(400).json({ error: 'Невірний ідентифікатор професійної кваліфікації' });
                return;
            }
            if (field?.includes('qualificationCenterId')) {
                res.status(400).json({ error: 'Невірний ідентифікатор кваліфікаційного центру' });
                return;
            }
            res.status(400).json({ error: 'Невірні дані для створення акредитації' });
            return;
        }
        res.status(500).json({ error: err.message || 'Внутрішня помилка сервера' });
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

    const { 
        professionalQualificationId, 
        qualificationCenterId, 
        accreditationDocumentId,
        certificateNumber, // Frontend field name
        naqCommissionDate,
        sessionNQADate, // Frontend field name
    } = req.body as {
        professionalQualificationId?: unknown;
        qualificationCenterId?: unknown;
        accreditationDocumentId?: unknown;
        certificateNumber?: unknown;
        naqCommissionDate?: unknown;
        sessionNQADate?: unknown;
    };

    // Use frontend field names if provided, fallback to backend field names
    const finalAccreditationDocumentId = certificateNumber ?? accreditationDocumentId;
    const finalNaqCommissionDate = sessionNQADate ?? naqCommissionDate;

    // Validation
    if (professionalQualificationId !== undefined && (typeof professionalQualificationId !== 'number' || !Number.isInteger(professionalQualificationId))) {
        res.status(400).json({ error: 'professionalQualificationId must be an integer' });
        return;
    }
    if (qualificationCenterId !== undefined && (typeof qualificationCenterId !== 'number' || !Number.isInteger(qualificationCenterId))) {
        res.status(400).json({ error: 'qualificationCenterId must be an integer' });
        return;
    }
    if (finalAccreditationDocumentId !== undefined && (typeof finalAccreditationDocumentId !== 'string' || !finalAccreditationDocumentId.trim())) {
        res.status(400).json({ error: 'certificateNumber/accreditationDocumentId must be a non-empty string' });
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
                ...(finalAccreditationDocumentId !== undefined ? { accreditationDocumentId: (finalAccreditationDocumentId as string).trim() } : {}),
                ...(finalNaqCommissionDate !== undefined ? { naqCommissionDate: new Date(finalNaqCommissionDate as string) } : {}),
            },
            include: {
                professionalQualification: true,
                qualificationCenter: true,
            },
        });
        // Transform response to match frontend expectations
        res.json({
            ...accreditation,
            certificateNumber: accreditation.accreditationDocumentId,
            sessionNQADate: accreditation.naqCommissionDate,
        });
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
            res.status(404).json({ error: 'Акредитацію не знайдено' });
            return;
        }

        await prisma.qualificationCenterAccreditation.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err: any) {
        console.error('Failed to delete accreditation', err);
        // Handle Prisma foreign key constraint errors
        if (err.code === 'P2003') {
            res.status(400).json({ 
                error: 'Неможливо видалити акредитацію, оскільки вона використовується в інших записах системи.' 
            });
            return;
        }
        res.status(500).json({ error: err.message || 'Внутрішня помилка сервера' });
    }
});

export default router;
