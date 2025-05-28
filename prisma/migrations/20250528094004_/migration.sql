/*
  Warnings:

  - You are about to drop the `member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "member";

-- CreateTable
CREATE TABLE "Member" (
    "memberID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "privateEmail" TEXT NOT NULL,
    "WorkEmail" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sex" "Sex" NOT NULL,
    "currency" "Currency" NOT NULL,
    "joinLLC" TIMESTAMP(3) NOT NULL,
    "memberPic" TEXT NOT NULL,
    "addressAddressID" TEXT NOT NULL,
    "paymentMethodPaymentMethodID" TEXT NOT NULL,
    "iDCardCardID" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("memberID")
);

-- CreateTable
CREATE TABLE "IDCard" (
    "cardID" TEXT NOT NULL,
    "frontPicID" TEXT NOT NULL,
    "backPicID" TEXT NOT NULL,

    CONSTRAINT "IDCard_pkey" PRIMARY KEY ("cardID")
);

-- CreateTable
CREATE TABLE "Address" (
    "AddressID" TEXT NOT NULL,
    "memberID" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "governorate" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("AddressID")
);

-- CreateTable
CREATE TABLE "PaymentMethod" (
    "PaymentMethodID" TEXT NOT NULL,
    "preferredPaymentMethod" "PreferredPaymentMethod" NOT NULL,
    "relevantPaymentDetails" TEXT NOT NULL,

    CONSTRAINT "PaymentMethod_pkey" PRIMARY KEY ("PaymentMethodID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_privateEmail_key" ON "Member"("privateEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Member_WorkEmail_key" ON "Member"("WorkEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Member_mobileNumber_key" ON "Member"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Member_iDCardCardID_key" ON "Member"("iDCardCardID");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_addressAddressID_fkey" FOREIGN KEY ("addressAddressID") REFERENCES "Address"("AddressID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_paymentMethodPaymentMethodID_fkey" FOREIGN KEY ("paymentMethodPaymentMethodID") REFERENCES "PaymentMethod"("PaymentMethodID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_iDCardCardID_fkey" FOREIGN KEY ("iDCardCardID") REFERENCES "IDCard"("cardID") ON DELETE RESTRICT ON UPDATE CASCADE;
