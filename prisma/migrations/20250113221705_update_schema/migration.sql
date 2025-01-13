/*
  Warnings:

  - You are about to drop the column `isMainLocation` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Location` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "isMainLocation",
DROP COLUMN "latitude",
DROP COLUMN "longitude";
