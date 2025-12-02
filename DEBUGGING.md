# Debugging Guide for Manager CRUD Tables

## Issue: Tables show "Не вдалося завантажити дані" (Failed to load data)

### Step 1: Check Backend Server
Make sure the backend is running:
```bash
cd backend
npm run dev
```
You should see: `👉  http://localhost:4000`

### Step 2: Check Database Connection
Verify the database is accessible:
```bash
cd backend
npx prisma db execute --stdin <<< "SELECT 1;"
```

### Step 3: Check if Tables Exist
```bash
cd backend
npx prisma migrate status
```
Should show: "Database schema is up to date!"

### Step 4: Seed the Database
If tables are empty, seed the database:
```bash
cd backend
npx prisma db seed
```
You should see:
- ✅ Test users created
- ✅ БД заповнено демонстраційними даними.

### Step 5: Check Browser Console
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Navigate to a manager page (e.g., `/manager/developers`)
4. Look for error messages with details like:
   - URL being called
   - HTTP status code
   - Error message
   - Response data

### Step 6: Test API Endpoints Directly

#### Test with curl (replace TOKEN with your JWT token):
```bash
# Get developers
curl -H "Authorization: Bearer YOUR_TOKEN" \
  "http://localhost:4000/api/developers?page=1&pageSize=10"

# Expected response:
# {"items":[...],"total":3,"page":1,"pageSize":10}
```

#### Or test in browser console:
```javascript
// Get your token
const token = localStorage.getItem('auth_token');

// Test API call
fetch('http://localhost:4000/api/developers?page=1&pageSize=10', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

### Step 7: Common Issues

#### Issue: "Cannot read property 'items' of undefined"
**Solution**: The API might be returning an error. Check the Network tab in DevTools to see the actual response.

#### Issue: "401 Unauthorized" or "403 Forbidden"
**Solution**: 
1. Make sure you're logged in as a MANAGER
2. Check if the token is valid: `localStorage.getItem('auth_token')`
3. Try logging out and logging back in

#### Issue: "500 Internal Server Error"
**Solution**: 
1. Check backend console for error details
2. Verify Prisma client is generated: `npx prisma generate`
3. Check database connection string in `.env`

#### Issue: Empty tables (no error, but no data)
**Solution**: 
1. Run seed: `npx prisma db seed`
2. Verify data exists: Check backend console logs when loading

### Step 8: Verify Prisma Client
```bash
cd backend
npx prisma generate
```

### Step 9: Check Environment Variables
Make sure `.env` file exists in `backend/` with:
```
DATABASE_URL="postgresql://user:password@localhost:5432/nulp_nqr"
```

### Step 10: Restart Everything
1. Stop backend server (Ctrl+C)
2. Restart: `npm run dev`
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Clear browser cache if needed

## Expected Behavior

### When Working Correctly:
- Tables show data (or "Записів не знайдено" if empty)
- Can click "Додати" to add new records
- Can edit existing records
- Can delete records
- Search works
- Pagination works

### API Response Format:
```json
{
  "items": [...],
  "total": 10,
  "page": 1,
  "pageSize": 10
}
```

## Still Not Working?

1. Check backend logs for detailed error messages
2. Check browser console for JavaScript errors
3. Check Network tab for failed API requests
4. Verify you're logged in as manager@nqr.test
5. Try accessing API directly with curl/Postman
