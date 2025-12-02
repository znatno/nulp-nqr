# Permissions Model (NULP NQR)

This document describes how user roles, capabilities, and permissions are implemented in the National Qualifications Register (NQR) system and how they align with the conceptual user personas defined in the NQF/NQR domain documentation.

## 2. Technical Role Model

### Role Enum

The system uses a `Role` enum with three values:

- **VIEWER** — minimal or read-only account. Users with this role have no special capabilities and can only access public information.
- **USER** — authenticated user with capabilities controlled by flags. This is the default role for registered users.
- **MANAGER** — system-level admin with effectively full access. Managers can access all endpoints and manage all domain entities.

### Capability Flags on User

In addition to the `Role` enum, the `User` model has three boolean capability flags that control access to specific functionality:

- **`canApplyForQualification`** — enables applicant functionality (creating and managing applications for professional qualifications)
- **`canDevelopStandards`** — enables qualification standard developer functionality (managing professions and professional qualifications)
- **`canAccreditCenters`** — enables accreditation expert functionality (managing accreditations and expertises)

### Additional Technical Indicators

The system also uses domain model relationships to determine access:

- **Professional (certificate holder)**: A user is considered a professional if they have at least one related `Professional` record in the database (linked via `Professional.userId`).
- **Accreditation Expert**: A user may be linked to an `AccreditationExpert` record via `AccreditationExpert.userId`, though the primary indicator is the `canAccreditCenters` flag.
- **Center Account**: Currently, there is no explicit "center account" model. Center-specific functionality is managed through manager access. Future implementations may add a direct association between users and `QualificationCenter` records.

## 2.3 Personas and Mapping to Implementation

The following table maps conceptual personas to their technical implementation:

| Persona                            | Technical Implementation                                                |
|------------------------------------|-------------------------------------------------------------------------|
| Viewer (public)                    | No `User` record (anonymous), only public routes available              |
| Viewer (logged-in)                 | `Role = VIEWER`, all capability flags `false`                           |
| Applicant                          | `Role = USER`, `canApplyForQualification = true`                         |
| Professional (certificate holder)  | `Role = USER`, has at least one related `Professional` record (via `Professional.userId`) |
| Qualification standard developer   | `Role = USER`, `canDevelopStandards = true`                              |
| Accreditation expert               | `Role = USER`, `canAccreditCenters = true` and optionally linked to `AccreditationExpert` record |
| Center account                     | Currently not explicitly modeled; center operations require `Role = MANAGER` |
| System manager                     | `Role = MANAGER`                                                        |

### Helper Functions

The backend (`src/middleware/auth.ts`) and frontend (`src/composables/useRole.ts`) provide helper functions to check these conditions:

- `isManager(user)` — checks if `user.role === 'MANAGER'`
- `isApplicant(user)` — checks if `user.role === 'USER' && user.canApplyForQualification === true`
- `isDeveloper(user)` — checks if `user.role === 'USER' && user.canDevelopStandards === true`
- `isAccreditationExpert(user)` — checks if `user.role === 'USER' && user.canAccreditCenters === true`
- `isViewer(user)` — checks if user is null/undefined or `user.role === 'VIEWER'`

## 2.4 Backend API Permissions Matrix

The following table documents key API endpoints and which personas can access them:

