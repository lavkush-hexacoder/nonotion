-- CreateIndex
CREATE INDEX "Page_userToPageMapId_idx" ON "Page"("userToPageMapId");

-- CreateIndex
CREATE INDEX "User_userToPageMapId_idx" ON "User"("userToPageMapId");

-- CreateIndex
CREATE INDEX "userId_pageId" ON "UserToPageMap"("userId", "pageId");

-- CreateIndex
CREATE INDEX "userId" ON "UserToPageMap"("userId");
