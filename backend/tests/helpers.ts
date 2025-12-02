/**
 * Test helper functions
 */

import request from 'supertest';
import { app } from '../src/index.js';

/**
 * Login helper - authenticates a user and returns the JWT token
 * @param email - User email
 * @param password - User password
 * @returns JWT token string
 */
export async function loginAs(email: string, password: string): Promise<string> {
    const res = await request(app)
        .post('/api/auth/login')
        .send({ email, password });

    if (res.status !== 200) {
        throw new Error(`Login failed: ${res.status} - ${JSON.stringify(res.body)}`);
    }

    if (!res.body.token) {
        throw new Error('No token in login response');
    }

    return res.body.token;
}

/**
 * Create an authenticated request helper
 * @param token - JWT token
 * @returns supertest request with Authorization header set
 */
export function authenticatedRequest(token: string) {
    return request(app).set('Authorization', `Bearer ${token}`);
}

/**
 * Test user credentials from seed data
 */
export const TEST_USERS = {
    manager: {
        email: 'manager@nqr.test',
        password: 'Password123!',
    },
    applicant: {
        email: 'applicant@nqr.test',
        password: 'Password123!',
    },
    developer: {
        email: 'developer@nqr.test',
        password: 'Password123!',
    },
    expert: {
        email: 'expert@nqr.test',
        password: 'Password123!',
    },
    viewer: {
        email: 'viewer@nqr.test',
        password: 'Password123!',
    },
} as const;
