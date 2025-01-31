/*
  Warnings:

  - A unique constraint covering the columns `[userId,pageId]` on the table `UserToPageMap` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Page" DROP CONSTRAINT "Page_userToPageMapId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userToPageMapId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "UserToPageMap_userId_pageId_key" ON "UserToPageMap"("userId", "pageId");

-- AddForeignKey
ALTER TABLE "UserToPageMap" ADD CONSTRAINT "UserToPageMap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToPageMap" ADD CONSTRAINT "UserToPageMap_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
