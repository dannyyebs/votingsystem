-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "phonenumber" TEXT NOT NULL,
    "hasVoted" BOOLEAN NOT NULL DEFAULT false,
    "chairperson" TEXT NOT NULL DEFAULT 'Not Voted',
    "viceChairperson" TEXT NOT NULL DEFAULT 'Not Voted',
    "executiveMember" TEXT NOT NULL DEFAULT 'Not Voted',
    "treasurer" TEXT NOT NULL DEFAULT 'Not Voted',
    "financialSecretary" TEXT NOT NULL DEFAULT 'Not Voted',
    "role" TEXT DEFAULT 'user',
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phonenumber_key" ON "User"("phonenumber");
