/*
  Warnings:

  - The primary key for the `tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `tag` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tag` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `tag` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `tag` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tag` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `id`,
    DROP COLUMN `updatedAt`,
    MODIFY `name` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`name`);

-- CreateIndex
CREATE UNIQUE INDEX `name` ON `tag`(`name`);
