Project development guidelines for nulp-nqf-register

Scope: These notes capture project-specific setup, build, and testing practices for both backend (Express + Prisma + PostgreSQL) and frontend (Vue 3 + Vite). They intentionally avoid generic advice.

1) Build and configuration

Backend (Node/Express + Prisma)
- Runtime: Node 18+ recommended. TypeScript is compiled to CommonJS (see backend/package.json: "type": "commonjs").
- Env & DB:
  - Required env: DATABASE_URL in backend/.env (PostgreSQL). Example:
    DATABASE_URL="postgresql://postgres:password@localhost:5432/nulp_nqf_register"
  - Optional: PORT (default 4000). App serves REST API on http://localhost:4000 and will also serve the built frontend from frontend/dist if present.
- Install & generate Prisma client:
  cd backend
  npm ci   # or: npm install
  npx prisma generate
- DB migrations (development flow):
  - Edit backend/prisma/schema.prisma
  - Run: npm run prisma:migrate   # creates a new dev migration and applies it
  - Inspect/manage data: npm run prisma:studio
- Build & run:
  - Dev (TS, auto-reload): npm run dev
  - Production build: npm run build; then start: npm start
  - The server tries to serve the SPA from ../../frontend/dist when it exists. If missing, it logs a warning: run a frontend build.

Frontend (Vue 3 + Vite + TS)
- Install deps:
  cd frontend
  npm ci   # or: npm install
- Dev server:
  npm run dev
  - Vite proxy forwards /api → http://localhost:4000 (see frontend/vite.config.ts). No extra CORS config needed in dev.
- Build for production:
  npm run build
  - Output goes to frontend/dist. When this exists, the backend (in either dev or prod) will serve static assets and provide an SPA fallback for non-/api routes.

Cross-cutting
- Local run order (dev):
  1) Ensure PostgreSQL is running and DATABASE_URL points to a reachable DB.
  2) In backend: npm ci && npx prisma generate && npm run prisma:migrate && npm run dev
  3) In frontend: npm ci && npm run dev
- Local run order (single binary-style run):
  1) Build frontend: (cd frontend && npm ci && npm run build)
  2) Build backend: (cd backend && npm ci && npx prisma generate && npm run build)
  3) Start backend: (cd backend && npm start)  # serves API and the built frontend

2) Testing information

There is no dedicated test framework configured in this repo at the moment. For quick verifications and for documenting expected behavior, use curl-based smoke tests against a running backend. This keeps dependencies minimal and works well with the current REST surface.

A) Prerequisites for running tests
- PostgreSQL available and DATABASE_URL set.
- Migrations applied (npm run prisma:migrate) so tables exist.
- Backend running: either npm run dev or npm start (default port 4000, configurable by PORT).

B) Smoke tests (manual, dependency-free)
Run each command in a separate terminal while the backend is running.

1. Qualification Centers CRUD basics
- Create center:
  curl -sS -X POST http://localhost:4000/api/qualification-centers \
    -H 'Content-Type: application/json' \
    -d '{"name":"Center A","edrpou":"12345678","address":"Somewhere 1"}'
- List centers:
  curl -sS http://localhost:4000/api/qualification-centers
- Update center (replace :id):
  curl -sS -X PUT http://localhost:4000/api/qualification-centers/1 \
    -H 'Content-Type: application/json' \
    -d '{"address":"Updated Addr"}'
- Delete center:
  curl -sS -X DELETE http://localhost:4000/api/qualification-centers/1 -i

2. Professional Qualifications CRUD basics
- Create qualification (ensure a Profession with id=1 exists in DB or adjust):
  curl -sS -X POST http://localhost:4000/api/professional-qualifications \
    -H 'Content-Type: application/json' \
    -d '{"name":"Welding basics","nkrLevel":3,"professionId":1}'
- List qualifications:
  curl -sS http://localhost:4000/api/professional-qualifications
- Update (replace :id):
  curl -sS -X PUT http://localhost:4000/api/professional-qualifications/1 \
    -H 'Content-Type: application/json' \
    -d '{"nkrLevel":4}'
- Delete:
  curl -sS -X DELETE http://localhost:4000/api/professional-qualifications/1 -i

