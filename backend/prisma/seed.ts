import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const it = await prisma.profession.create({
        data: { name: 'IT Specialist', code: 'IT-01' }
    });

    await prisma.qualification.create({
        data: { title: 'Junior Web Dev', level: 4, professionId: it.id }
    });
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
