/*
  Warnings:

  - A unique constraint covering the columns `[codeCommune]` on the table `City` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "City_codeCommune_key" ON "City"("codeCommune");
