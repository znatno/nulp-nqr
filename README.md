# NQR Register (Національний реєстр кваліфікацій)

Full-stack application for the National Qualifications Register (NQR). The system manages professional qualifications, accreditation centers, examinations, and related entities with role-based access control.

**Tech Stack:**
- **Backend:** Node.js + Express + TypeScript + Prisma + PostgreSQL
- **Frontend:** Vue 3 + TypeScript + Vite + Tailwind CSS

---

## Prerequisites

- **Node.js** 18+ (check with `node --version`)
- **npm** (comes with Node.js) or **yarn** / **pnpm**
- **PostgreSQL** 14+ (for local development)
- **Git**

---

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd nulp-nqr
```

### 2. Install dependencies

Install dependencies for both backend and frontend:

```bash
# Backend
cd backend
npm install
cd ..

# Frontend
cd frontend
npm install
cd ..
```

### 3. Configure environment variables

#### Backend

Create a `.env` file in the `backend/` directory:

```bash
cd backend
cp .env.example .env  # if .env.example exists, or create manually
```

Add the following variables:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
JWT_SECRET="your-secret-key-here"
PORT=4000
```

**Required:**
- `DATABASE_URL` - PostgreSQL connection string (format: `postgresql://user:password@localhost:5432/nulp_nqr`)

**Optional:**
- `JWT_SECRET` - Secret key for JWT tokens (defaults to insecure value if not set)
- `PORT` - Backend server port (defaults to 4000)
- `NODE_ENV` - Set to `production` or `test` as needed

#### Frontend

Create a `.env` file in the `frontend/` directory (optional for local development):

```bash
cd frontend
cp .env.example .env  # if needed
```

The frontend uses Vite's proxy by default (configured to `http://localhost:4000`). If your backend runs on a different host, set:

```env
VITE_API_BASE_URL=http://localhost:4000
```

---

## Database

### 1. Create the database

**macOS (Homebrew):**
```bash
brew services start postgresql@14
createdb -U postgres nulp_nqr
```

**Linux:**
```bash
sudo service postgresql start
createdb -U postgres nulp_nqr
```

**Windows:**
Use pgAdmin or psql to create a database named `nulp_nqr`.

### 2. Run migrations

From the `backend/` directory:

```bash
cd backend
npm run migrate
# or: npx prisma migrate dev
```

This will:
- Apply all pending migrations
- Generate the Prisma client automatically

### 3. Seed the database (optional)

```bash
npm run prisma:seed
# or: npx tsx prisma/seed.ts
```

---

## Running the project (development)

### Backend

From the `backend/` directory:

```bash
cd backend
npm run dev
```

The backend will start on `http://localhost:4000` (or the port specified in `PORT` env var).

**Available scripts:**
- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run migrate` - Run database migrations
- `npm run prisma:seed` - Seed the database
- `npm run prisma:studio` - Open Prisma Studio (database GUI)
- `npm test` - Run tests

### Frontend

From the `frontend/` directory:

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173` (Vite default port) and proxy API requests to the backend.

**Available scripts:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Running both (separate terminals)

1. Terminal 1: `cd backend && npm run dev`
2. Terminal 2: `cd frontend && npm run dev`

Then open `http://localhost:5173` in your browser.

---

## Running tests

### Backend tests

From the `backend/` directory:

```bash
npm test
npm run test:watch  # Watch mode
```

---

## Build (production)

### Backend

```bash
cd backend
npm run build
npm start
```

### Frontend

```bash
cd frontend
npm run build
```

The production build will be in `frontend/dist/`.

---

## Project structure

```
nulp-nqr/
├── backend/
│   ├── src/              # TypeScript source code
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Auth & other middleware
│   │   ├── services/     # Business logic
│   │   └── auth/         # Authentication utilities
│   ├── prisma/
│   │   ├── schema.prisma # Database schema
│   │   ├── migrations/   # Database migrations
│   │   └── seed.ts       # Database seed script
│   ├── dist/             # Compiled JavaScript (generated)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/        # Vue page components
│   │   ├── components/   # Reusable components
│   │   ├── router/       # Vue Router config
│   │   ├── services/     # API client
│   │   └── composables/  # Vue composables
│   └── package.json
└── README.md
```

---

## Documentation

- [Backend README](backend/README.md) - Backend-specific setup and database configuration
- [Frontend README](frontend/README.md) - Frontend-specific configuration
- [Permissions Documentation](docs/permissions.md) - Role-based access control details

---

## Troubleshooting

### Prisma client not generated

If you see errors about missing Prisma client:

```bash
cd backend
npm run generate
# or: npx prisma generate
```

### Database connection errors

1. Verify PostgreSQL is running: `pg_isready` or check service status
2. Check `DATABASE_URL` in `backend/.env` matches your database credentials
3. Ensure the database exists: `psql -l` to list databases
4. Test connection: `psql "$DATABASE_URL"`

### Port already in use

If port 4000 (backend) or 5173 (frontend) is already in use:
- Backend: Set `PORT` in `backend/.env` to a different port
- Frontend: Vite will automatically use the next available port

---

## License

ISC
