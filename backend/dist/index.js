"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const prisma = new client_1.PrismaClient();
function getProfessionalQualificationClient() {
    const client = prisma.professionalQualification;
    if (!(client === null || client === void 0 ? void 0 : client.findMany)) {
        throw new Error('Prisma client is missing the `professionalQualification` model. Run `npx prisma generate` to regenerate the client.');
    }
    return client;
}
const app = (0, express_1.default)();
// ─────────────────────────────────────────────────────
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Validate request body for creating/updating a person
function validatePerson(req, res, next) {
    const { fullName, qualificationCenterId, professionalQualificationId, certificateNumber, dateReceived } = req.body;
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
function mapProfessionalQualification({ id, name, nkrLevel, profession, }) {
    return {
        id,
        title: name,
        level: nkrLevel,
        profession,
    };
}
app.get('/api/qualifications', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getProfessionalQualificationClient().findMany({ include: { profession: true } });
        res.json(data.map(mapProfessionalQualification));
    }
    catch (err) {
        console.error('Failed to get qualifications', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.post('/api/qualifications', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const qualification = yield getProfessionalQualificationClient().create({
            data: { name: title, nkrLevel: level, professionId },
            include: { profession: true },
        });
        res.status(201).json(mapProfessionalQualification(qualification));
    }
    catch (err) {
        console.error('Failed to create qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.delete('/api/qualifications/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    try {
        yield getProfessionalQualificationClient().delete({ where: { id } });
        res.sendStatus(204);
    }
    catch (err) {
        console.error('Failed to delete qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// ──────────────── Person CRUD ────────────────────────
app.get('/api/persons', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma.person.findMany({
        include: { qualificationCenter: true, professionalQualification: true }
    });
    res.json(data);
}));
app.get('/api/persons/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const person = yield prisma.person.findUnique({
        where: { id: Number(req.params.id) },
        include: { qualificationCenter: true, professionalQualification: true }
    });
    if (!person) {
        res.sendStatus(404);
        return;
    }
    res.json(person);
}));
app.post('/api/persons', validatePerson, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const person = yield prisma.person.create({ data: {
            fullName: req.body.fullName,
            qualificationCenterId: req.body.qualificationCenterId,
            professionalQualificationId: req.body.professionalQualificationId,
            certificateNumber: req.body.certificateNumber,
            dateReceived: new Date(req.body.dateReceived)
        } });
    res.status(201).json(person);
}));
app.put('/api/persons/:id', validatePerson, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const person = yield prisma.person.update({
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
}));
app.delete('/api/persons/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.person.delete({ where: { id: Number(req.params.id) } });
    res.sendStatus(204);
}));
// ─────────────────────────────────────────────────────
// ProfessionalQualification CRUD endpoints
// Retrieve all professional qualifications
app.get('/api/professional-qualifications', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getProfessionalQualificationClient().findMany({ include: { profession: true } });
        res.json(data);
    }
    catch (err) {
        console.error('Failed to get professional qualifications', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Create a professional qualification
app.post('/api/professional-qualifications', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const qualification = yield getProfessionalQualificationClient().create({
            data: { name, nkrLevel, professionId },
        });
        res.status(201).json(qualification);
    }
    catch (err) {
        console.error('Failed to create professional qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Update a professional qualification
app.put('/api/professional-qualifications/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const qualification = yield getProfessionalQualificationClient().update({
            where: { id },
            data: Object.assign(Object.assign(Object.assign({}, (name !== undefined ? { name } : {})), (nkrLevel !== undefined ? { nkrLevel } : {})), (professionId !== undefined ? { professionId } : {})),
        });
        res.json(qualification);
    }
    catch (err) {
        console.error('Failed to update professional qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Delete a professional qualification
app.delete('/api/professional-qualifications/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    try {
        yield getProfessionalQualificationClient().delete({ where: { id } });
        res.sendStatus(204);
    }
    catch (err) {
        console.error('Failed to delete professional qualification', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// ─────────────────────────────────────────────────────
// QualificationCenter CRUD endpoints
// Retrieve all qualification centers
app.get('/api/qualification-centers', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.qualificationCenter.findMany();
        res.json(data);
    }
    catch (err) {
        console.error('Failed to get qualification centers', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Create a qualification center
app.post('/api/qualification-centers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const center = yield prisma.qualificationCenter.create({
            data: { name, edrpou, address },
        });
        res.status(201).json(center);
    }
    catch (err) {
        console.error('Failed to create qualification center', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Update a qualification center
app.put('/api/qualification-centers/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const center = yield prisma.qualificationCenter.update({
            where: { id },
            data: Object.assign(Object.assign(Object.assign({}, (name !== undefined ? { name } : {})), (edrpou !== undefined ? { edrpou } : {})), (address !== undefined ? { address } : {})),
        });
        res.json(center);
    }
    catch (err) {
        console.error('Failed to update qualification center', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Delete a qualification center
app.delete('/api/qualification-centers/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    try {
        yield prisma.qualificationCenter.delete({ where: { id } });
        res.sendStatus(204);
    }
    catch (err) {
        console.error('Failed to delete qualification center', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// ─────────────────────────────────────────────────────
// Serve Vue build  📦
// helper: resolve ../../frontend/dist irrespective of build path
function resolveClientPath() {
    // __dirname is backend/src in dev, backend/dist in prod
    // go two levels up to repo root, then frontend/dist
    return path_1.default.resolve(__dirname, '../../frontend/dist');
}
const clientPath = resolveClientPath();
if (fs_1.default.existsSync(path_1.default.join(clientPath, 'index.html'))) {
    // static files (js,css,imgs)
    app.use(express_1.default.static(clientPath));
    // SPA fallback  – anything not starting with /api  → index.html
    app.get(/^\/(?!api).*/, (_req, res) => res.sendFile(path_1.default.join(clientPath, 'index.html')));
    console.log('✅  Vue build found and will be served from', clientPath);
}
else {
    console.log('⚠️  No Vue build found at', clientPath, '(run `npm run build` in /frontend)');
}
// ─────────────────────────────────────────────────────
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`👉  http://localhost:${PORT}`));
