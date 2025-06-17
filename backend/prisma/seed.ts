import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Developers
    const dev1 = await prisma.developer.create({
        data: { name: 'Tech Education LLC', edrpou: '12345678' },
    });
    const dev2 = await prisma.developer.create({
        data: { name: 'National Training Center', edrpou: '87654321' },
    });

    // Professions
    const prof1 = await prisma.profession.create({
        data: {
            name: 'Software Development',
            code: 'SD-001',
            approvalDate: new Date('2022-01-10'),
            developerId: dev1.id,
        },
    });
    const prof2 = await prisma.profession.create({
        data: {
            name: 'Network Engineering',
            code: 'NE-001',
            approvalDate: new Date('2022-06-15'),
            developerId: dev2.id,
        },
    });

    // Professional Qualifications
    const pq1 = await prisma.professionalQualification.create({
        data: {
            name: 'Junior Software Developer',
            nkrLevel: 4,
            professionId: prof1.id,
        },
    });
    const pq2 = await prisma.professionalQualification.create({
        data: {
            name: 'Senior Network Engineer',
            nkrLevel: 5,
            professionId: prof2.id,
        },
    });

    // Qualification Centers
    const center1 = await prisma.qualificationCenter.create({
        data: {
            name: 'City Certification Center',
            edrpou: '11223344',
            address: '123 Main St, Kyiv',
        },
    });
    const center2 = await prisma.qualificationCenter.create({
        data: {
            name: 'Regional Assessment Hub',
            edrpou: '55667788',
            address: '45 Industrial Ave, Lviv',
        },
    });

    // Accreditations
    await prisma.accreditation.create({
        data: {
            professionalQualificationId: pq1.id,
            qualificationCenterId: center1.id,
            certificateNumber: 'ACC-1001',
            hakDate: new Date('2023-03-12'),
        },
    });
    await prisma.accreditation.create({
        data: {
            professionalQualificationId: pq2.id,
            qualificationCenterId: center2.id,
            certificateNumber: 'ACC-1002',
            hakDate: new Date('2023-05-20'),
        },
    });

    // Persons
    await prisma.person.create({
        data: {
            fullName: 'Oleksandr Shevchenko',
            qualificationCenterId: center1.id,
            professionalQualificationId: pq1.id,
            certificateNumber: 'CERT-2001',
            dateReceived: new Date('2023-04-15'),
        },
    });
    await prisma.person.create({
        data: {
            fullName: 'Iryna Kozachenko',
            qualificationCenterId: center2.id,
            professionalQualificationId: pq2.id,
            certificateNumber: 'CERT-2002',
            dateReceived: new Date('2023-06-18'),
        },
    });

    // Experts
    const expert1 = await prisma.expert.create({
        data: {
            fullName: 'Maria Popova',
            professionalQualificationId: pq1.id,
        },
    });
    const expert2 = await prisma.expert.create({
        data: {
            fullName: 'Taras Horbunov',
            professionalQualificationId: pq2.id,
        },
    });

    // Examinations
    await prisma.examination.create({
        data: {
            professionalQualificationId: pq1.id,
            qualificationCenterId: center1.id,
            expertId: expert1.id,
            examinationDate: new Date('2024-01-10'),
        },
    });
    await prisma.examination.create({
        data: {
            professionalQualificationId: pq2.id,
            qualificationCenterId: center2.id,
            expertId: expert2.id,
            examinationDate: new Date('2024-02-20'),
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
