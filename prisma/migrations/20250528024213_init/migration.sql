-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'USDT', 'USDC', 'EUR', 'EGP');

-- CreateEnum
CREATE TYPE "PreferredPaymentMethod" AS ENUM ('EYGPT_VODAFONE_CASH', 'EYGPT_INSTAPAY');

-- CreateTable
CREATE TABLE "member" (
    "memberID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "homeAddress" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sex" "Sex" NOT NULL,
    "preferredPaymentMethod" "PreferredPaymentMethod" NOT NULL,
    "relevantPaymentDetails" TEXT NOT NULL,
    "currency" "Currency" NOT NULL,
    "joinLLC" TIMESTAMP(3) NOT NULL,
    "memberPic" BYTEA NOT NULL,
    "idFrontPic" BYTEA NOT NULL,
    "idBackPic" BYTEA NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("memberID")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_email_key" ON "member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "member_mobileNumber_key" ON "member"("mobileNumber");
