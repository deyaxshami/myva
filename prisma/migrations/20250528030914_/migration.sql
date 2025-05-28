/*
  Warnings:

  - You are about to drop the column `homeAddress` on the `member` table. All the data in the column will be lost.
  - Added the required column `city` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `governorate` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `houseNumber` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `member` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EYGPTGovernorates" AS ENUM ('CAIRO', 'GIZA', 'ALEXANDRIA', 'PORT_SAID', 'SUEZ', 'DAKAHLIA', 'SHARQIA', 'QALYUBIA', 'KAFR_EL_SHEIKH', 'GHARBIA', 'MONUFIA', 'BEHEIRA', 'ISMAILIA', 'MINYA', 'BENI_SUEF', 'FAIYUM', 'ASSIUT', 'SOHAG', 'QENA', 'LUXOR', 'ASWAN', 'RED_SEA', 'NEW_VALLEY', 'MATROUH', 'NORTH_SINAI', 'SOUTH_SINAI', 'DAMIETTA');

-- AlterTable
ALTER TABLE "member" DROP COLUMN "homeAddress",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "governorate" TEXT NOT NULL,
ADD COLUMN     "houseNumber" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL,
ADD COLUMN     "zipCode" TEXT NOT NULL;
