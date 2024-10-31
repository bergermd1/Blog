-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "isAuthor" BOOLEAN NOT NULL,
    "hash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isPublished" BOOLEAN NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
