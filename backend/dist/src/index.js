import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '../prisma/generated/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
// ESM-compatible __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
function getProfessionalQualificationClient() {
    const client = prisma.professionalQualification;
    if (!client?.findMany) {
        throw new Error('Prisma client is missing the `professionalQualification` model. Run `npx prisma generate` to regenerate the client.');
    }
    return client;
}
const app = express();
// ─────────────────────────────────────────────────────
// Middleware
app.use(cors());
app.use(express.json());
// Validate request body for creating/updating a person
function validatePerson(req, res, next) {
    const { fullName, qualificationCenterId, professionalQualificationId, dateReceived } = req.body;
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
    if (!dateReceived || isNaN(Date.parse(dateReceived))) {
        res.status(400).json({ error: 'dateReceived must be a valid date' });
        return;
    }
    next();
}
function mapProfessionalQualification({ id, name, nkrLevel, profession, }) {
    return {
        id,
        title: name,
        level: nkrLevel,
        profession,
    };
}
app.get('/api/qualifications', async (_req, res) => {
    try {
        const data = await getProfessionalQualificationClient().findMany({ include: { profession: true } });
        res.json(data.map(mapProfessionalQualification));
    }
    catch (err) {
        console.error('Failed to get qualifications', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post('/api/qualifications', async (req, res) => {
    const { title, level, professionId } = req.body;
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
            data: { name: title, nkrLevel: level, professionId },
            include: { profession: true },
        });
        res.status(201).json(mapProfessionalQualification(qualification));
    }
    catch (err) {
        console.error('Failed to create qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.delete('/api/qualifications/:id', async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    try {
        await prisma.$transaction([
            prisma.examination.deleteMany({ where: { professionalQualificationId: id } }),
            prisma.accreditation.deleteMany({ where: { professionalQualificationId: id } }),
            prisma.person.deleteMany({ where: { professionalQualificationId: id } }),
            prisma.expert.deleteMany({ where: { professionalQualificationId: id } }),
            getProfessionalQualificationClient().delete({ where: { id } }),
        ]);
        res.sendStatus(204);
    }
    catch (err) {
        console.error('Failed to delete qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// ──────────────── Person CRUD ────────────────────────
app.get('/api/persons', async (_req, res) => {
    const data = await prisma.person.findMany({
        include: { qualificationCenter: true, professionalQualification: true }
    });
    res.json(data);
});
app.get('/api/persons/:id', async (req, res) => {
    const person = await prisma.person.findUnique({
        where: { id: Number(req.params.id) },
        include: { qualificationCenter: true, professionalQualification: true }
    });
    if (!person) {
        res.sendStatus(404);
        return;
    }
    res.json(person);
});
app.post('/api/persons', validatePerson, async (req, res) => {
    const person = await prisma.person.create({ data: {
            fullName: req.body.fullName,
            qualificationCenterId: req.body.qualificationCenterId,
            professionalQualificationId: req.body.professionalQualificationId,
            dateReceived: new Date(req.body.dateReceived)
        } });
    res.status(201).json(person);
});
app.put('/api/persons/:id', validatePerson, async (req, res) => {
    const person = await prisma.person.update({
        where: { id: Number(req.params.id) },
        data: {
            fullName: req.body.fullName,
            qualificationCenterId: req.body.qualificationCenterId,
            professionalQualificationId: req.body.professionalQualificationId,
            dateReceived: new Date(req.body.dateReceived)
        }
    });
    res.json(person);
});
app.delete('/api/persons/:id', async (req, res) => {
    await prisma.person.delete({ where: { id: Number(req.params.id) } });
    res.sendStatus(204);
});
// ─────────────────────────────────────────────────────
// ProfessionalQualification CRUD endpoints
// Retrieve all professional qualifications
app.get('/api/professional-qualifications', async (_req, res) => {
    try {
        const data = await getProfessionalQualificationClient().findMany({ include: { profession: true } });
        res.json(data);
    }
    catch (err) {
        console.error('Failed to get professional qualifications', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Create a professional qualification
app.post('/api/professional-qualifications', async (req, res) => {
    const { name, nkrLevel, professionId } = req.body;
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
        const qualification = await getProfessionalQualificationClient().create({
            data: { name, nkrLevel, professionId },
        });
        res.status(201).json(qualification);
    }
    catch (err) {
        console.error('Failed to create professional qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Update a professional qualification
app.put('/api/professional-qualifications/:id', async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    const { name, nkrLevel, professionId } = req.body;
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
        const qualification = await getProfessionalQualificationClient().update({
            where: { id },
            data: {
                ...(name !== undefined ? { name } : {}),
                ...(nkrLevel !== undefined ? { nkrLevel } : {}),
                ...(professionId !== undefined ? { professionId } : {}),
            },
        });
        res.json(qualification);
    }
    catch (err) {
        console.error('Failed to update professional qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Delete a professional qualification
app.delete('/api/professional-qualifications/:id', async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    try {
        await getProfessionalQualificationClient().delete({ where: { id } });
        res.sendStatus(204);
    }
    catch (err) {
        console.error('Failed to delete professional qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// ─────────────────────────────────────────────────────
// QualificationCenter CRUD endpoints
// Retrieve all qualification centers
app.get('/api/qualification-centers', async (_req, res) => {
    try {
        const data = await prisma.qualificationCenter.findMany();
        res.json(data);
    }
    catch (err) {
        console.error('Failed to get qualification centers', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Create a qualification center
app.post('/api/qualification-centers', async (req, res) => {
    const { name, edrpou, address } = req.body;
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
    }
    catch (err) {
        console.error('Failed to create qualification center', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Update a qualification center
app.put('/api/qualification-centers/:id', async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    const { name, edrpou, address } = req.body;
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
    }
    catch (err) {
        console.error('Failed to update qualification center', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Delete a qualification center
app.delete('/api/qualification-centers/:id', async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    try {
        await prisma.qualificationCenter.delete({ where: { id } });
        res.sendStatus(204);
    }
    catch (err) {
        console.error('Failed to delete qualification center', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// ─────────────────────────────────────────────────────
// Serve Vue build  📦
// helper: resolve ../../frontend/dist irrespective of build path
function resolveClientPath() {
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
    app.get(/^\/(?!api).*/, (_req, res) => res.sendFile(path.join(clientPath, 'index.html')));
    console.log('✅  Vue build found and will be served from', clientPath);
}
else {
    console.log('⚠️  No Vue build found at', clientPath, '(run `npm run build` in /frontend)');
}
// ─────────────────────────────────────────────────────
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`👉  http://localhost:${PORT}`));
// DEBUG
console.log('DATABASE_URL at runtime:', process.env.DATABASE_URL);
