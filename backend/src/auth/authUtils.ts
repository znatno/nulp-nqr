import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { Role } from '../../prisma/generated/client/index.js';

const JWT_SECRET = process.env.JWT_SECRET || 'change-me-in-production';

if (!process.env.JWT_SECRET) {
    console.warn('⚠️  JWT_SECRET not set in .env, using default (insecure for production)');
}

export interface TokenPayload {
    id: number;
    role: Role;
}

/**
 * Hash a plain text password
 */
export async function hashPassword(plain: string): Promise<string> {
    return bcrypt.hash(plain, 10);
}

/**
 * Verify a plain text password against a hash
 */
export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plain, hash);
}

/**
 * Sign a JWT token with user id and role
 */
export function signToken(payload: TokenPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

/**
 * Verify and decode a JWT token
 * Returns null if token is invalid or expired
 */
export function verifyToken(token: string): TokenPayload | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
        return decoded;
    } catch (err) {
        return null;
    }
}
