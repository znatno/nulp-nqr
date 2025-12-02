-- Step 1: Add capability flags to User
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "canApplyForQualification" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "canDevelopStandards" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "canAccreditCenters" BOOLEAN NOT NULL DEFAULT false;

-- Step 2: Migrate existing APPLICANT users to have canApplyForQualification=true
UPDATE "User" SET "canApplyForQualification" = true WHERE "role" = 'APPLICANT';

-- Step 3: Create new Role enum
CREATE TYPE "Role_new" AS ENUM ('VIEWER', 'USER', 'MANAGER');

-- Step 4: Add temporary column with new enum type
ALTER TABLE "User" ADD COLUMN "role_new" "Role_new";

-- Step 5: Migrate data: APPLICANT -> USER, keep MANAGER and VIEWER
UPDATE "User" SET "role_new" = 'USER' WHERE "role" = 'APPLICANT';
UPDATE "User" SET "role_new" = 'MANAGER' WHERE "role" = 'MANAGER';
UPDATE "User" SET "role_new" = 'VIEWER' WHERE "role" = 'VIEWER';

-- Step 6: Drop old column and rename new one
ALTER TABLE "User" DROP COLUMN "role";
ALTER TABLE "User" RENAME COLUMN "role_new" TO "role";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'USER';

-- Step 7: Drop old enum and rename new one
DROP TYPE "Role";
ALTER TYPE "Role_new" RENAME TO "Role";

-- Step 8: Application - migrate userId to applicantId
ALTER TABLE "Application" ADD COLUMN IF NOT EXISTS "applicantId" INTEGER;
UPDATE "Application" SET "applicantId" = "userId" WHERE "applicantId" IS NULL;
ALTER TABLE "Application" ALTER COLUMN "applicantId" SET NOT NULL;

-- Step 9: Application - add new fields
ALTER TABLE "Application" ADD COLUMN IF NOT EXISTS "preferredQualificationCenterId" INTEGER;
ALTER TABLE "Application" ADD COLUMN IF NOT EXISTS "qualificationCenterId" INTEGER;

-- Step 10: Create new ApplicationStatus enum
CREATE TYPE "ApplicationStatus_new" AS ENUM ('DRAFT', 'SUBMITTED', 'UNDER_REVIEW', 'SCHEDULED', 'TESTED', 'APPROVED', 'REFUSED');

-- Step 11: Add temporary column with new enum type
ALTER TABLE "Application" ADD COLUMN "status_new" "ApplicationStatus_new";

-- Step 12: Migrate ApplicationStatus values
UPDATE "Application" SET "status_new" = 'SUBMITTED' WHERE "status" = 'PENDING';
UPDATE "Application" SET "status_new" = 'SUBMITTED' WHERE "status" = 'SUBMITTED';
UPDATE "Application" SET "status_new" = 'APPROVED' WHERE "status" = 'APPROVED';
UPDATE "Application" SET "status_new" = 'REFUSED' WHERE "status" = 'REJECTED';
UPDATE "Application" SET "status_new" = 'APPROVED' WHERE "status" = 'COMPLETED';

-- Step 13: Drop old column and rename new one
ALTER TABLE "Application" DROP COLUMN "status";
ALTER TABLE "Application" RENAME COLUMN "status_new" TO "status";
ALTER TABLE "Application" ALTER COLUMN "status" SET DEFAULT 'DRAFT';

-- Step 14: Drop old enum and rename new one
DROP TYPE "ApplicationStatus";
ALTER TYPE "ApplicationStatus_new" RENAME TO "ApplicationStatus";

-- Step 15: Application - remove old fields
ALTER TABLE "Application" DROP COLUMN IF EXISTS "userId";
ALTER TABLE "Application" DROP COLUMN IF EXISTS "preferredDate";

-- Step 16: Add foreign keys for Application
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'Application_applicantId_fkey'
    ) THEN
        ALTER TABLE "Application" ADD CONSTRAINT "Application_applicantId_fkey" 
            FOREIGN KEY ("applicantId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'Application_preferredQualificationCenterId_fkey'
    ) THEN
        ALTER TABLE "Application" ADD CONSTRAINT "Application_preferredQualificationCenterId_fkey" 
            FOREIGN KEY ("preferredQualificationCenterId") REFERENCES "QualificationCenter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'Application_qualificationCenterId_fkey'
    ) THEN
        ALTER TABLE "Application" ADD CONSTRAINT "Application_qualificationCenterId_fkey" 
            FOREIGN KEY ("qualificationCenterId") REFERENCES "QualificationCenter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
    END IF;
END $$;

-- Step 17: Create TestResult enum
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'TestResult') THEN
        CREATE TYPE "TestResult" AS ENUM ('PENDING', 'PASSED', 'FAILED');
    END IF;
END $$;

-- Step 18: Create TestSession table
CREATE TABLE IF NOT EXISTS "TestSession" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "qualificationCenterId" INTEGER NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "result" "TestResult" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,

    CONSTRAINT "TestSession_pkey" PRIMARY KEY ("id")
);

-- Step 19: Add foreign keys for TestSession
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'TestSession_applicationId_fkey'
    ) THEN
        ALTER TABLE "TestSession" ADD CONSTRAINT "TestSession_applicationId_fkey" 
            FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'TestSession_qualificationCenterId_fkey'
    ) THEN
        ALTER TABLE "TestSession" ADD CONSTRAINT "TestSession_qualificationCenterId_fkey" 
            FOREIGN KEY ("qualificationCenterId") REFERENCES "QualificationCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
    END IF;
END $$;

-- Step 20: Create AccreditationStatus enum
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'AccreditationStatus') THEN
        CREATE TYPE "AccreditationStatus" AS ENUM ('ACTIVE', 'EXPIRED', 'CANCELLED');
    END IF;
END $$;

-- Step 21: QualificationCenterAccreditation - add new fields
ALTER TABLE "QualificationCenterAccreditation" ADD COLUMN IF NOT EXISTS "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "QualificationCenterAccreditation" ADD COLUMN IF NOT EXISTS "endDate" TIMESTAMP(3);
ALTER TABLE "QualificationCenterAccreditation" ADD COLUMN IF NOT EXISTS "status" "AccreditationStatus" NOT NULL DEFAULT 'ACTIVE';

-- Step 22: AccreditationExpert - add userId
ALTER TABLE "AccreditationExpert" ADD COLUMN IF NOT EXISTS "userId" INTEGER;

-- Step 23: Add foreign key for AccreditationExpert
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'AccreditationExpert_userId_fkey'
    ) THEN
        ALTER TABLE "AccreditationExpert" ADD CONSTRAINT "AccreditationExpert_userId_fkey" 
            FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
    END IF;
END $$;

-- Step 24: QualificationCenterExpertise - add result and notes
ALTER TABLE "QualificationCenterExpertise" ADD COLUMN IF NOT EXISTS "result" TEXT;
ALTER TABLE "QualificationCenterExpertise" ADD COLUMN IF NOT EXISTS "notes" TEXT;
