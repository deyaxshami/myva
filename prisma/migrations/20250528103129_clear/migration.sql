/*
  Warnings:

  - You are about to drop the column `iDCardCardID` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the `IDCard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_iDCardCardID_fkey";

-- DropIndex
DROP INDEX "Member_iDCardCardID_key";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "iDCardCardID";

-- DropTable
DROP TABLE "IDCard";
