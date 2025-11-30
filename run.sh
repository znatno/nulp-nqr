cd backend && npm run build && cd ..
node ./backend/dist/index.js

### NEW
# Create database (if it doesn't exist)
brew services start postgresql@14
dropdb -U postgres nulp_nqr
createdb -U postgres nulp_nqr
psql -h localhost -p 5432 -U postgres -d nulp_nqr
# Start backend
cd backend
npm install          # Install dependencies (auto-generates Prisma client)
npm run migrate      # Run database migrations
npm run prisma:seed  # Seed database (optional)
npm run dev          # Start development server
# Start Prisma ORM
npx prisma migrate dev --name init # Migrate and initialize DB
npx prisma db seed                 # Seed DB
npx prisma studio                  # Open DB Studio (management tool)


### WINDOWS
# DB

# backend

# frontend