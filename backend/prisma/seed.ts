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
    const dev2 = await prisma.qualificationStandardDeveloper.create({
        data: { 
            name: 'ТОВ «Лорем Системи»', 
            edrpou: '12345678',
            userId: developerUser.id, // Link to developer user
        },
    })
    const dev3 = await prisma.qualificationStandardDeveloper.create({
        data: { name: 'ПП «Іпсум Інновації»', edrpou: '87654321' },
    })
    const dev4 = await prisma.qualificationStandardDeveloper.create({
        data: { name: 'ТОВ «Технології Майбутнього»', edrpou: '23456789' },
    })
    const dev5 = await prisma.qualificationStandardDeveloper.create({
        data: { name: 'ПП «Кваліфікаційні Стандарти»', edrpou: '34567890' },
    })

    // Create 5 professions (distributed across developers)
    const prof1 = await prisma.profession.create({
        data: { name: 'Програміст-архітектор', code: '2141', developerId: 1 },
    })
    const prof2 = await prisma.profession.create({
        data: { name: 'Графічний дизайнер', code: '3471', developerId: dev2.id },
    })
    const prof3 = await prisma.profession.create({
        data: { name: 'Системний адміністратор', code: '2521', developerId: dev3.id },
    })
    const prof4 = await prisma.profession.create({
        data: { name: 'Інженер з тестування ПЗ', code: '2512', developerId: dev4.id },
    })
    const prof5 = await prisma.profession.create({
        data: { name: 'Менеджер проектів', code: '1212', developerId: dev5.id },
    })

    // Create 5 professional qualifications (distributed across professions)
    const pq1 = await prisma.professionalQualification.create({
        data: { name: 'Старший архітектор ПЗ', nqrLevel: 7, professionId: prof1.id },
    })
    const pq2 = await prisma.professionalQualification.create({
        data: { name: 'Дизайнер інтерфейсів (UX/UI)', nqrLevel: 6, professionId: prof2.id },
    })
    const pq3 = await prisma.professionalQualification.create({
        data: { name: 'Старший системний адміністратор', nqrLevel: 6, professionId: prof3.id },
    })
    const pq4 = await prisma.professionalQualification.create({
        data: { name: 'Тестувальник ПЗ', nqrLevel: 5, professionId: prof4.id },
    })
    const pq5 = await prisma.professionalQualification.create({
        data: { name: 'Менеджер IT-проектів', nqrLevel: 7, professionId: prof5.id },
    })

    // Create 5 qualification centers
    const qc1 = await prisma.qualificationCenter.create({
        data: { name: 'Київський нац. центр кваліфікацій', edrpou: '11223344', address: 'м. Київ, вул. Лесі Українки, 1' },
    })
    const qc2 = await prisma.qualificationCenter.create({
        data: { name: 'Львівський центр проф. розвитку', edrpou: '55667788', address: 'м. Львів, вул. Городоцька, 12' },
    })
    const qc3 = await prisma.qualificationCenter.create({
        data: { name: 'Харківський центр кваліфікацій', edrpou: '22334455', address: 'м. Харків, пр. Науки, 14' },
    })
    const qc4 = await prisma.qualificationCenter.create({
        data: { name: 'Одеський регіональний центр', edrpou: '33445566', address: 'м. Одеса, вул. Дерибасівська, 16' },
    })
    const qc5 = await prisma.qualificationCenter.create({
        data: { name: 'Дніпровський центр кваліфікацій', edrpou: '44556677', address: 'м. Дніпро, пр. Дмитра Яворницького, 18' },
    })

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
    })

    // Get expert user to link
    const expertUser = await prisma.user.findUnique({
        where: { email: 'expert@nqr.test' },
    });

    // Create 4 accreditation experts (distributed across qualifications)
    const expert1 = await prisma.accreditationExpert.create({
        data: {
            fullName: 'д-р Іван Долор Сіт',
            professionalQualificationId: pq1.id,
            userId: expertUser?.id,
        },
    });
    const expert2 = await prisma.accreditationExpert.create({
        data: {
            fullName: 'канд. наук Анна Амет Консектетур',
            professionalQualificationId: pq2.id,
        },
    });
    const expert3 = await prisma.accreditationExpert.create({
        data: {
            fullName: 'д-р Петро Еліт Сед',
            professionalQualificationId: pq3.id,
        },
    });
    const expert4 = await prisma.accreditationExpert.create({
        data: {
            fullName: 'канд. наук Марія Дое',
            professionalQualificationId: pq4.id,
        },
    });

    // Create 5 professional records (certificates)
    await prisma.professional.createMany({
        data: [
            { fullName: 'Іван Лоременко', qualificationCenterId: qc1.id, professionalQualificationId: pq1.id, certificateNumber: 'CERT-001' },
            { fullName: 'Анна Іпсуменко', qualificationCenterId: qc2.id, professionalQualificationId: pq2.id, certificateNumber: 'CERT-002' },
            { fullName: 'Петро Системенко', qualificationCenterId: qc3.id, professionalQualificationId: pq3.id, certificateNumber: 'CERT-003' },
            { fullName: 'Олена Тестова', qualificationCenterId: qc4.id, professionalQualificationId: pq4.id, certificateNumber: 'CERT-004' },
            { fullName: 'Михайло Проектов', qualificationCenterId: qc5.id, professionalQualificationId: pq5.id, certificateNumber: 'CERT-005' },
        ],
    })

    // Create 5 qualification center expertises (linking experts to center-qualification pairs)
    await prisma.qualificationCenterExpertise.createMany({
        data: [
            { professionalQualificationId: pq1.id, qualificationCenterId: qc1.id, accreditationExpertId: expert1.id, result: 'Позитивний висновок', notes: 'Центр відповідає вимогам' },
            { professionalQualificationId: pq2.id, qualificationCenterId: qc2.id, accreditationExpertId: expert2.id, result: 'Позитивний висновок', notes: 'Всі вимоги виконано' },
            { professionalQualificationId: pq3.id, qualificationCenterId: qc3.id, accreditationExpertId: expert3.id, result: 'Позитивний висновок', notes: 'Рекомендовано до акредитації' },
            { professionalQualificationId: pq4.id, qualificationCenterId: qc4.id, accreditationExpertId: expert4.id, result: 'Позитивний висновок', notes: 'Центр готовий до роботи' },
            { professionalQualificationId: pq1.id, qualificationCenterId: qc3.id, accreditationExpertId: expert1.id, result: 'Позитивний висновок', notes: 'Відповідає стандартам' },
        ],
    })

    // ─────────────────────────────────────────────────────
    // Seed demo applications and test sessions for complete flow
    // Create 5 applications with various statuses

    // App1: APPROVED (with passed test and certificate)
    const app1 = await prisma.application.create({
        data: {
            applicantId: applicantUser.id,
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
    const professional1 = await prisma.professional.create({
        data: {
            fullName: 'Тестовий Заявник',
            qualificationCenterId: qc1.id,
            professionalQualificationId: pq1.id,
            certificateNumber: `NQR-${new Date().getFullYear()}-000001`,
            certificateReceivedAt: new Date(),
            userId: applicantUser.id,
        },
    })

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
