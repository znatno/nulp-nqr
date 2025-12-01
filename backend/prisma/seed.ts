import 'dotenv/config'
import { PrismaClient } from './generated/client/index.js'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    // — Admin with fixed id=1
    await prisma.developer.upsert({
        where: { id: 1 },
        update: {},
        create: { id: 1, name: 'Адміністратор системи', edrpou: '00000000' },
    })

    //  Bump the sequence so next autoincrement doesn't collide with id=1
    await prisma.$executeRawUnsafe(`
    SELECT setval(
      pg_get_serial_sequence('"Developer"', 'id'),
      GREATEST((SELECT COALESCE(MAX(id),0) FROM "Developer"), 1)
    )
  `)

    // — The rest of your seed
    const dev2 = await prisma.developer.create({
        data: { name: 'ТОВ «Лорем Системи»', edrpou: '12345678' },
    })
    const dev3 = await prisma.developer.create({
        data: { name: 'ПП «Іпсум Інновації»', edrpou: '87654321' },
    })

    const prof1 = await prisma.profession.create({
        data: { name: 'Програміст-архітектор', code: '2141', developerId: 1 },
    })
    const prof2 = await prisma.profession.create({
        data: { name: 'Графічний дизайнер', code: '3471', developerId: dev2.id },
    })

    const pq1 = await prisma.professionalQualification.create({
        data: { name: 'Старший архітектор ПЗ', nkrLevel: 7, professionId: prof1.id },
    })
    const pq2 = await prisma.professionalQualification.create({
        data: { name: 'Дизайнер інтерфейсів (UX/UI)', nkrLevel: 6, professionId: prof2.id },
    })

    const qc1 = await prisma.qualificationCenter.create({
        data: { name: 'Київський нац. центр кваліфікацій', edrpou: '11223344', address: 'м. Київ, вул. Лесі Українки, 1' },
    })
    const qc2 = await prisma.qualificationCenter.create({
        data: { name: 'Львівський центр проф. розвитку', edrpou: '55667788', address: 'м. Львів, вул. Городоцька, 12' },
    })

    await prisma.accreditation.createMany({
        data: [
            { professionalQualificationId: pq1.id, qualificationCenterId: qc1.id, certificateNumber: 'АКР-001' },
            { professionalQualificationId: pq2.id, qualificationCenterId: qc2.id, certificateNumber: 'АКР-002' },
        ],
    })

    const expert1 = await prisma.expert.create({
        data: { fullName: 'д-р Іван Долор Сіт', professionalQualificationId: pq1.id },
    })
    const expert2 = await prisma.expert.create({
        data: { fullName: 'канд. наук Анна Амет Консектетур', professionalQualificationId: pq2.id },
    })

    await prisma.person.createMany({
        data: [
            { fullName: 'Іван Лоременко', qualificationCenterId: qc1.id, professionalQualificationId: pq1.id },
            { fullName: 'Анна Іпсуменко', qualificationCenterId: qc2.id, professionalQualificationId: pq2.id },
        ],
    })

    await prisma.examination.createMany({
        data: [
            { professionalQualificationId: pq1.id, qualificationCenterId: qc1.id, expertId: expert1.id },
            { professionalQualificationId: pq2.id, qualificationCenterId: qc2.id, expertId: expert2.id },
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
