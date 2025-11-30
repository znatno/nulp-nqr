# backend
npm run build 
node ./backend/dist/index.js

# DB (macOS/Linux)
brew services start postgresql@14
psql -h localhost -p 5432 -U postgres -d nulp_nqr

# clean DB
dropdb -U postgres nulp_nqr
createdb -U postgres nulp_nqr

# migrate DB
npx prisma migrate dev --name init

# Prisma (DB Studio)
npx prisma db seed
npx prisma studio

# frontend
npm install
npm update
npm run build
npm run dev


### WINDOWS
# DB (Win)
