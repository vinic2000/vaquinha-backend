/*
  Warnings:

  - You are about to drop the column `userCount` on the `Vaquinha` table. All the data in the column will be lost.
  - Added the required column `memberCount` to the `Vaquinha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vaquinha" DROP COLUMN "userCount",
ADD COLUMN     "memberCount" INTEGER NOT NULL;
