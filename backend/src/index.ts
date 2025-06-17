import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient();
const app = express();

// ─────────────────────────────────────────────────────
// Middleware
app.use(cors());
app.use(express.json());

// Validate request body for creating/updating a person
function validatePerson(req: Request, res: Response, next: NextFunction): void {
    const {
        fullName,
        qualificationCenterId,
        professionalQualificationId,
        certificateNumber,
        dateReceived
    } = req.body;

    if (typeof fullName !== 'string' || !fullName.trim()) {
        res.status(400).json({ error: 'fullName is required' });
        return;
    }
    if (typeof qualificationCenterId !== 'number') {
        res.status(400).json({ error: 'qualificationCenterId must be a number' });
        return;
    }
    if (typeof professionalQualificationId !== 'number') {
        res.status(400).json({ error: 'professionalQualificationId must be a number' });
        return;
    }
    if (typeof certificateNumber !== 'string' || !certificateNumber.trim()) {
        res.status(400).json({ error: 'certificateNumber is required' });
        return;
    }
    if (!dateReceived || isNaN(Date.parse(dateReceived))) {
        res.status(400).json({ error: 'dateReceived must be a valid date' });
        return;
    }

    next();
}

// ─────────────────────────────────────────────────────
// REST endpoints
app.get('/api/qualifications', async (_req: Request, res: Response) => {
    const data = await prisma.qualification.findMany({ include: { profession: true } });
    res.json(data);
});

app.post('/api/qualifications', async (req: Request, res: Response) => {
    const { title, level, professionId } = req.body;
    const q = await prisma.qualification.create({ data: { title, level, professionId } });
    res.status(201).json(q);
});

app.delete('/api/qualifications/:id', async (req: Request, res: Response) => {
    await prisma.qualification.delete({ where: { id: Number(req.params.id) } });
    res.sendStatus(204);
});

// ──────────────── Person CRUD ────────────────────────
app.get('/api/persons', async (_req: Request, res: Response): Promise<void> => {
    const data = await (prisma as any).person.findMany({
        include: { qualificationCenter: true, professionalQualification: true }
    });
    res.json(data);
});

app.get('/api/persons/:id', async (req: Request, res: Response): Promise<void> => {
    const person = await (prisma as any).person.findUnique({
        where: { id: Number(req.params.id) },
        include: { qualificationCenter: true, professionalQualification: true }
    });
    if (!person) {
        res.sendStatus(404);
        return;
    }
    res.json(person);
});

app.post('/api/persons', validatePerson, async (req: Request, res: Response): Promise<void> => {
    const person = await (prisma as any).person.create({ data: {
        fullName: req.body.fullName,
        qualificationCenterId: req.body.qualificationCenterId,
        professionalQualificationId: req.body.professionalQualificationId,
        certificateNumber: req.body.certificateNumber,
        dateReceived: new Date(req.body.dateReceived)
    } });
    res.status(201).json(person);
});

app.put('/api/persons/:id', validatePerson, async (req: Request, res: Response): Promise<void> => {
    const person = await (prisma as any).person.update({
        where: { id: Number(req.params.id) },
        data: {
            fullName: req.body.fullName,
            qualificationCenterId: req.body.qualificationCenterId,
            professionalQualificationId: req.body.professionalQualificationId,
            certificateNumber: req.body.certificateNumber,
            dateReceived: new Date(req.body.dateReceived)
        }
    });
    res.json(person);
});

app.delete('/api/persons/:id', async (req: Request, res: Response): Promise<void> => {
    await (prisma as any).person.delete({ where: { id: Number(req.params.id) } });
    res.sendStatus(204);
});

// ─────────────────────────────────────────────────────
// Serve Vue build  📦

// helper: resolve ../../frontend/dist irrespective of build path
function resolveClientPath(): string {
    // __dirname is backend/src in dev, backend/dist in prod
    // go two levels up to repo root, then frontend/dist
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
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`👉  http://localhost:${PORT}`));
