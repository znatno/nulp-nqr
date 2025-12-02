-- Rename column nkrLevel to nqrLevel
ALTER TABLE "ProfessionalQualification" RENAME COLUMN "nkrLevel" TO "nqrLevel";

-- Rename table Developer to QualificationStandardDeveloper
ALTER TABLE "Developer" RENAME TO "QualificationStandardDeveloper";

-- Rename foreign key constraint for Profession
ALTER TABLE "Profession" DROP CONSTRAINT "Profession_developerId_fkey";
ALTER TABLE "Profession" ADD CONSTRAINT "Profession_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "QualificationStandardDeveloper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Rename table Person to Professional
ALTER TABLE "Person" RENAME TO "Professional";

-- Add certificateNumber column to Professional (with temporary default, will be updated)
ALTER TABLE "Professional" ADD COLUMN "certificateNumber" TEXT;
-- Generate certificate numbers for existing records
UPDATE "Professional" SET "certificateNumber" = 'CERT-' || id::text WHERE "certificateNumber" IS NULL;
-- Make it NOT NULL and unique
ALTER TABLE "Professional" ALTER COLUMN "certificateNumber" SET NOT NULL;
CREATE UNIQUE INDEX "Professional_certificateNumber_key" ON "Professional"("certificateNumber");

-- Rename dateReceived to certificateReceivedAt
ALTER TABLE "Professional" RENAME COLUMN "dateReceived" TO "certificateReceivedAt";

-- Rename foreign key constraints for Professional
ALTER TABLE "Professional" DROP CONSTRAINT "Person_qualificationCenterId_fkey";
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_qualificationCenterId_fkey" FOREIGN KEY ("qualificationCenterId") REFERENCES "QualificationCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Professional" DROP CONSTRAINT "Person_professionalQualificationId_fkey";
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_professionalQualificationId_fkey" FOREIGN KEY ("professionalQualificationId") REFERENCES "ProfessionalQualification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "Professional" DROP CONSTRAINT "Person_userId_fkey";
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Rename table Expert to AccreditationExpert
ALTER TABLE "Expert" RENAME TO "AccreditationExpert";

-- Rename foreign key constraint for AccreditationExpert
ALTER TABLE "AccreditationExpert" DROP CONSTRAINT "Expert_professionalQualificationId_fkey";
ALTER TABLE "AccreditationExpert" ADD CONSTRAINT "AccreditationExpert_professionalQualificationId_fkey" FOREIGN KEY ("professionalQualificationId") REFERENCES "ProfessionalQualification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Rename table Examination to QualificationCenterExpertise
ALTER TABLE "Examination" RENAME TO "QualificationCenterExpertise";

-- Rename columns in QualificationCenterExpertise
ALTER TABLE "QualificationCenterExpertise" RENAME COLUMN "expertId" TO "accreditationExpertId";
ALTER TABLE "QualificationCenterExpertise" RENAME COLUMN "examinationDate" TO "expertiseDate";

-- Rename foreign key constraints for QualificationCenterExpertise
ALTER TABLE "QualificationCenterExpertise" DROP CONSTRAINT "Examination_professionalQualificationId_fkey";
ALTER TABLE "QualificationCenterExpertise" ADD CONSTRAINT "QualificationCenterExpertise_professionalQualificationId_fkey" FOREIGN KEY ("professionalQualificationId") REFERENCES "ProfessionalQualification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "QualificationCenterExpertise" DROP CONSTRAINT "Examination_qualificationCenterId_fkey";
ALTER TABLE "QualificationCenterExpertise" ADD CONSTRAINT "QualificationCenterExpertise_qualificationCenterId_fkey" FOREIGN KEY ("qualificationCenterId") REFERENCES "QualificationCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "QualificationCenterExpertise" DROP CONSTRAINT "Examination_expertId_fkey";
ALTER TABLE "QualificationCenterExpertise" ADD CONSTRAINT "QualificationCenterExpertise_accreditationExpertId_fkey" FOREIGN KEY ("accreditationExpertId") REFERENCES "AccreditationExpert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Rename table Accreditation to QualificationCenterAccreditation
ALTER TABLE "Accreditation" RENAME TO "QualificationCenterAccreditation";

-- Rename columns in QualificationCenterAccreditation
ALTER TABLE "QualificationCenterAccreditation" RENAME COLUMN "certificateNumber" TO "accreditationDocumentId";
ALTER TABLE "QualificationCenterAccreditation" RENAME COLUMN "sessionNQADate" TO "naqCommissionDate";

-- Rename foreign key constraints for QualificationCenterAccreditation
ALTER TABLE "QualificationCenterAccreditation" DROP CONSTRAINT "Accreditation_professionalQualificationId_fkey";
ALTER TABLE "QualificationCenterAccreditation" ADD CONSTRAINT "QualificationCenterAccreditation_professionalQualificationId_fkey" FOREIGN KEY ("professionalQualificationId") REFERENCES "ProfessionalQualification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "QualificationCenterAccreditation" DROP CONSTRAINT "Accreditation_qualificationCenterId_fkey";
ALTER TABLE "QualificationCenterAccreditation" ADD CONSTRAINT "QualificationCenterAccreditation_qualificationCenterId_fkey" FOREIGN KEY ("qualificationCenterId") REFERENCES "QualificationCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Update the unique constraint name for QualificationCenterAccreditation
DROP INDEX IF EXISTS "Accreditation_professionalQualificationId_qualificationCenterId_certificateNumber_key";
CREATE UNIQUE INDEX "QualificationCenterAccreditation_professionalQualificationI_key" ON "QualificationCenterAccreditation"("professionalQualificationId", "qualificationCenterId", "accreditationDocumentId");
