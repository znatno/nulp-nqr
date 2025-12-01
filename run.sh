cd backend && npm run build && cd ..
node ./backend/dist/index.js

### NEW

# Create database (if it doesn't exist)
brew services start postgresql@14
dropdb -U postgres nulp_nqr
createdb -U postgres nulp_nqr
psql -h localhost -p 5432 -U postgres -d nulp_nqr

# Start backend (from /backend folder)
cd backend
npm install          # Install dependencies (auto-generates Prisma client)
npm run generate     # Generate Prisma client
npm run migrate      # Run database migrations
npm run prisma:seed  # Seed database (optional)
npm run dev          # Start development server

# Optional: Prisma Studio (run separately in another terminal)
# cd backend
# npm run prisma:studio

# Start frontend (from /frontend folder)
cd ../frontend
npm install
npm run build
npm run dev

### WINDOWS
# DB

# backend

# frontend