| Method & Path | Description | Viewer | Applicant | Developer | Expert | Manager |
|--------------|-------------|:------:|:---------:|:---------:|:------:|:------:|
| **Public Endpoints** |
| GET /api/verify-certificate | Public verification of a certificate by certificate number | ✔ | ✔ | ✔ | ✔ | ✔ |
| GET /api/qualifications | List professional qualifications (public read-only) | ✔ | ✔ | ✔ | ✔ | ✔ |
| POST /api/auth/login | Authenticate and receive JWT token | ✔ | ✔ | ✔ | ✔ | ✔ |
| POST /api/auth/register | Register new user account | ✔ | ✔ | ✔ | ✔ | ✔ |
| **Applicant Endpoints** |
| GET /api/applicant/applications | List current user's applications | | ✔ | | | ✔ |
| POST /api/applicant/applications | Create a new application | | ✔ | | | ✔ |
| GET /api/applicant/centres | List qualification centres (read-only) | | ✔ | | | ✔ |
| GET /api/applicant/centres/:id/qualifications | Get qualifications available at a centre | | ✔ | | | ✔ |
| GET /api/applicant/certificates | Get current user's certificates | | ✔ | | | ✔ |
| **Manager Endpoints - User Management** |
| GET /api/users | List users with filters | | | | | ✔ |
| GET /api/users/:id | Get user details | | | | | ✔ |
| POST /api/users | Create user | | | | | ✔ |
| PUT /api/users/:id | Update user role and capability flags | | | | | ✔ |
| DELETE /api/users/:id | Delete user | | | | | ✔ |
| **Manager Endpoints - Applications** |
| GET /api/applications | List/filter all applications | | | | | ✔ |
| GET /api/applications/:id | Get application details | | | | | ✔ |
| PUT /api/applications/:id/assign-center | Assign application to qualification center | | | | | ✔ |
| **Manager Endpoints - Test Sessions** |
| POST /api/applications/:id/test-sessions | Create test session for application | | | | | ✔ |
| PUT /api/test-sessions/:id | Update test session (schedule/result) | | | | | ✔ |
| GET /api/test-sessions | List test sessions with filters | | | | | ✔ |
| **Manager Endpoints - Domain CRUD** |
| GET /api/centres | List qualification centres | ✔ | ✔ | ✔ | ✔ | ✔ |
| POST /api/centres | Create qualification centre | | | | | ✔ |
| PUT /api/centres/:id | Update qualification centre | | | | | ✔ |
| DELETE /api/centres/:id | Delete qualification centre | | | | | ✔ |
| GET /api/developers | List qualification standard developers | ✔ | ✔ | ✔ | ✔ | ✔ |
| POST /api/developers | Create developer | | | | | ✔ |
| PUT /api/developers/:id | Update developer | | | | | ✔ |
| DELETE /api/developers/:id | Delete developer | | | | | ✔ |
| GET /api/professions | List professions | ✔ | ✔ | ✔ | ✔ | ✔ |
| POST /api/professions | Create profession | | | | | ✔ |
| PUT /api/professions/:id | Update profession | | | | | ✔ |
| DELETE /api/professions/:id | Delete profession | | | | | ✔ |
| GET /api/professional-qualifications | List professional qualifications | ✔ | ✔ | ✔ | ✔ | ✔ |
| POST /api/professional-qualifications | Create professional qualification | | | | | ✔ |
| PUT /api/professional-qualifications/:id | Update professional qualification | | | | | ✔ |
| DELETE /api/professional-qualifications/:id | Delete professional qualification | | | | | ✔ |
| GET /api/persons | List professionals (certificate holders) | ✔ | ✔ | ✔ | ✔ | ✔ |
| POST /api/persons | Create professional record | | | | | ✔ |
| PUT /api/persons/:id | Update professional record | | | | | ✔ |
| DELETE /api/persons/:id | Delete professional record | | | | | ✔ |
| GET /api/accreditations | List centre accreditations | ✔ | ✔ | ✔ | ✔ | ✔ |
| POST /api/accreditations | Create accreditation | | | | | ✔ |
| PUT /api/accreditations/:id | Update accreditation | | | | | ✔ |
| DELETE /api/accreditations/:id | Delete accreditation | | | | | ✔ |
| GET /api/examinations | List expertises | ✔ | ✔ | ✔ | ✔ | ✔ |
| POST /api/examinations | Create expertise | | | | | ✔ |
| PUT /api/examinations/:id | Update expertise | | | | | ✔ |
| DELETE /api/examinations/:id | Delete expertise | | | | | ✔ |
| **Manager Endpoints - Dashboard & Reports** |
| GET /api/dashboard/global | Get global system metrics | | | | | ✔ |
| GET /api/dashboard/centre/:centreId | Get centre-specific metrics | | | | | ✔ |
| GET /api/reports | Get report data | | | | | ✔ |
| GET /api/reports/export | Export report (PDF/Excel/CSV/TXT) | | | | | ✔ |
| POST /api/qualifications | Create qualification (legacy endpoint) | | | | | ✔ |
| DELETE /api/qualifications/:id | Delete qualification (legacy endpoint) | | | | | ✔ |

**Notes:**
- Most GET endpoints for domain entities (centres, developers, professions, etc.) are publicly accessible for read-only browsing.
- All write operations (POST, PUT, DELETE) require MANAGER role.
- Applicant endpoints require `canApplyForQualification = true` capability.
- Currently, there are no dedicated developer-only or expert-only endpoints; these personas would need MANAGER role for domain management operations.

## 2.5 Frontend Routes and Sidebar Visibility

### Sidebar Sections

The frontend sidebar (`src/components/Sidebar.vue`) is organized into three sections:

1. **"Перевірка"** (Verification) — Public tools available to everyone
   - Перевірка сертифікату (`/verify`) — Certificate verification

