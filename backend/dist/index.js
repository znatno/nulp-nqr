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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const prisma = new client_1.PrismaClient();
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
// ─────────────────────────────────────────────────────
// REST endpoints
app.get('/api/qualifications', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma.qualification.findMany({ include: { profession: true } });
    res.json(data);
}));
app.post('/api/qualifications', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, level, professionId } = req.body;
    const q = yield prisma.qualification.create({ data: { title, level, professionId } });
    res.status(201).json(q);
}));
app.delete('/api/qualifications/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.qualification.delete({ where: { id: Number(req.params.id) } });
    res.sendStatus(204);
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
