/*
  Warnings:

  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" SET NOT NULL;

-- CreateTable
CREATE TABLE "Systemsettings" (
    "id" TEXT NOT NULL,
    "electionStatus" BOOLEAN NOT NULL DEFAULT false,
    "viewResultsStatus" BOOLEAN NOT NULL DEFAULT false,
    "electionStartDate" TEXT NOT NULL DEFAULT '7:00 AM',
    "electionEndDate" TEXT NOT NULL DEFAULT '3:00 PM',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Systemsettings_pkey" PRIMARY KEY ("id")
);
