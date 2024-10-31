/*
  Warnings:

  - Changed the type of `authorID` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "authorID",
ADD COLUMN     "authorID" INTEGER NOT NULL;
