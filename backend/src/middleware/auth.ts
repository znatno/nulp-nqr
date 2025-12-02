import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/authUtils.js';
import type { TokenPayload } from '../auth/authUtils.js';
import type { Role, User } from '../../prisma/generated/client/index.js';
import { PrismaClient } from '../../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Extend Express Request to include user
declare global {
    namespace Express {
        interface Request {
            user?: TokenPayload;
            userRecord?: User; // Full user record from DB (loaded when needed for capability checks)
        }
    }
}

/**
 * Capability check helpers
 */
export function isManager(user: User): boolean {
    return user.role === 'MANAGER';
}

export function isApplicant(user: User): boolean {
    return user.role === 'USER' && user.canApplyForQualification;
}

export function isDeveloper(user: User): boolean {
    return user.role === 'USER' && user.canDevelopStandards;
}

export function isAccreditationExpert(user: User): boolean {
    return user.role === 'USER' && user.canAccreditCenters;
}

export function isViewer(user: User | null | undefined): boolean {
    // Optional helper; for anonymous treat user as null
    return !user || user.role === 'VIEWER';
}

/**
 * Middleware to authenticate requests via JWT token
 * Reads Authorization: Bearer <token> header and attaches user to req.user
 * If no token or invalid token, req.user remains undefined
 */
export function authenticate(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        // No token provided - req.user will be undefined
        // This is OK for optional authentication
        next();
        return;
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    const payload = verifyToken(token);

    if (payload) {
        req.user = payload;
    }
    // If token is invalid, req.user remains undefined

    next();
}

/**
 * Middleware to require authentication
 * Returns 401 if user is not authenticated
 */
export function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (!req.user) {
        res.status(401).json({ error: 'Authentication required' });
        return;
    }
    next();
}

/**
 * Middleware to require specific role(s)
 * Must be used after authenticate (or requireAuth)
 * Returns 403 if user's role is not in the allowed list
 */
export function requireRole(...allowedRoles: Role[]) {
    return (req: Request, res: Response, next: NextFunction): void => {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        if (!allowedRoles.includes(req.user.role)) {
            res.status(403).json({ error: 'Insufficient permissions' });
            return;
        }

        next();
    };
}

/**
 * Middleware to load full user record from DB for capability checks
 * Must be used after authenticate
 * Attaches userRecord to req.userRecord
 */
export async function loadUserRecord(req: Request, res: Response, next: NextFunction): Promise<void> {
    if (!req.user) {
        res.status(401).json({ error: 'Authentication required' });
        return;
    }

    try {
        const userRecord = await prisma.user.findUnique({
            where: { id: req.user.id },
        });

        if (!userRecord) {
            res.status(401).json({ error: 'User not found' });
            return;
        }

        req.userRecord = userRecord;
        next();
    } catch (err) {
        console.error('Failed to load user record', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

/**
 * Middleware to require manager role
 */
export function requireManager() {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        try {
            const userRecord = await prisma.user.findUnique({
                where: { id: req.user.id },
            });

            if (!userRecord || !isManager(userRecord)) {
                res.status(403).json({ error: 'Manager access required' });
                return;
            }

            req.userRecord = userRecord;
            next();
        } catch (err) {
            console.error('Failed to check manager role', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
}

/**
 * Middleware to require applicant capability
 */
export function requireApplicant() {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        try {
            const userRecord = await prisma.user.findUnique({
                where: { id: req.user.id },
            });

            if (!userRecord || !isApplicant(userRecord)) {
                res.status(403).json({ error: 'Applicant access required' });
                return;
            }

            req.userRecord = userRecord;
            next();
        } catch (err) {
            console.error('Failed to check applicant capability', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
}

/**
 * Middleware to require developer capability
 */
export function requireDeveloper() {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        try {
            const userRecord = await prisma.user.findUnique({
                where: { id: req.user.id },
            });

            if (!userRecord || !isDeveloper(userRecord)) {
                res.status(403).json({ error: 'Developer access required' });
                return;
            }

            req.userRecord = userRecord;
            next();
        } catch (err) {
            console.error('Failed to check developer capability', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
}

/**
 * Middleware to require accreditation expert capability
 */
export function requireAccreditationExpert() {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if (!req.user) {
            res.status(401).json({ error: 'Authentication required' });
            return;
        }

        try {
            const userRecord = await prisma.user.findUnique({
                where: { id: req.user.id },
            });

            if (!userRecord || !isAccreditationExpert(userRecord)) {
                res.status(403).json({ error: 'Accreditation expert access required' });
                return;
            }

            req.userRecord = userRecord;
            next();
        } catch (err) {
            console.error('Failed to check accreditation expert capability', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
}
