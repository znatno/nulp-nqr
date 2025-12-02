-- Cleanup script to fix database schema drift
-- Run this before applying new migrations

-- Update any APPLICANT roles to USER
UPDATE "User" SET role = 'USER' WHERE role = 'APPLICANT';

-- Drop leftover enum types from failed migrations
DROP TYPE IF EXISTS "ApplicationStatus_new" CASCADE;
DROP TYPE IF EXISTS "Role_new" CASCADE;

-- Note: PostgreSQL doesn't support DROP VALUE from enum directly
-- We'll need to recreate the enum or use db push/reset
