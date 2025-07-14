-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedBlogs" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "blogText" TEXT NOT NULL,
    "blogUrl" TEXT,
    "blogSummary" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedBlogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "User"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SavedBlogs_blogText_key" ON "SavedBlogs"("blogText");

-- CreateIndex
CREATE UNIQUE INDEX "SavedBlogs_userId_blogUrl_key" ON "SavedBlogs"("userId", "blogUrl");

-- AddForeignKey
ALTER TABLE "SavedBlogs" ADD CONSTRAINT "SavedBlogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkUserId") ON DELETE CASCADE ON UPDATE CASCADE;
