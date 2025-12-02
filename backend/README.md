# NQF Register Backend

Backend API for the National Qualifications Register (Національний реєстр кваліфікацій / NQR).

This backend uses Prisma to connect to a PostgreSQL database. Configure your connection details before starting the API so the frontend can successfully load the database overview.

## 1. Provide a `DATABASE_URL`

Create a `.env` file in the `backend/` folder and add your database connection string. You can start from the sample below and replace the host, port, database name, and credentials with your own values.

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

If your provider exposes additional parameters (for example `schema`, `connection_limit`, or SSL flags) append them as query parameters, e.g. `?schema=public&sslmode=require`.

## 2. Where to find your connection details

Use the management console for your database service. Common places to look:

- **Cloud providers (Render, Railway, Supabase, Neon, AWS RDS, etc.)** – open the database instance dashboard and look for sections titled *Connection*, *Connection details*, or *Credentials*. They normally list the full URL and any required parameters.
- **Self-hosted or corporate databases** – ask your database administrator or check the configuration files on the server (`postgresql.conf`, `pg_hba.conf`) for the host, port, and authentication method.
- **Local development** – the default PostgreSQL port is `5432`; use the username/password you created when installing PostgreSQL.

Copy those values directly into the `.env` file so Prisma can reach the database.

## 3. Determine SSL/TLS requirements

Check the same console or documentation for SSL guidance. Look for settings named **SSL mode**, **Require SSL**, or **TLS**. Providers usually specify whether you must connect with `sslmode=require` (PostgreSQL) or if they provide certificates to download. If certificates are required, download them and place the paths in your connection string, e.g. `?sslmode=require&sslrootcert=/path/to/ca.pem`.

If you are unsure, try connecting locally with `psql`:

```
psql "$DATABASE_URL"
```

If the command fails with an SSL-related error, consult the provider’s docs for the correct `sslmode` and certificate files.

## 4. Network access and allow lists

Many hosted databases protect themselves with firewalls or allow lists. In your database dashboard, look for sections labelled **Network**, **Security**, **Trusted sources**, or **Allowed IPs**. Add the public IP address of the server (or hosting platform) where this backend will run. For local development, you can usually allow `0.0.0.0/0` temporarily while testing.

If you do not control those settings, ask the administrator who manages the database to add the backend’s IP to the allow list.

## 5. Test the connection

Once the `.env` file is configured, run:

```
npm install
npx prisma db pull
```

If the commands succeed, the backend can reach the database and the frontend error should disappear.
