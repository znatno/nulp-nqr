# backend
node ./backend/dist/index.js

# DB (macOS/Linux)
brew services start postgresql@14
psql -h localhost -p 5432 -U postgres -d nulp_nqf_register

# clean DB
dropdb -U postgres nulp_nqf_register
createdb -U postgres nulp_nqf_register
npx prisma migrate dev --name init
npx prisma db seed

# Prisma (DB Studio)
npx prisma db seed
npx prisma studio

# frontend
npm run dev


### WINDOWS
# DB (Win)
