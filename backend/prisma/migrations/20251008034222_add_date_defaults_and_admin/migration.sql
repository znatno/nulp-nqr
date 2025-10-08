/*
  Warnings:

  - You are about to drop the `Qualification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Qualification" DROP CONSTRAINT "Qualification_professionId_fkey";

-- DropIndex
DROP INDEX "public"."Profession_code_key";

-- AlterTable
ALTER TABLE "Profession" ADD COLUMN     "approvalDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "developerId" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "public"."Qualification";

-- CreateTable
CREATE TABLE "Developer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "edrpou" TEXT,

    CONSTRAINT "Developer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfessionalQualification" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nkrLevel" INTEGER NOT NULL,
    "professionId" INTEGER NOT NULL,

    CONSTRAINT "ProfessionalQualification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QualificationCenter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "edrpou" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "QualificationCenter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accreditation" (
    "id" SERIAL NOT NULL,
    "professionalQualificationId" INTEGER NOT NULL,
    "qualificationCenterId" INTEGER NOT NULL,
    "certificateNumber" TEXT NOT NULL,
    "hakDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Accreditation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "qualificationCenterId" INTEGER NOT NULL,
    "professionalQualificationId" INTEGER NOT NULL,
    "certificateNumber" TEXT NOT NULL,
    "dateReceived" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expert" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "professionalQualificationId" INTEGER NOT NULL,

    CONSTRAINT "Expert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Examination" (
    "id" SERIAL NOT NULL,
    "professionalQualificationId" INTEGER NOT NULL,
    "qualificationCenterId" INTEGER NOT NULL,
    "expertId" INTEGER NOT NULL,
    "examinationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Examination_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Profession" ADD CONSTRAINT "Profession_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "Developer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessionalQualification" ADD CONSTRAINT "ProfessionalQualification_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accreditation" ADD CONSTRAINT "Accreditation_professionalQualificationId_fkey" FOREIGN KEY ("professionalQualificationId") REFERENCES "ProfessionalQualification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accreditation" ADD CONSTRAINT "Accreditation_qualificationCenterId_fkey" FOREIGN KEY ("qualificationCenterId") REFERENCES "QualificationCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_qualificationCenterId_fkey" FOREIGN KEY ("qualificationCenterId") REFERENCES "QualificationCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_professionalQualificationId_fkey" FOREIGN KEY ("professionalQualificationId") REFERENCES "ProfessionalQualification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expert" ADD CONSTRAINT "Expert_professionalQualificationId_fkey" FOREIGN KEY ("professionalQualificationId") REFERENCES "ProfessionalQualification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Examination" ADD CONSTRAINT "Examination_professionalQualificationId_fkey" FOREIGN KEY ("professionalQualificationId") REFERENCES "ProfessionalQualification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Examination" ADD CONSTRAINT "Examination_qualificationCenterId_fkey" FOREIGN KEY ("qualificationCenterId") REFERENCES "QualificationCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Examination" ADD CONSTRAINT "Examination_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "Expert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
