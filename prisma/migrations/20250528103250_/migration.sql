/*
  Warnings:

  - A unique constraint covering the columns `[iDCardCardID]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "iDCardCardID" TEXT;

-- CreateTable
CREATE TABLE "IDCard" (
    "cardID" TEXT NOT NULL,
    "frontPicID" TEXT NOT NULL,
    "backPicID" TEXT NOT NULL,

    CONSTRAINT "IDCard_pkey" PRIMARY KEY ("cardID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_iDCardCardID_key" ON "Member"("iDCardCardID");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_iDCardCardID_fkey" FOREIGN KEY ("iDCardCardID") REFERENCES "IDCard"("cardID") ON DELETE SET NULL ON UPDATE CASCADE;
