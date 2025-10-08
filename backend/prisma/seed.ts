import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // === РОЗРОБНИКИ ============================================================
    const admin = await prisma.developer.upsert({
        where: { id: 1 },
        update: {},
        create: { id: 1, name: 'Адміністратор системи', edrpou: '00000000' },
    })

    const dev2 = await prisma.developer.create({
        data: { name: 'ТОВ «Лорем Системи»', edrpou: '12345678' },
    })
    const dev3 = await prisma.developer.create({
        data: { name: 'ПП «Іпсум Інновації»', edrpou: '87654321' },
    })

    // === ПРОФЕСІЇ ==============================================================
    const prof1 = await prisma.profession.create({
        data: {
            name: 'Програміст-архітектор',
            code: '2141',
            developerId: admin.id,
        },
    })
    const prof2 = await prisma.profession.create({
        data: {
            name: 'Графічний дизайнер',
            code: '3471',
            developerId: dev2.id,
        },
    })

    // === ПРОФЕСІЙНІ КВАЛІФІКАЦІЇ ==============================================
    const pq1 = await prisma.professionalQualification.create({
        data: {
            name: 'Старший архітектор програмного забезпечення',
            nkrLevel: 7,
            professionId: prof1.id,
        },
    })
    const pq2 = await prisma.professionalQualification.create({
        data: {
            name: 'Дизайнер інтерфейсів (UX/UI)',
            nkrLevel: 6,
            professionId: prof2.id,
        },
    })

    // === КВАЛІФІКАЦІЙНІ ЦЕНТРИ ================================================
    const qc1 = await prisma.qualificationCenter.create({
        data: {
            name: 'Київський національний центр кваліфікацій',
            edrpou: '11223344',
            address: 'м. Київ, вул. Лесі Українки, 1',
        },
    })
    const qc2 = await prisma.qualificationCenter.create({
        data: {
            name: 'Львівський центр професійного розвитку',
            edrpou: '55667788',
            address: 'м. Львів, вул. Городоцька, 12',
        },
    })

    // === АКРЕДИТАЦІЇ ===========================================================
    const acc1 = await prisma.accreditation.create({
        data: {
            professionalQualificationId: pq1.id,
            qualificationCenterId: qc1.id,
            certificateNumber: 'АКР-001',
        },
    })
    const acc2 = await prisma.accreditation.create({
        data: {
            professionalQualificationId: pq2.id,
            qualificationCenterId: qc2.id,
            certificateNumber: 'АКР-002',
        },
    })

    // === ЕКСПЕРТИ ==============================================================
    const expert1 = await prisma.expert.create({
        data: {
            fullName: 'д-р Іван Долор Сіт',
            professionalQualificationId: pq1.id,
        },
    })
    const expert2 = await prisma.expert.create({
        data: {
            fullName: 'канд. наук Анна Амет Консектетур',
            professionalQualificationId: pq2.id,
        },
    })

    // === ОСОБИ (ВИПУСКНИКИ) ====================================================
    const person1 = await prisma.person.create({
        data: {
            fullName: 'Іван Лоременко',
            qualificationCenterId: qc1.id,
            professionalQualificationId: pq1.id,
            certificateNumber: 'СВІД-001',
        },
    })
    const person2 = await prisma.person.create({
        data: {
            fullName: 'Анна Іпсуменко',
            qualificationCenterId: qc2.id,
            professionalQualificationId: pq2.id,
            certificateNumber: 'СВІД-002',
        },
    })

    // === ЕКСПЕРТИЗИ ============================================================
    await prisma.examination.createMany({
        data: [
            {
                professionalQualificationId: pq1.id,
                qualificationCenterId: qc1.id,
                expertId: expert1.id,
            },
            {
                professionalQualificationId: pq2.id,
                qualificationCenterId: qc2.id,
                expertId: expert2.id,
            },
        ],
    })

    console.log('✅ Базу даних заповнено демонстраційними українськими даними.')
}

main()
    .catch((e) => {
        console.error('❌ Помилка при наповненні БД:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
