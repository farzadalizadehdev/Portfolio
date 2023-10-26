-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "image" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "employer" TEXT NOT NULL,
    "technology" TEXT NOT NULL,
    "url" TEXT,
    "tags" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
