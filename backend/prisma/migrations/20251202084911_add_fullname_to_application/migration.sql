/*
  Warnings:

  - Added the required column `fullName` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Made the column `status` on table `Application` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AccreditationExpert" RENAME CONSTRAINT "Expert_pkey" TO "AccreditationExpert_pkey";

-- AlterTable
-- Step 1: Add fullName column as nullable
ALTER TABLE "Application" ADD COLUMN "fullName" TEXT;

-- Step 2: Update existing rows with a default value
UPDATE "Application" 
SET "fullName" = 'Не вказано'
WHERE "fullName" IS NULL;

-- Step 3: Make fullName NOT NULL
ALTER TABLE "Application" ALTER COLUMN "fullName" SET NOT NULL;

-- Step 4: Make status NOT NULL (if it's not already)
ALTER TABLE "Application" ALTER COLUMN "status" SET NOT NULL;

-- AlterTable
ALTER TABLE "Professional" RENAME CONSTRAINT "Person_pkey" TO "Professional_pkey";

-- AlterTable
ALTER TABLE "QualificationCenterAccreditation" RENAME CONSTRAINT "Accreditation_pkey" TO "QualificationCenterAccreditation_pkey";

-- AlterTable
ALTER TABLE "QualificationCenterExpertise" RENAME CONSTRAINT "Examination_pkey" TO "QualificationCenterExpertise_pkey";

-- AlterTable
ALTER TABLE "QualificationStandardDeveloper" RENAME CONSTRAINT "Developer_pkey" TO "QualificationStandardDeveloper_pkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET NOT NULL;

-- RenameForeignKey
ALTER TABLE "QualificationCenterAccreditation" RENAME CONSTRAINT "QualificationCenterAccreditation_professionalQualificationId_fk" TO "QualificationCenterAccreditation_professionalQualification_fkey";
