/*
  Warnings:

  - You are about to drop the column `email` on the `member` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[privateEmail]` on the table `member` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[WorkEmail]` on the table `member` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `WorkEmail` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `privateEmail` to the `member` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "member_email_key";

-- AlterTable
ALTER TABLE "member" DROP COLUMN "email",
ADD COLUMN     "WorkEmail" TEXT NOT NULL,
ADD COLUMN     "privateEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "member_privateEmail_key" ON "member"("privateEmail");

-- CreateIndex
CREATE UNIQUE INDEX "member_WorkEmail_key" ON "member"("WorkEmail");
