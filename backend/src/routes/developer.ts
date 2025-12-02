import { Router, Request, Response } from 'express';
import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { authenticate, requireDeveloper } from '../middleware/auth.js';

const router = Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// All routes require authentication and developer capability
router.use(authenticate);
router.use(requireDeveloper());

/**
 * GET /api/developer/professions
 * Get professions for the current developer user
 * Query params: page, pageSize, search
 */
router.get('/professions', async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        const page = Math.max(1, parseInt(req.query.page as string) || 1);
        const pageSize = Math.max(1, Math.min(100, parseInt(req.query.pageSize as string) || 10));
        const search = (req.query.search as string)?.trim() || '';

        const skip = (page - 1) * pageSize;

        // Find QualificationStandardDeveloper linked to this user
        const developer = await prisma.qualificationStandardDeveloper.findFirst({
            where: {
                userId: req.user.id,
            },
            select: {
                id: true,
            },
        });

        if (!developer) {
            // User is a developer but not linked to a developer org yet
            res.json({
                items: [],
                total: 0,
                page,
                pageSize,
            });
            return;
        }

        // Build where clause
        const where: any = {
            developerId: developer.id,
        };

        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' as const } },
                { code: { contains: search, mode: 'insensitive' as const } },
            ];
        }

        const [total, items] = await Promise.all([
            prisma.profession.count({ where }),
            prisma.profession.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { name: 'asc' },
                include: {
                    qualificationStandardDeveloper: {
                        select: {
                            id: true,
                            name: true,
                            edrpou: true,
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
        console.error('Failed to get developer professions', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/developer/qualifications
 * Get professional qualifications for the current developer user
 * Query params: page, pageSize, search
 */
router.get('/qualifications', async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        const page = Math.max(1, parseInt(req.query.page as string) || 1);
        const pageSize = Math.max(1, Math.min(100, parseInt(req.query.pageSize as string) || 10));
        const search = (req.query.search as string)?.trim() || '';

        const skip = (page - 1) * pageSize;

        // Find QualificationStandardDeveloper linked to this user
        const developer = await prisma.qualificationStandardDeveloper.findFirst({
            where: {
                userId: req.user.id,
            },
            select: {
                id: true,
            },
        });

        if (!developer) {
            // User is a developer but not linked to a developer org yet
            res.json({
                items: [],
                total: 0,
                page,
                pageSize,
            });
            return;
        }

        // Build where clause - qualifications belong to professions that belong to this developer
        const where: any = {
            profession: {
                developerId: developer.id,
            },
        };

        if (search) {
            where.name = { contains: search, mode: 'insensitive' as const };
        }

        const [total, items] = await Promise.all([
            prisma.professionalQualification.count({ where }),
            prisma.professionalQualification.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { name: 'asc' },
                include: {
                    profession: {
                        select: {
                            id: true,
                            name: true,
                            code: true,
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
        console.error('Failed to get developer qualifications', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
