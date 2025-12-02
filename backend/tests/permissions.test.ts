/**
 * Permissions tests
 * Tests access control: manager vs non-manager, public vs protected routes
 */

import request from 'supertest';
import { app } from '../src/index.js';
import { loginAs, authenticatedRequest, TEST_USERS } from './helpers.js';
import { prisma } from './setup.js';

describe('Permissions', () => {
    let managerToken: string;
    let applicantToken: string;

    beforeAll(async () => {
        // Login as manager and applicant
        managerToken = await loginAs(TEST_USERS.manager.email, TEST_USERS.manager.password);
        applicantToken = await loginAs(TEST_USERS.applicant.email, TEST_USERS.applicant.password);
    });

    describe('Manager vs Applicant - User Management', () => {
        /**
         * Manager should be able to list users
         */
        it('manager can list users', async () => {
            const res = await authenticatedRequest(managerToken)
                .get('/api/users')
                .expect(200);

            expect(res.body).toHaveProperty('items');
            expect(res.body).toHaveProperty('total');
            expect(Array.isArray(res.body.items)).toBe(true);
        });

        /**
         * Applicant should NOT be able to list users (403 Forbidden)
         */
        it('applicant cannot list users', async () => {
            const res = await authenticatedRequest(applicantToken)
                .get('/api/users')
                .expect(403);

            expect(res.body).toHaveProperty('error');
            expect(res.body.error).toContain('Manager');
        });
    });

    describe('Manager vs Applicant - Applications Management', () => {
        /**
         * Manager should be able to list all applications
         */
        it('manager can list all applications', async () => {
            const res = await authenticatedRequest(managerToken)
                .get('/api/applications')
                .expect(200);

            expect(res.body).toHaveProperty('items');
            expect(res.body).toHaveProperty('total');
            expect(Array.isArray(res.body.items)).toBe(true);
        });

        /**
         * Applicant should NOT be able to list all applications (403 Forbidden)
         */
        it('applicant cannot list all applications', async () => {
            const res = await authenticatedRequest(applicantToken)
                .get('/api/applications')
                .expect(403);

            expect(res.body).toHaveProperty('error');
            expect(res.body.error).toContain('Manager');
        });
    });

    describe('Public Certificate Verification', () => {
        /**
         * Public endpoint should work without authentication
         * Uses a seeded certificate from seed.ts (CERT-001 or CERT-002)
         */
        it('public verification works with valid certificate number', async () => {
            // Find a seeded professional record
            const professional = await prisma.professional.findFirst({
                where: {
                    certificateNumber: {
                        in: ['CERT-001', 'CERT-002'],
                    },
                },
            });

            if (!professional) {
                throw new Error('No seeded professional found for testing. Run prisma:seed first.');
            }

            const res = await request(app)
                .get('/api/verify-certificate')
                .query({ certificateNumber: professional.certificateNumber })
                .expect(200);

            expect(res.body).toHaveProperty('found', true);
            expect(res.body).toHaveProperty('certificateNumber', professional.certificateNumber);
            expect(res.body).toHaveProperty('holder');
            expect(res.body).toHaveProperty('qualification');
            expect(res.body).toHaveProperty('centre');
            expect(res.body).toHaveProperty('issueDate');
            expect(res.body.holder).toHaveProperty('fullName');
        });

        /**
         * Public endpoint should return "not found" for invalid certificate number
         */
        it('public verification returns not found for invalid certificate number', async () => {
            const res = await request(app)
                .get('/api/verify-certificate')
                .query({ certificateNumber: 'INVALID-CERT-999999' })
                .expect(200); // Note: endpoint returns 200 with found: false

            expect(res.body).toHaveProperty('found', false);
            expect(res.body).toHaveProperty('message');
            expect(res.body.message).toContain('not found');
        });

        /**
         * Public endpoint should work without auth header
         */
        it('public verification works without authentication header', async () => {
            const professional = await prisma.professional.findFirst({
                where: {
                    certificateNumber: {
                        in: ['CERT-001', 'CERT-002'],
                    },
                },
            });

            if (!professional) {
                throw new Error('No seeded professional found for testing. Run prisma:seed first.');
            }

            // Explicitly ensure no Authorization header
            const res = await request(app)
                .get('/api/verify-certificate')
                .query({ certificateNumber: professional.certificateNumber })
                .set('Authorization', '') // Explicitly no auth
                .expect(200);

            expect(res.body.found).toBe(true);
        });
    });

    describe('Applicant cannot access admin-level endpoints', () => {
        /**
         * Applicant should NOT be able to access test sessions list (manager-only)
         */
        it('applicant cannot list test sessions', async () => {
            const res = await authenticatedRequest(applicantToken)
                .get('/api/test-sessions')
                .expect(403);

            expect(res.body).toHaveProperty('error');
            expect(res.body.error).toContain('Manager');
        });

        /**
         * Manager can list test sessions
         */
        it('manager can list test sessions', async () => {
            const res = await authenticatedRequest(managerToken)
                .get('/api/test-sessions')
                .expect(200);

            expect(res.body).toHaveProperty('items');
            expect(res.body).toHaveProperty('total');
            expect(Array.isArray(res.body.items)).toBe(true);
        });
    });
});
