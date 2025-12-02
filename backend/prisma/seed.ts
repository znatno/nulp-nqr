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
    await prisma.user.upsert({
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
    await prisma.user.upsert({
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
    const dev2 = await prisma.qualificationStandardDeveloper.create({
        data: { name: 'ТОВ «Лорем Системи»', edrpou: '12345678' },
    })
    const dev3 = await prisma.qualificationStandardDeveloper.create({
        data: { name: 'ПП «Іпсум Інновації»', edrpou: '87654321' },
    })

    const prof1 = await prisma.profession.create({
        data: { name: 'Програміст-архітектор', code: '2141', developerId: 1 },
    })
    const prof2 = await prisma.profession.create({
        data: { name: 'Графічний дизайнер', code: '3471', developerId: dev2.id },
    })

    const pq1 = await prisma.professionalQualification.create({
        data: { name: 'Старший архітектор ПЗ', nqrLevel: 7, professionId: prof1.id },
    })
    const pq2 = await prisma.professionalQualification.create({
        data: { name: 'Дизайнер інтерфейсів (UX/UI)', nqrLevel: 6, professionId: prof2.id },
    })

    const qc1 = await prisma.qualificationCenter.create({
        data: { name: 'Київський нац. центр кваліфікацій', edrpou: '11223344', address: 'м. Київ, вул. Лесі Українки, 1' },
    })
    const qc2 = await prisma.qualificationCenter.create({
        data: { name: 'Львівський центр проф. розвитку', edrpou: '55667788', address: 'м. Львів, вул. Городоцька, 12' },
    })

    await prisma.qualificationCenterAccreditation.createMany({
        data: [
            { professionalQualificationId: pq1.id, qualificationCenterId: qc1.id, accreditationDocumentId: 'АКР-001' },
            { professionalQualificationId: pq2.id, qualificationCenterId: qc2.id, accreditationDocumentId: 'АКР-002' },
        ],
    })

    // Get expert user to link
    const expertUser = await prisma.user.findUnique({
        where: { email: 'expert@nqr.test' },
    });

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

    await prisma.professional.createMany({
        data: [
            { fullName: 'Іван Лоременко', qualificationCenterId: qc1.id, professionalQualificationId: pq1.id, certificateNumber: 'CERT-001' },
            { fullName: 'Анна Іпсуменко', qualificationCenterId: qc2.id, professionalQualificationId: pq2.id, certificateNumber: 'CERT-002' },
        ],
    })

    await prisma.qualificationCenterExpertise.createMany({
        data: [
            { professionalQualificationId: pq1.id, qualificationCenterId: qc1.id, accreditationExpertId: expert1.id },
            { professionalQualificationId: pq2.id, qualificationCenterId: qc2.id, accreditationExpertId: expert2.id },
        ],
    })

    console.log('✅ БД заповнено демонстраційними даними.')
}

main().catch((e) => {
    console.error('❌ Помилка наповнення БД, перевірте справність prisma/seed.ts', e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})