3. Persons CRUD basics
Prereq: at least one QualificationCenter and one ProfessionalQualification exist. Replace IDs accordingly.
- Create person:
  curl -sS -X POST http://localhost:4000/api/persons \
    -H 'Content-Type: application/json' \
    -d '{
      "fullName":"John Doe",
      "qualificationCenterId":1,
      "professionalQualificationId":1,
      "certificateNumber":"CERT-001",
      "dateReceived":"2024-01-01"
    }'
- List persons:
  curl -sS http://localhost:4000/api/persons
- Get by id:
  curl -sS http://localhost:4000/api/persons/1
- Update:
  curl -sS -X PUT http://localhost:4000/api/persons/1 \
    -H 'Content-Type: application/json' \
    -d '{"fullName":"John A. Doe","qualificationCenterId":1,"professionalQualificationId":1,"certificateNumber":"CERT-001","dateReceived":"2024-01-15"}'
- Delete:
  curl -sS -X DELETE http://localhost:4000/api/persons/1 -i

Notes on data integrity and prerequisites
- The Prisma schema (backend/prisma/schema.prisma) defines foreign keys; for example, ProfessionalQualification requires a valid Profession.id, and Person requires valid QualificationCenter.id and ProfessionalQualification.id. Seed or insert those parents before children in tests.

C) How to add automated tests later (recommendation)
- Backend: add Vitest + supertest without changing runtime code:
  - npm i -D vitest supertest @types/supertest tsx
  - Add a script to backend/package.json: "test": "vitest run" and "test:watch": "vitest"
  - Example test (backend/tests/persons.test.ts):
    import { afterAll, beforeAll, describe, expect, it } from 'vitest'
    import supertest from 'supertest'
    import { createServer } from 'http'
    import app from '../src/index' // if the file exports app; otherwise refactor index.ts to export app and start in a separate bootstrap file

    describe('GET /api/persons', () => {
      it('returns 200', async () => {
        const server = createServer(app)
        const request = supertest(server)
        const res = await request.get('/api/persons')
        expect(res.status).toBe(200)
      })
    })
  - To enable this with minimal runtime impact: adjust backend/src/index.ts to export the Express app and move app.listen(...) to a small bin/start.ts used only in production. Do not make this change unless you proceed to set up tests.
- Frontend: add Vitest + @vue/test-utils later if needed; no current requirement.

D) Verifying these examples
- The curl sequences above have been written against the actual route signatures in backend/src/index.ts and align with the validation rules there (required fields, types, date formats). Ensure parent rows exist to satisfy foreign keys before running dependent operations.

3) Additional development information

Prisma & data workflow
- When changing schema.prisma, always run: npm run prisma:migrate, then npm run prisma:studio to sanity-check relations.
- Consider creating a lightweight SQL or Prisma seed script for local development that inserts a Developer, a Profession (linked to that Developer), a QualificationCenter, and a ProfessionalQualification. This will greatly simplify manual testing of Person creation.

Backend API design notes
- Persons, ProfessionalQualifications, and QualificationCenters expose standard CRUD under /api/*.
- Validation: index.ts includes explicit checks for types/required fields and uses 400 responses for validation failures. Dates must be ISO-8601 parseable.
- PORT is respected; Vite dev proxy targets http://localhost:4000 by default, so keep PORT in sync or update frontend/vite.config.ts accordingly.

Frontend integration
- Axios is configured with baseURL '/api' (frontend/src/services/api.ts). In dev, Vite server proxies '/api' to the backend; in production, the backend serves the built frontend and shares origin with the API.

Coding style & TS
- The codebase uses TypeScript on both sides but does not enforce linting rules in the repo. Prefer strict typing in new modules and extend existing any casts cautiously.
- Backend compiled target is dist/ with CommonJS output. Avoid ESM-only runtime features in backend unless you revise the tsconfig and package.json accordingly.

Operational notes
- run.sh shows a rough start sequence and references Homebrew-managed PostgreSQL 14 on macOS. Adapt as needed for Linux/Windows.
- If you change the DB name/credentials, reflect them in backend/.env and re-run migrations.

Troubleshooting quick tips
- 500 errors on CRUD usually indicate a missing parent row violating a foreign key; check the tables in Prisma Studio.
- If frontend calls fail in dev with CORS, verify Vite proxy (frontend/vite.config.ts) is intact and the backend is reachable on PORT.
- If the backend logs "No Vue build found", you’re running in a scenario where it expects frontend/dist; either ignore (during dev) or run a frontend build for production-like runs.
