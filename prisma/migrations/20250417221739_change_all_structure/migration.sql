/*
  Warnings:

  - You are about to drop the column `author` on the `sermons` table. All the data in the column will be lost.
  - You are about to drop the column `bibleReference` on the `sermons` table. All the data in the column will be lost.
  - You are about to drop the column `paragraph` on the `sermons` table. All the data in the column will be lost.
  - You are about to drop the column `quotes` on the `sermons` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `sermons` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('parágrafo', 'header', 'citação', 'imagem');

-- AlterTable
ALTER TABLE "sermons" DROP COLUMN "author",
DROP COLUMN "bibleReference",
DROP COLUMN "paragraph",
DROP COLUMN "quotes",
DROP COLUMN "subtitle",
ADD COLUMN     "date" TEXT NOT NULL DEFAULT '2023-01-01',
ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'Sem descrição',
ADD COLUMN     "duration" TEXT NOT NULL DEFAULT '00:00',
ADD COLUMN     "eventType" TEXT NOT NULL DEFAULT 'Culto',
ADD COLUMN     "speaker" TEXT NOT NULL DEFAULT 'Desconhecido',
ADD COLUMN     "time" TEXT NOT NULL DEFAULT '00:00';

-- CreateTable
CREATE TABLE "Reference" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "sermonId" TEXT NOT NULL,

    CONSTRAINT "Reference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentSection" (
    "id" TEXT NOT NULL,
    "type" "ContentType" NOT NULL,
    "content" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "caption" TEXT NOT NULL,
    "sermonId" TEXT NOT NULL,

    CONSTRAINT "ContentSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_sermonId_fkey" FOREIGN KEY ("sermonId") REFERENCES "sermons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentSection" ADD CONSTRAINT "ContentSection_sermonId_fkey" FOREIGN KEY ("sermonId") REFERENCES "sermons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
