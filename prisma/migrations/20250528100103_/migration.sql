/*
  Warnings:

  - The primary key for the `Address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AddressID` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `memberID` on the `Address` table. All the data in the column will be lost.
  - The required column `addressID` was added to the `Address` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_addressAddressID_fkey";

-- AlterTable
ALTER TABLE "Address" DROP CONSTRAINT "Address_pkey",
DROP COLUMN "AddressID",
DROP COLUMN "memberID",
ADD COLUMN     "addressID" TEXT NOT NULL,
ADD CONSTRAINT "Address_pkey" PRIMARY KEY ("addressID");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_addressAddressID_fkey" FOREIGN KEY ("addressAddressID") REFERENCES "Address"("addressID") ON DELETE RESTRICT ON UPDATE CASCADE;
