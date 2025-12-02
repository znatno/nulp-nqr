import 'dotenv/config'
import { PrismaClient } from './generated/client/index.js'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import { hashPassword } from '../src/auth/authUtils.js'

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    // ─────────────────────────────────────────────────────
    // Seed test users
    // Password for all test users: Password123!
    const testPassword = 'Password123!';
    const passwordHash = await hashPassword(testPassword);

    // Manager user (full access)
    await prisma.user.upsert({
        where: { email: 'manager@nqr.test' },
        update: {},
        create: {
            email: 'manager@nqr.test',
            passwordHash,
            role: 'MANAGER',
            canApplyForQualification: false,
            canDevelopStandards: false,
            canAccreditCenters: false,
        },
    });

    // Applicant user (USER with canApplyForQualification)
    const applicantUser = await prisma.user.upsert({
        where: { email: 'applicant@nqr.test' },
        update: {},
        create: {
            email: 'applicant@nqr.test',
            passwordHash,
            role: 'USER',
            canApplyForQualification: true,
            canDevelopStandards: false,
            canAccreditCenters: false,
        },
    });

    // Developer user (USER with canDevelopStandards)
    const developerUser = await prisma.user.upsert({
        where: { email: 'developer@nqr.test' },
        update: {},
        create: {
            email: 'developer@nqr.test',
            passwordHash,
            role: 'USER',
            canApplyForQualification: false,
            canDevelopStandards: true,
            canAccreditCenters: false,
        },
    });

    // Accreditation expert user (USER with canAccreditCenters)
    await prisma.user.upsert({
        where: { email: 'expert@nqr.test' },
        update: {},
        create: {
            email: 'expert@nqr.test',
            passwordHash,
            role: 'USER',
            canApplyForQualification: false,
            canDevelopStandards: false,
            canAccreditCenters: true,
        },
    });

    // Viewer user (read-only)
    await prisma.user.upsert({
        where: { email: 'viewer@nqr.test' },
        update: {},
        create: {
            email: 'viewer@nqr.test',
            passwordHash,
            role: 'VIEWER',
            canApplyForQualification: false,
            canDevelopStandards: false,
            canAccreditCenters: false,
        },
    });

    console.log('✅ Test users created:');
    console.log('   Manager:    manager@nqr.test / Password123!');
    console.log('   Applicant:  applicant@nqr.test / Password123!');
    console.log('   Developer:  developer@nqr.test / Password123!');
    console.log('   Expert:     expert@nqr.test / Password123!');
    console.log('   Viewer:     viewer@nqr.test / Password123!');

    // ─────────────────────────────────────────────────────
    // — Admin with fixed id=1
    await prisma.qualificationStandardDeveloper.upsert({
        where: { id: 1 },
        update: {},
        create: { id: 1, name: 'Адміністратор системи', edrpou: '00000000' },
    })

    //  Bump the sequence so next autoincrement doesn't collide with id=1
    await prisma.$executeRawUnsafe(`
    SELECT setval(
      pg_get_serial_sequence('"QualificationStandardDeveloper"', 'id'),
      GREATEST((SELECT COALESCE(MAX(id),0) FROM "QualificationStandardDeveloper"), 1)
    )
  `)

    // — The rest of your seed
    // Link developer user to dev2
    // Handle re-running seed: unlink userId from any existing record first
    const existingDevWithUserId = await prisma.qualificationStandardDeveloper.findUnique({
        where: { userId: developerUser.id },
    });
    if (existingDevWithUserId) {
        await prisma.qualificationStandardDeveloper.update({
            where: { id: existingDevWithUserId.id },
            data: { userId: null },
        });
    }

    // Find or create dev2 by edrpou
    let dev2 = await prisma.qualificationStandardDeveloper.findFirst({
        where: { edrpou: '12345678' },
    });
    if (dev2) {
        dev2 = await prisma.qualificationStandardDeveloper.update({
            where: { id: dev2.id },
            data: { 
                name: 'ТОВ «Лорем Системи»',
                userId: developerUser.id,
            },
        });
    } else {
        dev2 = await prisma.qualificationStandardDeveloper.create({
            data: { 
                name: 'ТОВ «Лорем Системи»', 
                edrpou: '12345678',
                userId: developerUser.id,
            },
        });
    }

    // Find or create other developers by edrpou
    let dev3 = await prisma.qualificationStandardDeveloper.findFirst({
        where: { edrpou: '87654321' },
    });
    if (dev3) {
        dev3 = await prisma.qualificationStandardDeveloper.update({
            where: { id: dev3.id },
            data: { name: 'ПП «Іпсум Інновації»' },
        });
    } else {
        dev3 = await prisma.qualificationStandardDeveloper.create({
            data: { name: 'ПП «Іпсум Інновації»', edrpou: '87654321' },
        });
    }

    let dev4 = await prisma.qualificationStandardDeveloper.findFirst({
        where: { edrpou: '23456789' },
    });
    if (dev4) {
        dev4 = await prisma.qualificationStandardDeveloper.update({
            where: { id: dev4.id },
            data: { name: 'ТОВ «Технології Майбутнього»' },
        });
    } else {
        dev4 = await prisma.qualificationStandardDeveloper.create({
            data: { name: 'ТОВ «Технології Майбутнього»', edrpou: '23456789' },
        });
    }

    let dev5 = await prisma.qualificationStandardDeveloper.findFirst({
        where: { edrpou: '34567890' },
    });
    if (dev5) {
        dev5 = await prisma.qualificationStandardDeveloper.update({
            where: { id: dev5.id },
            data: { name: 'ПП «Кваліфікаційні Стандарти»' },
        });
    } else {
        dev5 = await prisma.qualificationStandardDeveloper.create({
            data: { name: 'ПП «Кваліфікаційні Стандарти»', edrpou: '34567890' },
        });
    }

    // Create 5 professions (distributed across developers)
    // Use findFirst + create pattern to handle re-running seed
    let prof1 = await prisma.profession.findFirst({ where: { code: '2141' } });
    if (!prof1) {
        prof1 = await prisma.profession.create({
            data: { name: 'Програміст-архітектор', code: '2141', developerId: 1 },
        });
    }
    let prof2 = await prisma.profession.findFirst({ where: { code: '3471' } });
    if (!prof2) {
        prof2 = await prisma.profession.create({
            data: { name: 'Графічний дизайнер', code: '3471', developerId: dev2.id },
        });
    }
    let prof3 = await prisma.profession.findFirst({ where: { code: '2521' } });
    if (!prof3) {
        prof3 = await prisma.profession.create({
            data: { name: 'Системний адміністратор', code: '2521', developerId: dev3.id },
        });
    }
    let prof4 = await prisma.profession.findFirst({ where: { code: '2512' } });
    if (!prof4) {
        prof4 = await prisma.profession.create({
            data: { name: 'Інженер з тестування ПЗ', code: '2512', developerId: dev4.id },
        });
    }
    let prof5 = await prisma.profession.findFirst({ where: { code: '1212' } });
    if (!prof5) {
        prof5 = await prisma.profession.create({
            data: { name: 'Менеджер проектів', code: '1212', developerId: dev5.id },
        });
    }

    // Create 5 professional qualifications (distributed across professions)
    // Use findFirst + create pattern to handle re-running seed
    let pq1 = await prisma.professionalQualification.findFirst({ 
        where: { name: 'Старший архітектор ПЗ', professionId: prof1.id } 
    });
    if (!pq1) {
        pq1 = await prisma.professionalQualification.create({
            data: { name: 'Старший архітектор ПЗ', nqrLevel: 7, professionId: prof1.id },
        });
    }
    let pq2 = await prisma.professionalQualification.findFirst({ 
        where: { name: 'Дизайнер інтерфейсів (UX/UI)', professionId: prof2.id } 
    });
    if (!pq2) {
        pq2 = await prisma.professionalQualification.create({
            data: { name: 'Дизайнер інтерфейсів (UX/UI)', nqrLevel: 6, professionId: prof2.id },
        });
    }
    let pq3 = await prisma.professionalQualification.findFirst({ 
        where: { name: 'Старший системний адміністратор', professionId: prof3.id } 
    });
    if (!pq3) {
        pq3 = await prisma.professionalQualification.create({
            data: { name: 'Старший системний адміністратор', nqrLevel: 6, professionId: prof3.id },
        });
    }
    let pq4 = await prisma.professionalQualification.findFirst({ 
        where: { name: 'Тестувальник ПЗ', professionId: prof4.id } 
    });
    if (!pq4) {
        pq4 = await prisma.professionalQualification.create({
            data: { name: 'Тестувальник ПЗ', nqrLevel: 5, professionId: prof4.id },
        });
    }
    let pq5 = await prisma.professionalQualification.findFirst({ 
        where: { name: 'Менеджер IT-проектів', professionId: prof5.id } 
    });
    if (!pq5) {
        pq5 = await prisma.professionalQualification.create({
            data: { name: 'Менеджер IT-проектів', nqrLevel: 7, professionId: prof5.id },
        });
    }

    // Create 5 qualification centers
    // Use findFirst + create pattern to handle re-running seed
    let qc1 = await prisma.qualificationCenter.findFirst({ where: { edrpou: '11223344' } });
    if (!qc1) {
        qc1 = await prisma.qualificationCenter.create({
            data: { name: 'Київський нац. центр кваліфікацій', edrpou: '11223344', address: 'м. Київ, вул. Лесі Українки, 1' },
        });
    }
    let qc2 = await prisma.qualificationCenter.findFirst({ where: { edrpou: '55667788' } });
    if (!qc2) {
        qc2 = await prisma.qualificationCenter.create({
            data: { name: 'Львівський центр проф. розвитку', edrpou: '55667788', address: 'м. Львів, вул. Городоцька, 12' },
        });
    }
    let qc3 = await prisma.qualificationCenter.findFirst({ where: { edrpou: '22334455' } });
    if (!qc3) {
        qc3 = await prisma.qualificationCenter.create({
            data: { name: 'Харківський центр кваліфікацій', edrpou: '22334455', address: 'м. Харків, пр. Науки, 14' },
        });
    }
    let qc4 = await prisma.qualificationCenter.findFirst({ where: { edrpou: '33445566' } });
    if (!qc4) {
        qc4 = await prisma.qualificationCenter.create({
            data: { name: 'Одеський регіональний центр', edrpou: '33445566', address: 'м. Одеса, вул. Дерибасівська, 16' },
        });
    }
    let qc5 = await prisma.qualificationCenter.findFirst({ where: { edrpou: '44556677' } });
    if (!qc5) {
        qc5 = await prisma.qualificationCenter.create({
            data: { name: 'Дніпровський центр кваліфікацій', edrpou: '44556677', address: 'м. Дніпро, пр. Дмитра Яворницького, 18' },
        });
    }

    // Create accreditations: each qualification should have accreditations at 2-3 centers
    await prisma.qualificationCenterAccreditation.createMany({
        data: [
            // PQ1 (Старший архітектор ПЗ) - accreditations at 3 centers
            { professionalQualificationId: pq1.id, qualificationCenterId: qc1.id, accreditationDocumentId: 'АКР-001' },
            { professionalQualificationId: pq1.id, qualificationCenterId: qc3.id, accreditationDocumentId: 'АКР-002' },
            { professionalQualificationId: pq1.id, qualificationCenterId: qc5.id, accreditationDocumentId: 'АКР-003' },
            // PQ2 (Дизайнер інтерфейсів) - accreditations at 2 centers
            { professionalQualificationId: pq2.id, qualificationCenterId: qc2.id, accreditationDocumentId: 'АКР-004' },
            { professionalQualificationId: pq2.id, qualificationCenterId: qc4.id, accreditationDocumentId: 'АКР-005' },
            // PQ3 (Старший системний адміністратор) - accreditations at 3 centers
            { professionalQualificationId: pq3.id, qualificationCenterId: qc1.id, accreditationDocumentId: 'АКР-006' },
            { professionalQualificationId: pq3.id, qualificationCenterId: qc2.id, accreditationDocumentId: 'АКР-007' },
            { professionalQualificationId: pq3.id, qualificationCenterId: qc3.id, accreditationDocumentId: 'АКР-008' },
            // PQ4 (Тестувальник ПЗ) - accreditations at 2 centers
            { professionalQualificationId: pq4.id, qualificationCenterId: qc4.id, accreditationDocumentId: 'АКР-009' },
            { professionalQualificationId: pq4.id, qualificationCenterId: qc5.id, accreditationDocumentId: 'АКР-010' },
            // PQ5 (Менеджер IT-проектів) - accreditations at 2 centers
            { professionalQualificationId: pq5.id, qualificationCenterId: qc1.id, accreditationDocumentId: 'АКР-011' },
            { professionalQualificationId: pq5.id, qualificationCenterId: qc3.id, accreditationDocumentId: 'АКР-012' },
        ],
        skipDuplicates: true,
    })

    // Get expert user to link
    const expertUser = await prisma.user.findUnique({
        where: { email: 'expert@nqr.test' },
    });

    // Create 4 accreditation experts (distributed across qualifications)
    // Use findFirst + create/update pattern to handle re-running seed
    let expert1 = await prisma.accreditationExpert.findFirst({
        where: {
            fullName: 'д-р Іван Долор Сіт',
            professionalQualificationId: pq1.id,
        },
    });
    if (!expert1) {
        // If expert user is already linked to another expert, unlink it first
        if (expertUser) {
            const existingExpertWithUserId = await prisma.accreditationExpert.findFirst({
                where: { userId: expertUser.id },
            });
            if (existingExpertWithUserId) {
                await prisma.accreditationExpert.update({
                    where: { id: existingExpertWithUserId.id },
                    data: { userId: null },
                });
            }
        }
        expert1 = await prisma.accreditationExpert.create({
            data: {
                fullName: 'д-р Іван Долор Сіт',
                professionalQualificationId: pq1.id,
                userId: expertUser?.id,
            },
        });
    } else if (expertUser && expert1.userId !== expertUser.id) {
        // Update if userId needs to be set
        const existingExpertWithUserId = await prisma.accreditationExpert.findFirst({
            where: { userId: expertUser.id },
        });
        if (existingExpertWithUserId) {
            await prisma.accreditationExpert.update({
                where: { id: existingExpertWithUserId.id },
                data: { userId: null },
            });
        }
        expert1 = await prisma.accreditationExpert.update({
            where: { id: expert1.id },
            data: { userId: expertUser.id },
        });
    }

    let expert2 = await prisma.accreditationExpert.findFirst({
        where: {
            fullName: 'канд. наук Анна Амет Консектетур',
            professionalQualificationId: pq2.id,
        },
    });
    if (!expert2) {
        expert2 = await prisma.accreditationExpert.create({
            data: {
                fullName: 'канд. наук Анна Амет Консектетур',
                professionalQualificationId: pq2.id,
            },
        });
    }

    let expert3 = await prisma.accreditationExpert.findFirst({
        where: {
            fullName: 'д-р Петро Еліт Сед',
            professionalQualificationId: pq3.id,
        },
    });
    if (!expert3) {
        expert3 = await prisma.accreditationExpert.create({
            data: {
                fullName: 'д-р Петро Еліт Сед',
                professionalQualificationId: pq3.id,
            },
        });
    }

    let expert4 = await prisma.accreditationExpert.findFirst({
        where: {
            fullName: 'канд. наук Марія Дое',
            professionalQualificationId: pq4.id,
        },
    });
    if (!expert4) {
        expert4 = await prisma.accreditationExpert.create({
            data: {
                fullName: 'канд. наук Марія Дое',
                professionalQualificationId: pq4.id,
            },
        });
    }

    // Create 5 professional records (certificates)
    await prisma.professional.createMany({
        data: [
            { fullName: 'Іван Лоременко', qualificationCenterId: qc1.id, professionalQualificationId: pq1.id, certificateNumber: 'CERT-001' },
            { fullName: 'Анна Іпсуменко', qualificationCenterId: qc2.id, professionalQualificationId: pq2.id, certificateNumber: 'CERT-002' },
            { fullName: 'Петро Системенко', qualificationCenterId: qc3.id, professionalQualificationId: pq3.id, certificateNumber: 'CERT-003' },
            { fullName: 'Олена Тестова', qualificationCenterId: qc4.id, professionalQualificationId: pq4.id, certificateNumber: 'CERT-004' },
            { fullName: 'Михайло Проектов', qualificationCenterId: qc5.id, professionalQualificationId: pq5.id, certificateNumber: 'CERT-005' },
        ],
        skipDuplicates: true,
    })

    // Create 5 qualification center expertises (linking experts to center-qualification pairs)
    // Add varied dates: some in the past, some recent
    const now = new Date();
    await prisma.qualificationCenterExpertise.createMany({
        data: [
            { 
                professionalQualificationId: pq1.id, 
                qualificationCenterId: qc1.id, 
                accreditationExpertId: expert1.id, 
                expertiseDate: new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
                result: 'Позитивний висновок', 
                notes: 'Центр відповідає вимогам' 
            },
            { 
                professionalQualificationId: pq2.id, 
                qualificationCenterId: qc2.id, 
                accreditationExpertId: expert2.id, 
                expertiseDate: new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
                result: 'Позитивний висновок', 
                notes: 'Всі вимоги виконано' 
            },
            { 
                professionalQualificationId: pq3.id, 
                qualificationCenterId: qc3.id, 
                accreditationExpertId: expert3.id, 
                expertiseDate: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
                result: 'Позитивний висновок', 
                notes: 'Рекомендовано до акредитації' 
            },
            { 
                professionalQualificationId: pq4.id, 
                qualificationCenterId: qc4.id, 
                accreditationExpertId: expert4.id, 
                expertiseDate: new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
                result: 'Позитивний висновок', 
                notes: 'Центр готовий до роботи' 
            },
            { 
                professionalQualificationId: pq1.id, 
                qualificationCenterId: qc3.id, 
                accreditationExpertId: expert1.id, 
                expertiseDate: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
                result: 'Позитивний висновок', 
                notes: 'Відповідає стандартам' 
            },
        ],
        skipDuplicates: true,
    })

    // ─────────────────────────────────────────────────────
    // Seed demo applications and test sessions for complete flow
    // Delete existing applications for applicant user to avoid duplicates on re-run
    await prisma.testSession.deleteMany({
        where: {
            application: {
                applicantId: applicantUser.id,
            },
        },
    });
    await prisma.application.deleteMany({
        where: {
            applicantId: applicantUser.id,
        },
    });

    // Create 5 applications with various statuses
    // App1: APPROVED (with passed test and certificate)
    const app1 = await prisma.application.create({
        data: {
            applicantId: applicantUser.id,
            fullName: 'Тестовий Заявник',
            professionalQualificationId: pq1.id,
            preferredQualificationCenterId: qc1.id,
            qualificationCenterId: qc1.id,
            status: 'APPROVED',
            comment: 'Заявка на отримання кваліфікації',
        },
    })

    // App2: SCHEDULED (with pending test)
    const app2 = await prisma.application.create({
        data: {
            applicantId: applicantUser.id,
            fullName: 'Тестовий Заявник',
            professionalQualificationId: pq2.id,
            preferredQualificationCenterId: qc2.id,
            qualificationCenterId: qc2.id,
            status: 'SCHEDULED',
            comment: null,
        },
    })

    // App3: UNDER_REVIEW (no center assigned yet)
    const app3 = await prisma.application.create({
        data: {
            applicantId: applicantUser.id,
            fullName: 'Тестовий Заявник',
            professionalQualificationId: pq3.id,
            preferredQualificationCenterId: qc3.id,
            status: 'UNDER_REVIEW',
            comment: 'Очікую призначення центру',
        },
    })

    // App4: SUBMITTED (just submitted)
    const app4 = await prisma.application.create({
        data: {
            applicantId: applicantUser.id,
            fullName: 'Тестовий Заявник',
            professionalQualificationId: pq4.id,
            preferredQualificationCenterId: qc4.id,
            status: 'SUBMITTED',
            comment: 'Нова заявка',
        },
    })

    // App5: REFUSED (with failed test)
    const app5 = await prisma.application.create({
        data: {
            applicantId: applicantUser.id,
            fullName: 'Тестовий Заявник',
            professionalQualificationId: pq5.id,
            preferredQualificationCenterId: qc5.id,
            qualificationCenterId: qc5.id,
            status: 'REFUSED',
            comment: 'Тест не пройдено',
        },
    })

    // Create 5 test sessions with various results
    const testSession1 = await prisma.testSession.create({
        data: {
            applicationId: app1.id,
            qualificationCenterId: qc1.id,
            scheduledAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
            result: 'PASSED',
            notes: 'Тест успішно пройдено',
        },
    })

    const testSession2 = await prisma.testSession.create({
        data: {
            applicationId: app2.id,
            qualificationCenterId: qc2.id,
            scheduledAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
            result: 'PENDING',
            notes: null,
        },
    })

    const testSession3 = await prisma.testSession.create({
        data: {
            applicationId: app5.id,
            qualificationCenterId: qc5.id,
            scheduledAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
            result: 'FAILED',
            notes: 'Не набрано мінімальний бал',
        },
    })

    // Create additional test sessions for variety
    const testSession4 = await prisma.testSession.create({
        data: {
            applicationId: app1.id, // Second test session for app1 (retake scenario)
            qualificationCenterId: qc1.id,
            scheduledAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
            result: 'PASSED',
            notes: 'Перша спроба',
        },
    })

    const testSession5 = await prisma.testSession.create({
        data: {
            applicationId: app2.id, // Second test session for app2 (rescheduled)
            qualificationCenterId: qc2.id,
            scheduledAt: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000), // 21 days from now
            result: 'PENDING',
            notes: 'Перенесено з попередньої дати',
        },
    })

    // Create Professional record (certificate) for app1 since test passed
    // Use findFirst + create pattern to handle re-running seed
    const certificateNumber = `NQR-${new Date().getFullYear()}-000001`;
    let professional1 = await prisma.professional.findUnique({
        where: { certificateNumber },
    });
    if (!professional1) {
        professional1 = await prisma.professional.create({
            data: {
                fullName: 'Тестовий Заявник',
                qualificationCenterId: qc1.id,
                professionalQualificationId: pq1.id,
                certificateNumber,
                certificateReceivedAt: new Date(),
                userId: applicantUser.id,
            },
        });
    } else {
        // Update existing professional to ensure it's linked to the applicant user
        professional1 = await prisma.professional.update({
            where: { id: professional1.id },
            data: {
                fullName: 'Тестовий Заявник',
                qualificationCenterId: qc1.id,
                professionalQualificationId: pq1.id,
                userId: applicantUser.id,
            },
        });
    }

    console.log('✅ БД заповнено демонстраційними даними.')
    console.log('✅ Додано заявки, тестові сесії та сертифікати для демонстрації повного потоку.')
    console.log('✅ Розширено seed дані:')
    console.log('   - 5 розробників стандартів')
    console.log('   - 5 професій')
    console.log('   - 5 профкваліфікацій')
    console.log('   - 5 кваліфікаційних центрів')
    console.log('   - 12 акредитацій (кожна кваліфікація має акредитації у 2-3 центрах)')
    console.log('   - 4 експерти з акредитації')
    console.log('   - 5 експертиз')
    console.log('   - 5 професіоналів (сертифікатів)')
    console.log('   - 5 заявок (різні статуси)')
    console.log('   - 5 тестових сесій (різні результати)')
}

main().catch((e) => {
    console.error('❌ Помилка наповнення БД, перевірте справність prisma/seed.ts', e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})
