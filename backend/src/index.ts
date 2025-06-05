import express, { Request, Response } from 'express';
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
