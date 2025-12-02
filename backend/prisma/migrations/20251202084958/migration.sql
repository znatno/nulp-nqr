/*
  Warnings:

  - Made the column `status` on table `Application` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Application" ALTER COLUMN "status" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET NOT NULL;
