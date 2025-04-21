/*
  Warnings:

  - The values [imagem] on the enum `ContentType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `alt` on the `ContentSection` table. All the data in the column will be lost.
  - You are about to drop the column `caption` on the `ContentSection` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `ContentSection` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ContentType_new" AS ENUM ('parágrafo', 'header', 'citação');
ALTER TABLE "ContentSection" ALTER COLUMN "type" TYPE "ContentType_new" USING ("type"::text::"ContentType_new");
ALTER TYPE "ContentType" RENAME TO "ContentType_old";
ALTER TYPE "ContentType_new" RENAME TO "ContentType";
DROP TYPE "ContentType_old";
COMMIT;

-- AlterTable
ALTER TABLE "ContentSection" DROP COLUMN "alt",
DROP COLUMN "caption",
DROP COLUMN "url";
