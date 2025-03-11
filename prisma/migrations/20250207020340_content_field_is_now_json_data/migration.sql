/*
  Warnings:

  - The `content` column on the `Page` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "UserToPageMap" DROP CONSTRAINT "UserToPageMap_pageId_fkey";

-- DropForeignKey
ALTER TABLE "UserToPageMap" DROP CONSTRAINT "UserToPageMap_userId_fkey";

-- AlterTable
ALTER TABLE "Page" DROP COLUMN "content",
ADD COLUMN     "content" JSONB NOT NULL DEFAULT '{}';

-- AddForeignKey
ALTER TABLE "UserToPageMap" ADD CONSTRAINT "UserToPageMap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToPageMap" ADD CONSTRAINT "UserToPageMap_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
