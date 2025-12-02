import { Router, Request, Response } from 'express';
import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { requireManager } from '../middleware/auth.js';

const router = Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Transform examination data to match frontend expectations
function transformExamination(examination: any) {
    return {
        ...examination,
        expert: examination.accreditationExpert,
        examinationDate: examination.expertiseDate,
    };
}

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

        // Transform items to match frontend expectations
        const transformedItems = items.map(transformExamination);

        res.json({
            items: transformedItems,
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

        res.json(transformExamination(examination));
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
    const { 
        professionalQualificationId, 
        qualificationCenterId, 
        accreditationExpertId, 
        expertId, // Frontend field name
        expertiseDate,
        examinationDate, // Frontend field name
    } = req.body as {
        professionalQualificationId?: unknown;
        qualificationCenterId?: unknown;
        accreditationExpertId?: unknown;
        expertId?: unknown;
        expertiseDate?: unknown;
        examinationDate?: unknown;
    };

    // Use frontend field names if provided, fallback to backend field names
    const finalAccreditationExpertId = expertId ?? accreditationExpertId;
    const finalExpertiseDate = examinationDate ?? expertiseDate;

    // Validation
    if (typeof professionalQualificationId !== 'number' || !Number.isInteger(professionalQualificationId)) {
        res.status(400).json({ error: 'professionalQualificationId must be an integer' });
        return;
    }
    if (typeof qualificationCenterId !== 'number' || !Number.isInteger(qualificationCenterId)) {
        res.status(400).json({ error: 'qualificationCenterId must be an integer' });
        return;
    }
    if (typeof finalAccreditationExpertId !== 'number' || !Number.isInteger(finalAccreditationExpertId)) {
        res.status(400).json({ error: 'accreditationExpertId/expertId must be an integer' });
        return;
    }

    try {
        // Verify related entities exist
        const [qualification, center, expert] = await Promise.all([
            prisma.professionalQualification.findUnique({ where: { id: professionalQualificationId } }),
            prisma.qualificationCenter.findUnique({ where: { id: qualificationCenterId } }),
            prisma.accreditationExpert.findUnique({ where: { id: finalAccreditationExpertId } }),
        ]);

        if (!qualification) {
            res.status(404).json({ error: 'Професійну кваліфікацію не знайдено' });
            return;
        }
        if (!center) {
            res.status(404).json({ error: 'Кваліфікаційний центр не знайдено' });
            return;
        }
        if (!expert) {
            res.status(404).json({ error: 'Експерта не знайдено' });
            return;
        }

        const examination = await prisma.qualificationCenterExpertise.create({
            data: {
                professionalQualificationId,
                qualificationCenterId,
                accreditationExpertId: finalAccreditationExpertId,
                expertiseDate: finalExpertiseDate ? new Date(finalExpertiseDate as string) : new Date(),
            },
            include: {
                professionalQualification: true,
                qualificationCenter: true,
                accreditationExpert: true,
            },
        });
        res.status(201).json(transformExamination(examination));
    } catch (err: any) {
        console.error('Failed to create examination', err);
        // Handle Prisma errors
        if (err.code === 'P2002') {
            res.status(400).json({ error: 'Експертиза з такими даними вже існує' });
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
            if (field?.includes('accreditationExpertId')) {
                res.status(400).json({ error: 'Невірний ідентифікатор експерта' });
                return;
            }
            res.status(400).json({ error: 'Невірні дані для створення експертизи' });
            return;
        }
        res.status(500).json({ error: err.message || 'Внутрішня помилка сервера' });
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

    const { 
        professionalQualificationId, 
        qualificationCenterId, 
        accreditationExpertId,
        expertId, // Frontend field name
        expertiseDate,
        examinationDate, // Frontend field name
    } = req.body as {
        professionalQualificationId?: unknown;
        qualificationCenterId?: unknown;
        accreditationExpertId?: unknown;
        expertId?: unknown;
        expertiseDate?: unknown;
        examinationDate?: unknown;
    };

    // Use frontend field names if provided, fallback to backend field names
    const finalAccreditationExpertId = expertId ?? accreditationExpertId;
    const finalExpertiseDate = examinationDate ?? expertiseDate;

    // Validation
    if (professionalQualificationId !== undefined && (typeof professionalQualificationId !== 'number' || !Number.isInteger(professionalQualificationId))) {
        res.status(400).json({ error: 'professionalQualificationId must be an integer' });
        return;
    }
    if (qualificationCenterId !== undefined && (typeof qualificationCenterId !== 'number' || !Number.isInteger(qualificationCenterId))) {
        res.status(400).json({ error: 'qualificationCenterId must be an integer' });
        return;
    }
    if (finalAccreditationExpertId !== undefined && (typeof finalAccreditationExpertId !== 'number' || !Number.isInteger(finalAccreditationExpertId))) {
        res.status(400).json({ error: 'accreditationExpertId/expertId must be an integer' });
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
                ...(finalAccreditationExpertId !== undefined ? { accreditationExpertId: finalAccreditationExpertId } : {}),
                ...(finalExpertiseDate !== undefined ? { expertiseDate: new Date(finalExpertiseDate as string) } : {}),
            },
            include: {
                professionalQualification: true,
                qualificationCenter: true,
                accreditationExpert: true,
            },
        });
        res.json(transformExamination(examination));
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
            res.status(404).json({ error: 'Експертизу не знайдено' });
            return;
        }

        await prisma.qualificationCenterExpertise.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err: any) {
        console.error('Failed to delete examination', err);
        // Handle Prisma foreign key constraint errors
        if (err.code === 'P2003') {
            res.status(400).json({ 
                error: 'Неможливо видалити експертизу, оскільки вона використовується в інших записах системи.' 
            });
            return;
        }
        res.status(500).json({ error: err.message || 'Внутрішня помилка сервера' });
    }
});

export default router;
