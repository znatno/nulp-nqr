# NQF Register Frontend

Frontend application for the National Qualifications Register (Національний реєстр кваліфікацій / NQR).

Built with Vue 3, TypeScript, and Vite.

### Project structure:
```
frontend/
├─ src/
│  ├─ assets/            (main.css with Tailwind directives)
│  ├─ components/        (Sidebar, CrudTable)
│  ├─ composables/       (useAuth, useRole)
│  ├─ config/           (entitiesConfig)
│  ├─ layouts/           AdminLayout.vue
│  ├─ pages/             (NQR-specific views)
│  ├─ router/            index.ts
│  ├─ services/          api.ts
│  ├─ types/             (auth types)
│  └─ main.ts
└─ tailwind.config.js
```
## Configuring the API base URL

The frontend talks to the Express backend through Axios. By default the
requests go to `/api`, which works when the UI and API are served from the same
origin. If your backend runs on a different host, create a `.env` file (or copy
`.env.example`) and set `VITE_API_BASE_URL` to the full URL of the backend. The
client automatically appends `/api` when it is missing, so both examples below
are valid:

```
VITE_API_BASE_URL=https://backend.example.com
VITE_API_BASE_URL=https://backend.example.com/api
```

During local development Vite's proxy configuration still handles `localhost`
traffic, so you typically do not need to change anything.

