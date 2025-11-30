/*
  Warnings:

  - You are about to drop the column `sessiobNQADate` on the `Accreditation` table. All the data in the column will be lost.
  - You are about to drop the column `certificateNumber` on the `Person` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[professionalQualificationId,qualificationCenterId,certificateNumber]` on the table `Accreditation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Accreditation" DROP COLUMN "sessiobNQADate",
ADD COLUMN     "sessionNQADate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "certificateNumber";

-- AlterTable
ALTER TABLE "Profession" ALTER COLUMN "developerId" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Accreditation_professionalQualificationId_qualificationCent_key" ON "Accreditation"("professionalQualificationId", "qualificationCenterId", "certificateNumber");
