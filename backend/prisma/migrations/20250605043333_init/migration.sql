-- CreateTable
CREATE TABLE "Profession" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Profession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Qualification" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "professionId" INTEGER NOT NULL,

    CONSTRAINT "Qualification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profession_code_key" ON "Profession"("code");

-- AddForeignKey
ALTER TABLE "Qualification" ADD CONSTRAINT "Qualification_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
