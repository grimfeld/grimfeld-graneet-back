/*
  Warnings:

  - The primary key for the `City` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[libelleAcheminement]` on the table `City` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "City_codeCommune_key";

-- AlterTable
ALTER TABLE "City" DROP CONSTRAINT "City_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "City_libelleAcheminement_key" ON "City"("libelleAcheminement");
