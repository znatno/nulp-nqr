import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PrismaClient } from '../prisma/generated/client/index.js';
import type {
    Profession,
    ProfessionalQualification,
} from '../prisma/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import centresRoutes from './routes/centres.js';
import developersRoutes from './routes/developers.js';
import professionsRoutes from './routes/professions.js';
import professionalQualificationsRoutes from './routes/professionalQualifications.js';
import professionalsRoutes from './routes/persons.js';
import accreditationsRoutes from './routes/accreditations.js';
import examinationsRoutes from './routes/examinations.js';
import expertsRoutes from './routes/experts.js';
import applicantRoutes from './routes/applicant.js';
import verificationRoutes from './routes/verification.js';
import dashboardRoutes from './routes/dashboard.js';
import reportsRoutes from './routes/reports.js';
import applicationsRoutes from './routes/applications.js';
import testSessionsRoutes from './routes/testSessions.js';
import usersRoutes from './routes/users.js';
import expertRoutes from './routes/expert.js';
import developerRoutes from './routes/developer.js';
import { authenticate, requireRole, requireManager } from './middleware/auth.js';

// ESM-compatible __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

function getProfessionalQualificationClient(): PrismaClient['professionalQualification'] {
    const client = prisma.professionalQualification;
    if (!client?.findMany) {
        throw new Error(
            'Prisma client is missing the `professionalQualification` model. Run `npx prisma generate` to regenerate the client.'
        );
    }
    return client;
}
const app = express();

// ─────────────────────────────────────────────────────
// Middleware
app.use(cors());
app.use(express.json());

// Apply authentication middleware globally (optional auth for most routes)
// Routes can use requireAuth() or requireRole() if they need strict auth
app.use(authenticate);

// ─────────────────────────────────────────────────────
// Auth routes (public)
app.use('/api/auth', authRoutes);

// ─────────────────────────────────────────────────────
// Manager CRUD routes (protected)
app.use('/api/centres', centresRoutes);
app.use('/api/developers', developersRoutes);
app.use('/api/professions', professionsRoutes);
app.use('/api/professional-qualifications', professionalQualificationsRoutes);
app.use('/api/persons', professionalsRoutes);
app.use('/api/accreditations', accreditationsRoutes);
app.use('/api/examinations', examinationsRoutes);
app.use('/api/experts', expertsRoutes);

// ─────────────────────────────────────────────────────
// Applicant routes (protected, requires applicant capability: canApplyForQualification = true)
app.use('/api/applicant', applicantRoutes);

// ─────────────────────────────────────────────────────
// Expert routes (protected, requires expert capability: canAccreditCenters = true)
app.use('/api/expert', expertRoutes);

// ─────────────────────────────────────────────────────
// Developer routes (protected, requires developer capability: canDevelopStandards = true)
app.use('/api/developer', developerRoutes);

// ─────────────────────────────────────────────────────
// Verification routes (public, no auth required)
app.use('/api/verify-certificate', verificationRoutes);

// ─────────────────────────────────────────────────────
// Dashboard routes (protected, requires MANAGER role)
app.use('/api/dashboard', dashboardRoutes);

// ─────────────────────────────────────────────────────
// Reports routes (protected, requires MANAGER role)
app.use('/api/reports', reportsRoutes);

// ─────────────────────────────────────────────────────
// Applications routes (protected, requires MANAGER role)
app.use('/api/applications', applicationsRoutes);

// ─────────────────────────────────────────────────────
// Test sessions routes (protected, requires MANAGER role)
app.use('/api/test-sessions', testSessionsRoutes);

// ─────────────────────────────────────────────────────
// User management routes (protected, requires MANAGER role)
app.use('/api/users', usersRoutes);

// ─────────────────────────────────────────────────────
// REST endpoints

type QualificationResponse = {
    id: number;
    title: string;
    level: number;
    profession: Profession | null;
};

type ProfessionalQualificationWithProfession = ProfessionalQualification & {
    profession: Profession | null;
};

function mapProfessionalQualification({
    id,
    name,
    nqrLevel,
    profession,
}: ProfessionalQualificationWithProfession): QualificationResponse {
    return {
        id,
        title: name,
        level: nqrLevel,
        profession,
    };
}

app.get('/api/qualifications', async (_req: Request, res: Response): Promise<void> => {
    try {
        const data = await getProfessionalQualificationClient().findMany({ include: { profession: true } });
        res.json(data.map(mapProfessionalQualification));
    } catch (err) {
        console.error('Failed to get qualifications', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Example: Manager-only route for creating qualifications
app.post('/api/qualifications', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const { title, level, professionId } = req.body as {
        title?: unknown;
        level?: unknown;
        professionId?: unknown;
    };

    if (typeof title !== 'string' || !title.trim()) {
        res.status(400).json({ error: 'title is required' });
        return;
    }
    if (typeof level !== 'number' || !Number.isInteger(level)) {
        res.status(400).json({ error: 'level must be an integer' });
        return;
    }
    if (typeof professionId !== 'number' || !Number.isInteger(professionId)) {
        res.status(400).json({ error: 'professionId must be an integer' });
        return;
    }

    try {
        const qualification = await getProfessionalQualificationClient().create({
            data: { name: title, nqrLevel: level, professionId },
            include: { profession: true },
        });
        res.status(201).json(mapProfessionalQualification(qualification));
    } catch (err) {
        console.error('Failed to create qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/api/qualifications/:id', requireManager(), async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    try {
        await prisma.$transaction([
            prisma.qualificationCenterExpertise.deleteMany({ where: { professionalQualificationId: id } }),
            prisma.qualificationCenterAccreditation.deleteMany({ where: { professionalQualificationId: id } }),
            prisma.professional.deleteMany({ where: { professionalQualificationId: id } }),
            prisma.accreditationExpert.deleteMany({ where: { professionalQualificationId: id } }),
            getProfessionalQualificationClient().delete({ where: { id } }),
        ]);
        res.sendStatus(204);
    } catch (err) {
        console.error('Failed to delete qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ─────────────────────────────────────────────────────
// Legacy endpoints (kept for backward compatibility)
// Note: New CRUD routes above handle these entities with pagination and proper auth

// ─────────────────────────────────────────────────────
// Serve Vue build  📦

// helper: resolve ../../frontend/dist irrespective of build path
function resolveClientPath(): string {
    // __dirname is backend/src in dev, backend/dist in prod
    // go two levels up to repo root, then frontend/dist
    // Using our ESM-compatible __dirname (defined at module level) instead of Prisma's global polyfill
    return path.resolve(__dirname, '../../frontend/dist');
}

const clientPath = resolveClientPath();

if (fs.existsSync(path.join(clientPath, 'index.html'))) {
    // static files (js,css,imgs)
    app.use(express.static(clientPath));

    // SPA fallback  – anything not starting with /api  → index.html
    app.get(/^\/(?!api).*/, (_req: Request, res: Response) =>
        res.sendFile(path.join(clientPath, 'index.html'))
    );

    console.log('✅  Vue build found and will be served from', clientPath);
} else {
    console.log('⚠️  No Vue build found at', clientPath, '(run `npm run build` in /frontend)');
}

// ─────────────────────────────────────────────────────
// Export app for testing
export { app };

// Only start server if not in test mode
if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`🚀 NQF Register backend listening on http://localhost:${PORT}`);
    });
    console.log('DATABASE_URL at runtime:', process.env.DATABASE_URL);
}

