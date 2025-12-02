/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `QualificationStandardDeveloper` will be added. If there are existing duplicate values, this will fail.
  - Made the column `status` on table `Application` required. This step will fail if there are existing NULL values in that column.
  - Made the column `edrpou` on table `QualificationStandardDeveloper` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_qualificationCenterId_fkey";

-- AlterTable (skip - table will be renamed in next migration)
-- ALTER TABLE "AccreditationExpert" RENAME CONSTRAINT "Expert_pkey" TO "AccreditationExpert_pkey";

-- AlterTable
ALTER TABLE "Application" ALTER COLUMN "qualificationCenterId" DROP NOT NULL,
ALTER COLUMN "status" SET NOT NULL;

-- AlterTable (skip - table will be renamed in next migration)
-- ALTER TABLE "Professional" RENAME CONSTRAINT "Person_pkey" TO "Professional_pkey";

-- AlterTable (skip - table will be renamed in next migration)
-- ALTER TABLE "QualificationCenterAccreditation" RENAME CONSTRAINT "Accreditation_pkey" TO "QualificationCenterAccreditation_pkey";

-- AlterTable (skip - table will be renamed in next migration)
-- ALTER TABLE "QualificationCenterExpertise" RENAME CONSTRAINT "Examination_pkey" TO "QualificationCenterExpertise_pkey";

-- AlterTable (skip - table will be renamed in next migration)
-- ALTER TABLE "QualificationStandardDeveloper" RENAME CONSTRAINT "Developer_pkey" TO "QualificationStandardDeveloper_pkey";

-- AlterTable (use old table name "Developer" - will be renamed in next migration)
ALTER TABLE "Developer" ADD COLUMN "userId" INTEGER;

-- AlterTable
ALTER TABLE "Developer" ALTER COLUMN "edrpou" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET NOT NULL;

-- CreateIndex (use old table name "Developer" - will be renamed in next migration)
CREATE UNIQUE INDEX "QualificationStandardDeveloper_userId_key" ON "Developer"("userId");

-- RenameForeignKey (skip - will be handled in next migration)
-- ALTER TABLE "QualificationCenterAccreditation" RENAME CONSTRAINT "QualificationCenterAccreditation_professionalQualificationId_fk" TO "QualificationCenterAccreditation_professionalQualification_fkey";

-- AddForeignKey (use old table name "Developer" - will be renamed in next migration)
ALTER TABLE "Developer" ADD CONSTRAINT "QualificationStandardDeveloper_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_qualificationCenterId_fkey" FOREIGN KEY ("qualificationCenterId") REFERENCES "QualificationCenter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
