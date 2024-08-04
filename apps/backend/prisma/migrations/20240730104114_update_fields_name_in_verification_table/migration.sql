/*
  Warnings:

  - You are about to drop the column `userid` on the `verification` table. All the data in the column will be lost.
  - You are about to drop the column `verification_code` on the `verification` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `verification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `verification` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `verification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `verification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `verification` DROP FOREIGN KEY `verification_userid_fkey`;

-- DropIndex
DROP INDEX `verification_verification_code_key` ON `verification`;

-- AlterTable
ALTER TABLE `verification` DROP COLUMN `userid`,
    DROP COLUMN `verification_code`,
    ADD COLUMN `code` VARCHAR(255) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `verification_email_key` ON `verification`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `verification_code_key` ON `verification`(`code`);

-- CreateIndex
CREATE INDEX `email_idx` ON `verification`(`email`);

-- AddForeignKey
ALTER TABLE `verification` ADD CONSTRAINT `verification_email_fkey` FOREIGN KEY (`email`) REFERENCES `user`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
