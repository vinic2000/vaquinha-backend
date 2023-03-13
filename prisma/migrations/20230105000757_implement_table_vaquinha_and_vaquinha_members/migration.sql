-- AlterTable
ALTER TABLE "User" ADD COLUMN     "vaquinhaMembersId" TEXT;

-- CreateTable
CREATE TABLE "Vaquinha" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "userId" TEXT,
    "userCount" INTEGER NOT NULL,

    CONSTRAINT "Vaquinha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VaquinhaMembers" (
    "id" TEXT NOT NULL,
    "vaquinhaId" TEXT NOT NULL,

    CONSTRAINT "VaquinhaMembers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_vaquinhaMembersId_fkey" FOREIGN KEY ("vaquinhaMembersId") REFERENCES "VaquinhaMembers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaquinha" ADD CONSTRAINT "Vaquinha_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VaquinhaMembers" ADD CONSTRAINT "VaquinhaMembers_vaquinhaId_fkey" FOREIGN KEY ("vaquinhaId") REFERENCES "Vaquinha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
