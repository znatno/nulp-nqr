import { Router, Request, Response } from 'express';
import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { hashPassword, verifyPassword, signToken } from '../auth/authUtils.js';
import type { Role } from '../../prisma/generated/client/index.js';

const router = Router();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

/**
 * POST /auth/register
 * Register a new applicant user
 */
router.post('/register', async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body as { email?: unknown; password?: unknown };

    // Validation
    if (typeof email !== 'string' || !email.trim()) {
        res.status(400).json({ error: 'Email is required' });
        return;
    }

    if (typeof password !== 'string' || password.length < 6) {
        res.status(400).json({ error: 'Password must be at least 6 characters' });
        return;
    }

    // Email format validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ error: 'Invalid email format' });
        return;
    }

    try {
        // Check if user already exists
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            res.status(409).json({ error: 'User with this email already exists' });
            return;
        }

        // Hash password and create user with USER role and applicant capability by default
        const passwordHash = await hashPassword(password);
        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
                role: 'USER',
                canApplyForQualification: true, // Default for new registrations
            },
        });

        // Generate token
        const token = signToken({ id: user.id, role: user.role });

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                canApplyForQualification: user.canApplyForQualification,
                canDevelopStandards: user.canDevelopStandards,
                canAccreditCenters: user.canAccreditCenters,
            },
        });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * POST /auth/login
 * Authenticate user and return JWT token
 */
router.post('/login', async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body as { email?: unknown; password?: unknown };

    // Validation
    if (typeof email !== 'string' || !email.trim()) {
        res.status(400).json({ error: 'Email is required' });
        return;
    }

    if (typeof password !== 'string') {
        res.status(400).json({ error: 'Password is required' });
        return;
    }

    try {
        // Find user by email
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }

        // Verify password
        const isValid = await verifyPassword(password, user.passwordHash);
        if (!isValid) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }

        // Generate token
        const token = signToken({ id: user.id, role: user.role });

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                canApplyForQualification: user.canApplyForQualification,
                canDevelopStandards: user.canDevelopStandards,
                canAccreditCenters: user.canAccreditCenters,
            },
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