2. **"Навігація"** (Navigation) — General registry navigation, publicly accessible
   - Головна (`/`) — Home page
   - Кваліфікації (`/qualifications`) — Professional qualifications list
   - Центри (`/centers`) — Qualification centres list
   - Особи (`/persons`) — Professionals (certificate holders) list

3. **"Управління"** (Management) — Role-based management tools, visible only to authenticated users with appropriate capabilities

### Frontend Route Protection

Routes are protected using meta fields in the router (`src/router/index.ts`):

- `meta.public: true` — Accessible to everyone (including anonymous users)
- `meta.requiresManager: true` — Requires `Role = MANAGER`
- `meta.requiresApplicant: true` — Requires `canApplyForQualification = true`
- `meta.requiresDeveloper: true` — Requires `canDevelopStandards = true`
- `meta.requiresExpert: true` — Requires `canAccreditCenters = true`
- `meta.roles: ['MANAGER']` — Legacy role-based check (for backward compatibility)

### Sidebar Items by Persona

The following table shows which sidebar items appear under "Управління" for each persona:

| Persona | Sidebar Items under "Управління" |
|---------|----------------------------------|
| **Manager** | Панель менеджера (`/manager`)<br>Користувачі (`/manager/users`)<br>Розробники стандартів (`/manager/developers`)<br>Професії (`/manager/professions`)<br>Профкваліфікації (`/manager/professional-qualifications`)<br>Кваліфікаційні центри (`/manager/centres`)<br>Акредитації (`/manager/accreditations`)<br>Експерти (`/manager/examinations`)<br>Експертизи (`/manager/examinations`)<br>Заявки (`/manager/applications`)<br>Тести / Оцінювання (`/manager/test-sessions`)<br>Звіти (`/manager/reports`) |
| **Applicant** | Мої заявки (`/applicant/applications`)<br>Мої сертифікати (`/applicant/certificates`) |
| **Developer** | Панель розробника (`/developer`)<br>Мої професії (`/developer/professions`)<br>Мої профкваліфікації (`/developer/qualifications`) |
| **Expert** | Панель експерта (`/expert`)<br>Мої експертизи (`/expert/expertises`) |
| **Viewer** | No items (section hidden if not authenticated) |

### Frontend Routes

| Route Path | Component | Meta | Description |
|-----------|-----------|------|-------------|
| `/login` | LoginView | `public: true` | Login page |
| `/register` | RegisterView | `public: true` | Registration page |
| `/verify` | ViewerVerifyCertificateView | `public: true` | Certificate verification |
| `/` | HomeView | `public: true` | Home page |
| `/qualifications` | QualificationsView | `public: true` | Qualifications list |
| `/centers` | CentersView | `public: true` | Centres list |
| `/persons` | PersonsView | `public: true` | Professionals list |
| `/manager` | ManagerDashboardGlobalView | `requiresManager: true` | Manager dashboard |
| `/manager/dashboard` | ManagerDashboardGlobalView | `requiresManager: true` | Manager dashboard |
| `/manager/dashboard/centre/:centreId?` | ManagerDashboardCentreView | `requiresManager: true` | Centre dashboard |
| `/manager/users` | ManagerUsersView | `requiresManager: true` | User management |
| `/manager/applications` | ManagerApplicationsView | `requiresManager: true` | Applications management |
| `/manager/applications/:id` | ManagerApplicationDetailView | `requiresManager: true` | Application details |
| `/manager/test-sessions` | ManagerTestSessionsView | `requiresManager: true` | Test sessions management |
| `/manager/centres` | ManagerCentresView | `roles: ['MANAGER']` | Centres CRUD |
| `/manager/centres/:centreId/dashboard` | ManagerDashboardCentreView | `roles: ['MANAGER']` | Centre dashboard |
| `/manager/developers` | ManagerDevelopersView | `roles: ['MANAGER']` | Developers CRUD |
| `/manager/professions` | ManagerProfessionsView | `roles: ['MANAGER']` | Professions CRUD |
| `/manager/professional-qualifications` | ManagerProfessionalQualificationsView | `roles: ['MANAGER']` | Professional qualifications CRUD |
| `/manager/persons` | ManagerPersonsView | `roles: ['MANAGER']` | Professionals CRUD |
| `/manager/accreditations` | ManagerAccreditationsView | `roles: ['MANAGER']` | Accreditations CRUD |
| `/manager/examinations` | ManagerExaminationsView | `roles: ['MANAGER']` | Expertises CRUD |
| `/manager/reports` | ManagerReportsView | `roles: ['MANAGER']` | Reports |
| `/applicant` | ApplicantApplicationsView | `requiresApplicant: true` | Applicant home |
| `/applicant/centres` | ApplicantCentresView | `requiresApplicant: true` | Centres for applicants |
| `/applicant/applications` | ApplicantApplicationsView | `requiresApplicant: true` | My applications |
| `/applicant/applications/:id` | ApplicantApplicationDetailView | `requiresApplicant: true` | Application detail |
| `/applicant/certificates` | ApplicantCertificatesView | `requiresApplicant: true` | My certificates |
| `/developer` | DeveloperDashboardView | `requiresDeveloper: true` | Developer dashboard |
| `/developer/professions` | DeveloperProfessionsView | `requiresDeveloper: true` | My professions |
| `/developer/qualifications` | DeveloperQualificationsView | `requiresDeveloper: true` | My qualifications |
| `/expert` | ExpertDashboardView | `requiresExpert: true` | Expert dashboard |
| `/expert/expertises` | ExpertExpertisesView | `requiresExpert: true` | My expertises |

