import { Router, Request, Response } from 'express';
import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { requireManager } from '../middleware/auth.js';
import { hashPassword } from '../auth/authUtils.js';

const router = Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

/**
 * GET /api/users
 * List users with filters (email, role, flags)
 * Requires MANAGER role
 */
router.get('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const page = Math.max(1, parseInt(req.query.page as string) || 1);
        const pageSize = Math.max(1, Math.min(100, parseInt(req.query.pageSize as string) || 10));
        const email = req.query.email as string | undefined;
        const role = req.query.role as string | undefined;
        const canApply = req.query.canApply as string | undefined;
        const canDevelop = req.query.canDevelop as string | undefined;
        const canAccredit = req.query.canAccredit as string | undefined;

        const skip = (page - 1) * pageSize;

        const where: any = {};
        if (email) {
            where.email = { contains: email, mode: 'insensitive' as const };
        }
        if (role && (role === 'VIEWER' || role === 'USER' || role === 'MANAGER')) {
            where.role = role;
        }
        if (canApply !== undefined) {
            where.canApplyForQualification = canApply === 'true';
        }
        if (canDevelop !== undefined) {
            where.canDevelopStandards = canDevelop === 'true';
        }
        if (canAccredit !== undefined) {
            where.canAccreditCenters = canAccredit === 'true';
        }

        const [total, items] = await Promise.all([
            prisma.user.count({ where }),
            prisma.user.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    email: true,
                    role: true,
                    canApplyForQualification: true,
                    canDevelopStandards: true,
                    canAccreditCenters: true,
                    createdAt: true,
                    updatedAt: true,
                    _count: {
                        select: {
                            applications: true,
                            professionals: true,
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
        console.error('Failed to get users', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/users/:id
 * Get user with details, including capability flags and linked domain entities
 * Requires MANAGER role
 */
router.get('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        const user = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                role: true,
                canApplyForQualification: true,
                canDevelopStandards: true,
                canAccreditCenters: true,
                createdAt: true,
                updatedAt: true,
                applications: {
                    select: {
                        id: true,
                        status: true,
                        createdAt: true,
                    },
                    take: 10,
                    orderBy: { createdAt: 'desc' },
                },
                professionals: {
                    select: {
                        id: true,
                        certificateNumber: true,
                        certificateReceivedAt: true,
                    },
                    take: 10,
                    orderBy: { certificateReceivedAt: 'desc' },
                },
                accreditationExperts: {
                    select: {
                        id: true,
                        fullName: true,
                        professionalQualification: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        });

        if (!user) {
            res.sendStatus(404);
            return;
        }

        res.json(user);
    } catch (err) {
        console.error('Failed to get user', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * PUT /api/users/:id
 * Update user role and capability flags
 * Requires MANAGER role
 */
router.put('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        // Prevent managers from modifying themselves (safety check)
        if (req.user && req.user.id === id) {
            res.status(400).json({ error: 'Cannot modify your own account' });
            return;
        }

        const { role, canApplyForQualification, canDevelopStandards, canAccreditCenters, password } = req.body as {
            role?: unknown;
            canApplyForQualification?: unknown;
            canDevelopStandards?: unknown;
            canAccreditCenters?: unknown;
            password?: unknown;
        };

        // Check if user exists
        const existing = await prisma.user.findUnique({ where: { id } });
        if (!existing) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        // Prevent downgrading the last manager
        if (role && role !== 'MANAGER' && existing.role === 'MANAGER') {
            const managerCount = await prisma.user.count({
                where: { role: 'MANAGER' },
            });
            if (managerCount <= 1) {
                res.status(400).json({ error: 'Cannot remove the last manager' });
                return;
            }
        }

        const updateData: any = {};

        if (role !== undefined) {
            if (role !== 'VIEWER' && role !== 'USER' && role !== 'MANAGER') {
                res.status(400).json({ error: 'Invalid role' });
                return;
            }
            updateData.role = role;
        }

        if (canApplyForQualification !== undefined) {
            updateData.canApplyForQualification = Boolean(canApplyForQualification);
        }

        if (canDevelopStandards !== undefined) {
            updateData.canDevelopStandards = Boolean(canDevelopStandards);
        }

        if (canAccreditCenters !== undefined) {
            updateData.canAccreditCenters = Boolean(canAccreditCenters);
        }

        if (password !== undefined) {
            if (typeof password !== 'string' || password.length < 6) {
                res.status(400).json({ error: 'Password must be at least 6 characters' });
                return;
            }
            updateData.passwordHash = await hashPassword(password);
        }

        const updated = await prisma.user.update({
            where: { id },
            data: updateData,
            select: {
                id: true,
                email: true,
                role: true,
                canApplyForQualification: true,
                canDevelopStandards: true,
                canAccreditCenters: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        res.json(updated);
    } catch (err) {
        console.error('Failed to update user', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * POST /api/users
 * Create user (if not only via registration)
 * Requires MANAGER role
 */
router.post('/', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const { email, password, role, canApplyForQualification, canDevelopStandards, canAccreditCenters } = req.body as {
        email?: unknown;
        password?: unknown;
        role?: unknown;
        canApplyForQualification?: unknown;
        canDevelopStandards?: unknown;
        canAccreditCenters?: unknown;
    };

    // Validation
    if (typeof email !== 'string' || !email.trim()) {
        res.status(400).json({ error: 'Email is required' });
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ error: 'Invalid email format' });
        return;
    }

    if (typeof password !== 'string' || password.length < 6) {
        res.status(400).json({ error: 'Password must be at least 6 characters' });
        return;
    }

    if (role !== undefined && role !== 'VIEWER' && role !== 'USER' && role !== 'MANAGER') {
        res.status(400).json({ error: 'Invalid role' });
        return;
    }

    try {
        // Check if user already exists
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            res.status(409).json({ error: 'User with this email already exists' });
            return;
        }

        // Hash password
        const passwordHash = await hashPassword(password);

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
                role: (role as 'VIEWER' | 'USER' | 'MANAGER') || 'USER',
                canApplyForQualification: Boolean(canApplyForQualification) || false,
                canDevelopStandards: Boolean(canDevelopStandards) || false,
                canAccreditCenters: Boolean(canAccreditCenters) || false,
            },
            select: {
                id: true,
                email: true,
                role: true,
                canApplyForQualification: true,
                canDevelopStandards: true,
                canAccreditCenters: true,
                createdAt: true,
            },
        });

        res.status(201).json(user);
    } catch (err) {
        console.error('Failed to create user', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * DELETE /api/users/:id
 * Disable/delete user (implement safely)
 * Requires MANAGER role
 */
router.delete('/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        // Prevent managers from deleting themselves
        if (req.user && req.user.id === id) {
            res.status(400).json({ error: 'Cannot delete your own account' });
            return;
        }

        // Check if user exists
        const existing = await prisma.user.findUnique({ where: { id } });
        if (!existing) {
            res.sendStatus(404);
            return;
        }

        // Prevent deleting the last manager
        if (existing.role === 'MANAGER') {
            const managerCount = await prisma.user.count({
                where: { role: 'MANAGER' },
            });
            if (managerCount <= 1) {
                res.status(400).json({ error: 'Cannot delete the last manager' });
                return;
            }
        }

        // Delete user (cascade will handle related records based on schema)
        await prisma.user.delete({ where: { id } });

        res.sendStatus(204);
    } catch (err) {
        console.error('Failed to delete user', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
