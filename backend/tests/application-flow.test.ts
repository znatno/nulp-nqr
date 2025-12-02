/**
 * Application Flow Test
 * Tests the end-to-end process: Application → TestSession → Professional (certificate issuance)
 */

import { loginAs, authenticatedRequest, TEST_USERS } from './helpers.js';
import { prisma } from './setup.js';
import request from 'supertest';
import { app } from '../src/index.js';

describe('Application Flow: Application → TestSession → Professional', () => {
    let managerToken: string;
    let applicantToken: string;
    let professionalQualificationId: number;
    let qualificationCenterId: number;
    let applicationId: number;
    let testSessionId: number;
    let certificateNumber: string | null = null;

    beforeAll(async () => {
        // Login as manager and applicant
        managerToken = await loginAs(TEST_USERS.manager.email, TEST_USERS.manager.password);
        applicantToken = await loginAs(TEST_USERS.applicant.email, TEST_USERS.applicant.password);

        // Fetch required seed data
        // Get a ProfessionalQualification (from seed: "Старший архітектор ПЗ" or "Дизайнер інтерфейсів")
        const qualification = await prisma.professionalQualification.findFirst({
            include: {
                profession: true,
            },
        });

        if (!qualification) {
            throw new Error('No ProfessionalQualification found in seed data. Run prisma:seed first.');
        }

        professionalQualificationId = qualification.id;

        // Get a QualificationCenter that has accreditation for this qualification
        const accreditation = await prisma.qualificationCenterAccreditation.findFirst({
            where: {
                professionalQualificationId: qualification.id,
                status: 'ACTIVE',
            },
            include: {
                qualificationCenter: true,
            },
        });

        if (!accreditation) {
            throw new Error(
                'No active accreditation found for the qualification. Ensure seed data includes accreditations.'
            );
        }

        qualificationCenterId = accreditation.qualificationCenterId;
    });

    /**
     * Step 1: Applicant creates an application
     */
    it('applicant creates application', async () => {
        const res = await authenticatedRequest(applicantToken)
            .post('/api/applicant/applications')
            .send({
                qualificationId: professionalQualificationId,
                centreId: qualificationCenterId, // Preferred center
                comment: 'Test application for automated testing',
            })
            .expect(201);

        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('professionalQualificationId', professionalQualificationId);
        expect(res.body).toHaveProperty('preferredQualificationCenterId', qualificationCenterId);
        expect(res.body).toHaveProperty('status', 'SUBMITTED');
        expect(res.body).toHaveProperty('applicantId');

        applicationId = res.body.id;
    });

    /**
     * Step 2: Manager assigns center to application
     * (In this test, center is already preferred, but manager must assign it)
     */
    it('manager assigns center to application', async () => {
        const res = await authenticatedRequest(managerToken)
            .put(`/api/applications/${applicationId}/assign-center`)
            .send({
                qualificationCenterId: qualificationCenterId,
            })
            .expect(200);

        expect(res.body).toHaveProperty('id', applicationId);
        expect(res.body).toHaveProperty('qualificationCenterId', qualificationCenterId);
        expect(res.body).toHaveProperty('status');
        // Status should be UNDER_REVIEW if it was DRAFT, or remain as SUBMITTED
        expect(['SUBMITTED', 'UNDER_REVIEW']).toContain(res.body.status);
    });

    /**
     * Step 3: Manager creates test session for the application
     */
    it('manager creates test session', async () => {
        const scheduledAt = new Date();
        scheduledAt.setDate(scheduledAt.getDate() + 7); // Schedule 7 days from now

        const res = await authenticatedRequest(managerToken)
            .post(`/api/applications/${applicationId}/test-sessions`)
            .send({
                qualificationCenterId: qualificationCenterId,
                scheduledAt: scheduledAt.toISOString(),
                notes: 'Automated test session',
            })
            .expect(201);

        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('applicationId', applicationId);
        expect(res.body).toHaveProperty('qualificationCenterId', qualificationCenterId);
        expect(res.body).toHaveProperty('result', 'PENDING');
        expect(res.body).toHaveProperty('scheduledAt');

        testSessionId = res.body.id;

        // Verify application status was updated to SCHEDULED
        const application = await prisma.application.findUnique({
            where: { id: applicationId },
        });
        expect(application?.status).toBe('SCHEDULED');
    });

    /**
     * Step 4: Manager marks test as PASSED
     * This should trigger Professional record creation
     */
    it('manager marks test as PASSED and Professional record is created', async () => {
        const res = await authenticatedRequest(managerToken)
            .put(`/api/test-sessions/${testSessionId}`)
            .send({
                result: 'PASSED',
            })
            .expect(200);

        expect(res.body).toHaveProperty('id', testSessionId);
        expect(res.body).toHaveProperty('result', 'PASSED');

        // Wait a bit for async operations (if any)
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Verify that a Professional record was created
        const application = await prisma.application.findUnique({
            where: { id: applicationId },
            include: {
                applicant: true,
            },
        });

        if (!application) {
            throw new Error('Application not found');
        }

        const professional = await prisma.professional.findFirst({
            where: {
                userId: application.applicantId,
                professionalQualificationId: application.professionalQualificationId,
                qualificationCenterId: qualificationCenterId,
            },
        });

        expect(professional).not.toBeNull();
        expect(professional).toHaveProperty('certificateNumber');
        expect(professional?.certificateNumber).toBeTruthy();
        expect(professional).toHaveProperty('certificateReceivedAt');
        expect(professional?.certificateReceivedAt).toBeInstanceOf(Date);

        certificateNumber = professional!.certificateNumber;

        // Verify application status was updated to APPROVED
        const updatedApplication = await prisma.application.findUnique({
            where: { id: applicationId },
        });
        expect(updatedApplication?.status).toBe('APPROVED');
    });

    /**
     * Step 5: Verify certificate via public endpoint
     */
    it('certificate can be verified via public endpoint', async () => {
        if (!certificateNumber) {
            throw new Error('Certificate number not set from previous test');
        }

        const res = await request(app)
            .get('/api/verify-certificate')
            .query({ certificateNumber })
            .expect(200);

        expect(res.body).toHaveProperty('found', true);
        expect(res.body).toHaveProperty('certificateNumber', certificateNumber);
        expect(res.body).toHaveProperty('validity', 'VALID');
        expect(res.body).toHaveProperty('status', 'valid');
        expect(res.body).toHaveProperty('holder');
        expect(res.body).toHaveProperty('qualification');
        expect(res.body).toHaveProperty('centre');
        expect(res.body).toHaveProperty('issueDate');

        // Verify data matches
        expect(res.body.qualification).toHaveProperty('id', professionalQualificationId);
        expect(res.body.centre).toHaveProperty('id', qualificationCenterId);
        expect(res.body.holder).toHaveProperty('fullName');
    });

    /**
     * Cleanup: Remove test data (optional, but good practice)
     * Note: In a real scenario, you might want to keep test data or use transactions
     */
    afterAll(async () => {
        // Clean up in reverse order (respecting foreign key constraints)
        if (testSessionId) {
            try {
                await prisma.testSession.delete({
                    where: { id: testSessionId },
                });
            } catch (err) {
                // Ignore if already deleted
            }
        }

        if (applicationId) {
            try {
                await prisma.application.delete({
                    where: { id: applicationId },
                });
            } catch (err) {
                // Ignore if already deleted
            }
        }

        if (certificateNumber) {
            try {
                await prisma.professional.deleteMany({
                    where: { certificateNumber },
                });
            } catch (err) {
                // Ignore if already deleted
            }
        }
    });
});
