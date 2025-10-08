# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

### FE-side project structure for now:
```
frontend/
├─ src/
│  ├─ assets/            (main.css with Tailwind directives)
│  ├─ layouts/           AdminLayout.vue
│  ├─ pages/             Qualifications.vue   ← single CRUD page
│  ├─ router/            index.ts
│  ├─ services/          api.ts
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

