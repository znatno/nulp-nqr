import { Router, Request, Response } from 'express';
import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { authenticate, requireAccreditationExpert } from '../middleware/auth.js';

const router = Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// All routes require authentication and expert capability
router.use(authenticate);
router.use(requireAccreditationExpert());

/**
 * GET /api/expert/expertises
 * Get expertises for the current expert user
 * Query params: page, pageSize
 */
router.get('/expertises', async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        const page = Math.max(1, parseInt(req.query.page as string) || 1);
        const pageSize = Math.max(1, Math.min(100, parseInt(req.query.pageSize as string) || 10));

        const skip = (page - 1) * pageSize;

        // Find AccreditationExpert records linked to this user
        const expertRecords = await prisma.accreditationExpert.findMany({
            where: {
                userId: req.user.id,
            },
            select: {
                id: true,
            },
        });

        const expertIds = expertRecords.map((e) => e.id);

        if (expertIds.length === 0) {
            // User is an expert but has no expert records yet
            res.json({
                items: [],
                total: 0,
                page,
                pageSize,
            });
            return;
        }

        const where = {
            accreditationExpertId: {
                in: expertIds,
            },
        };

        const [total, items] = await Promise.all([
            prisma.qualificationCenterExpertise.count({ where }),
            prisma.qualificationCenterExpertise.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { expertiseDate: 'desc' },
                include: {
                    professionalQualification: {
                        select: {
                            id: true,
                            name: true,
                            nqrLevel: true,
                        },
                    },
                    qualificationCenter: {
                        select: {
                            id: true,
                            name: true,
                            edrpou: true,
                        },
                    },
                    accreditationExpert: {
                        select: {
                            id: true,
                            fullName: true,
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
        console.error('Failed to get expert expertises', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
