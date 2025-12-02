# Manager CRUD Testing Guide

## Overview
This document describes how to test the generalized CRUD pattern for all manager-visible tables in the system.

## Prerequisites

### Start Development Servers

**Backend:**
```bash
cd backend
npm run dev
# Server should start on http://localhost:4000
```

**Frontend (if running separately):**
```bash
cd frontend
npm run dev
# Frontend dev server (if not using backend's static file serving)
```

Or use the combined script:
```bash
./run.sh
```

## Test User Credentials

From `backend/prisma/seed.ts`, use the manager account:
- **Email:** `manager@nqr.test`
- **Password:** `Password123!`

## Testing Steps

### 1. Login as Manager

1. Navigate to `/login`
2. Enter manager credentials:
   - Email: `manager@nqr.test`
   - Password: `Password123!`
3. You should be redirected to `/manager` (manager dashboard)

### 2. Navigate to Manager Pages

All manager pages are accessible from the sidebar navigation under "Управління даними":

#### Available Manager Pages:

1. **Розробники** (`/manager/developers`)
   - View, create, edit, delete developers
   - Search by name or EDRPOU
   - Fields: Name, EDRPOU

2. **Професії** (`/manager/professions`)
   - View, create, edit, delete professions
   - Search by name or code
   - Fields: Name, Code, Developer ID
   - Displays related developer name in table

3. **Профкваліфікації** (`/manager/professional-qualifications`)
   - View, create, edit, delete professional qualifications
   - Search by name
   - Fields: Name, NKR Level, Profession ID
   - Displays related profession name in table

4. **Кваліфікаційні центри** (`/manager/centres`)
   - View, create, edit, delete qualification centres
   - Search by name, EDRPOU, or address
   - Fields: Name, EDRPOU, Address

5. **Особи** (`/manager/persons`)
   - View, create, edit, delete persons (certificate holders)
   - Search by full name
   - Fields: Full Name, Qualification Center ID, Professional Qualification ID, Date Received
   - Displays related qualification center and professional qualification names in table

6. **Акредитації** (`/manager/accreditations`)
   - View, create, edit, delete accreditations
   - Search by certificate number
   - Fields: Certificate Number, Professional Qualification ID, Qualification Center ID, Session NQA Date
   - Displays related qualification and center names in table

7. **Експертизи** (`/manager/examinations`)
   - View, create, edit, delete examinations
   - Fields: Professional Qualification ID, Qualification Center ID, Expert ID, Examination Date
   - Displays related qualification, center, and expert names in table

### 3. Test CRUD Operations on Each Page

For each manager page, test the following:

#### View Paginated List
- ✅ Verify table displays data with pagination
- ✅ Check that page size selector works (10, 25, 50, 100)
- ✅ Verify pagination controls (Previous/Next) work correctly
- ✅ Check that total count is displayed correctly

#### Search Functionality
- ✅ Enter search query in the search box
- ✅ Verify results filter correctly (where search is configured)
- ✅ Clear search and verify all results return

#### Add New Record
- ✅ Click "Додати" button
- ✅ Fill in required fields (marked with *)
- ✅ Submit form
- ✅ Verify new record appears in the list
- ✅ Verify validation works (try submitting empty required fields)

#### Edit Existing Record
- ✅ Click "Редагувати" on any record
- ✅ Verify form is pre-filled with existing data
- ✅ Modify fields
- ✅ Submit form
- ✅ Verify changes are reflected in the table

#### Delete Record
- ✅ Click "Видалити" on any record
- ✅ Confirm deletion in the dialog
- ✅ Verify record is removed from the list

### 4. Test Authorization

#### Manager Access
- ✅ Verify manager can access all `/manager/*` routes
- ✅ Verify manager can perform all CRUD operations

#### Non-Manager Access (Unauthorized)
1. Logout and login as:
   - **Applicant:** `applicant@nqr.test` / `Password123!`
   - **Viewer:** `viewer@nqr.test` / `Password123!`

2. Try to access manager routes directly:
   - `/manager/developers`
   - `/manager/professions`
   - etc.

3. ✅ Verify unauthorized users are redirected (cannot access manager pages)

4. Try to access manager API endpoints directly:
   - `POST /api/developers`
   - `PUT /api/developers/1`
   - `DELETE /api/developers/1`

5. ✅ Verify API returns 403 Forbidden for non-managers

## API Endpoints Summary

All manager CRUD endpoints follow this pattern:

### GET (Public - authenticated users can read)
- `GET /api/developers` - Paginated list with search
- `GET /api/professions` - Paginated list with search
- `GET /api/professional-qualifications` - Paginated list with search
- `GET /api/persons` - Paginated list with search
- `GET /api/accreditations` - Paginated list with search
- `GET /api/examinations` - Paginated list
- `GET /api/centres` - Paginated list with search

### GET by ID (Public - authenticated users can read)
- `GET /api/{entity}/:id` - Single record by ID

### POST/PUT/DELETE (Manager-only)
- `POST /api/{entity}` - Create (requires MANAGER role)
- `PUT /api/{entity}/:id` - Update (requires MANAGER role)
- `DELETE /api/{entity}/:id` - Delete (requires MANAGER role)

## Notes

- Foreign key fields (like `developerId`, `professionId`) currently require manual ID entry
- Date fields use HTML5 date inputs and are formatted in Ukrainian locale
- Nested objects (like `developer`, `profession`) are automatically displayed in tables
- Search works on configured text fields (see `searchableFields` in `entitiesConfig.ts`)

## Troubleshooting

### Backend Issues
- Ensure database is running and migrations are applied: `npx prisma migrate dev`
- Ensure seed data exists: `npx prisma db seed`
- Check backend logs for errors

### Frontend Issues
- Clear browser cache and localStorage
- Check browser console for errors
- Verify API base URL is correct in `.env` or `vite.config.ts`

### Data Issues
- If foreign key errors occur, ensure referenced records exist
- Check database constraints match the schema
- Verify Prisma client is generated: `npx prisma generate`
