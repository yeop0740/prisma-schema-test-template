-- CreateTable
CREATE TABLE "UserSolder" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "soldierId" INTEGER NOT NULL,

    CONSTRAINT "UserSolder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSolder_userId_soldierId_key" ON "UserSolder"("userId", "soldierId");

-- AddForeignKey
ALTER TABLE "UserSolder" ADD CONSTRAINT "UserSolder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSolder" ADD CONSTRAINT "UserSolder_soldierId_fkey" FOREIGN KEY ("soldierId") REFERENCES "Soldier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