## 2.6 Notes and Future Extensions

### How to Extend Permissions

**Adding a New Capability Flag:**

1. Update `prisma/schema.prisma`:
   - Add a new boolean field to the `User` model (e.g., `canPerformNewAction Boolean @default(false)`)

2. Update backend middleware (`src/middleware/auth.ts`):
   - Add a helper function: `isNewActionUser(user: User): boolean`
   - Add a middleware: `requireNewAction()`

3. Update frontend composables (`src/composables/useRole.ts`):
   - Add a computed property: `isNewAction`
   - Add a standalone function: `isNewAction(user)`

4. Update router (`src/router/index.ts`):
   - Add routes with `meta: { requiresNewAction: true }`
   - Add guard check in `router.beforeEach`

5. Update sidebar (`src/components/Sidebar.vue`):
   - Add conditional menu items using `v-if="isNewAction"`

**Updating Backend Guards:**

- Modify route handlers in `src/routes/*.ts` to use the appropriate middleware (`requireManager()`, `requireApplicant()`, etc.)
- For route-level protection, apply middleware at the router level: `router.use(requireManager())`
- For endpoint-level protection, apply middleware to specific routes: `router.get('/path', requireManager(), handler)`

**Updating Frontend Router and Sidebar:**

- Add `meta` fields to routes in `src/router/index.ts`
- Add navigation guard checks in `router.beforeEach`
- Update sidebar visibility conditions in `src/components/Sidebar.vue` using the composable functions

### Known Limitations or Edge Cases

1. **Center Accounts**: Currently, there is no explicit "center account" persona. Center-specific operations require MANAGER role. Future implementations may add a direct association between users and `QualificationCenter` records.

2. **Combined Roles**: Users can have multiple capability flags set (e.g., both `canApplyForQualification` and `canDevelopStandards`). The UI will show menu items for all applicable capabilities.

3. **Professional Status**: A user is considered a "professional" (certificate holder) if they have at least one `Professional` record, but this is not enforced by a capability flag. The applicant interface shows certificates if they exist, regardless of other capabilities.

4. **Legacy Role Checks**: Some routes use `meta.roles: ['MANAGER']` instead of `meta.requiresManager: true`. Both are supported for backward compatibility, but new routes should use the capability-based approach.

5. **Public Read Access**: Most domain entity GET endpoints are publicly accessible, allowing anonymous users to browse qualifications, centres, and professionals. Only write operations require authentication and appropriate permissions.

6. **Expert Routes**: Currently, expert-specific routes (`/expert/*`) exist in the frontend, but there are no dedicated backend endpoints for experts. Experts would need MANAGER role to perform accreditation operations through the manager interface.

## Terminology Consistency

This document uses the following terminology consistently:

- **Professional Qualification** (`ProfessionalQualification`) — A specific qualification level within a profession
- **Qualification Centre** (`QualificationCenter`) — An organization accredited to conduct assessments
- **Qualification Centre Accreditation** (`QualificationCenterAccreditation`) — The accreditation record linking a centre to a qualification
- **Professional** (`Professional`) — A certificate holder (person who has received a qualification)
- **Accreditation Expert** (`AccreditationExpert`) — An expert who can perform accreditations
- **Qualification Centre Expertise** (`QualificationCenterExpertise`) — An expertise record (assessment of a centre)
- **Application** (`Application`) — An application for a professional qualification
- **Test Session** (`TestSession`) — A scheduled assessment/test for an application

All model names match the Prisma schema and are referenced in backticks when used as technical terms.
