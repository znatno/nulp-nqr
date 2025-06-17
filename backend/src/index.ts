import express, { Request, Response } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';

// Cast to any because the generated Prisma client in this example may not
// include the extended models used below.
const prisma = new PrismaClient() as any;
const app = express();

// ─────────────────────────────────────────────────────
// Middleware
app.use(cors());
app.use(express.json());

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

// ─────────────────────────────────────────────────────
// ProfessionalQualification CRUD endpoints

// Retrieve all professional qualifications
app.get('/api/professional-qualifications', async (_req: Request, res: Response) => {
    try {
        const data = await prisma.professionalQualification.findMany({ include: { profession: true } });
        res.json(data);
    } catch (err) {
        console.error('Failed to get professional qualifications', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create a professional qualification
app.post('/api/professional-qualifications', async (req: Request, res: Response) => {
    const { name, nkrLevel, professionId } = req.body as {
        name?: unknown;
        nkrLevel?: unknown;
        professionId?: unknown;
    };

    if (typeof name !== 'string' || !name.trim()) {
        res.status(400).json({ error: 'Name is required' });
        return;
    }
    if (typeof nkrLevel !== 'number' || !Number.isInteger(nkrLevel)) {
        res.status(400).json({ error: 'nkrLevel must be an integer' });
        return;
    }
    if (typeof professionId !== 'number' || !Number.isInteger(professionId)) {
        res.status(400).json({ error: 'professionId must be an integer' });
        return;
    }

    try {
        const qualification = await prisma.professionalQualification.create({
            data: { name, nkrLevel, professionId },
        });
        res.status(201).json(qualification);
    } catch (err) {
        console.error('Failed to create professional qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a professional qualification
app.put('/api/professional-qualifications/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    const { name, nkrLevel, professionId } = req.body as {
        name?: unknown;
        nkrLevel?: unknown;
        professionId?: unknown;
    };

    if (name !== undefined && (typeof name !== 'string' || !name.trim())) {
        res.status(400).json({ error: 'Name must be a non-empty string' });
        return;
    }
    if (nkrLevel !== undefined && (typeof nkrLevel !== 'number' || !Number.isInteger(nkrLevel))) {
        res.status(400).json({ error: 'nkrLevel must be an integer' });
        return;
    }
    if (professionId !== undefined && (typeof professionId !== 'number' || !Number.isInteger(professionId))) {
        res.status(400).json({ error: 'professionId must be an integer' });
        return;
    }

    try {
        const qualification = await prisma.professionalQualification.update({
            where: { id },
            data: {
                ...(name !== undefined ? { name } : {}),
                ...(nkrLevel !== undefined ? { nkrLevel } : {}),
                ...(professionId !== undefined ? { professionId } : {}),
            },
        });
        res.json(qualification);
    } catch (err) {
        console.error('Failed to update professional qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete a professional qualification
app.delete('/api/professional-qualifications/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    try {
        await prisma.professionalQualification.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err) {
        console.error('Failed to delete professional qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ─────────────────────────────────────────────────────
// QualificationCenter CRUD endpoints

// Retrieve all qualification centers
app.get('/api/qualification-centers', async (_req: Request, res: Response) => {
    try {
        const data = await prisma.qualificationCenter.findMany();
        res.json(data);
    } catch (err) {
        console.error('Failed to get qualification centers', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create a qualification center
app.post('/api/qualification-centers', async (req: Request, res: Response) => {
    const { name, edrpou, address } = req.body as {
        name?: unknown;
        edrpou?: unknown;
        address?: unknown;
    };

    if (typeof name !== 'string' || !name.trim()) {
        res.status(400).json({ error: 'Name is required' });
        return;
    }
    if (typeof edrpou !== 'string' || !edrpou.trim()) {
        res.status(400).json({ error: 'edrpou is required' });
        return;
    }
    if (typeof address !== 'string' || !address.trim()) {
        res.status(400).json({ error: 'address is required' });
        return;
    }

    try {
        const center = await prisma.qualificationCenter.create({
            data: { name, edrpou, address },
        });
        res.status(201).json(center);
    } catch (err) {
        console.error('Failed to create qualification center', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a qualification center
app.put('/api/qualification-centers/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    const { name, edrpou, address } = req.body as {
        name?: unknown;
        edrpou?: unknown;
        address?: unknown;
    };

    if (name !== undefined && (typeof name !== 'string' || !name.trim())) {
        res.status(400).json({ error: 'Name must be a non-empty string' });
        return;
    }
    if (edrpou !== undefined && (typeof edrpou !== 'string' || !edrpou.trim())) {
        res.status(400).json({ error: 'edrpou must be a non-empty string' });
        return;
    }
    if (address !== undefined && (typeof address !== 'string' || !address.trim())) {
        res.status(400).json({ error: 'address must be a non-empty string' });
        return;
    }

    try {
        const center = await prisma.qualificationCenter.update({
            where: { id },
            data: {
                ...(name !== undefined ? { name } : {}),
                ...(edrpou !== undefined ? { edrpou } : {}),
                ...(address !== undefined ? { address } : {}),
            },
        });
        res.json(center);
    } catch (err) {
        console.error('Failed to update qualification center', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete a qualification center
app.delete('/api/qualification-centers/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    try {
        await prisma.qualificationCenter.delete({ where: { id } });
        res.sendStatus(204);
    } catch (err) {
        console.error('Failed to delete qualification center', err);
        res.status(500).json({ error: 'Internal server error' });
    }
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
