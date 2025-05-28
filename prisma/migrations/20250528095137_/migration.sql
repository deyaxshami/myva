/*
  Warnings:

  - A unique constraint covering the columns `[addressAddressID]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[paymentMethodPaymentMethodID]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Member_addressAddressID_key" ON "Member"("addressAddressID");

-- CreateIndex
CREATE UNIQUE INDEX "Member_paymentMethodPaymentMethodID_key" ON "Member"("paymentMethodPaymentMethodID");
