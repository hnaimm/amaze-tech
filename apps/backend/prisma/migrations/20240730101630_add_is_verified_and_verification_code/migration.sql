-- AlterTable
ALTER TABLE `user` ADD COLUMN `is_verified` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `verification` (
    `userid` INTEGER NOT NULL,
    `verification_code` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `verification_userid_key`(`userid`),
    UNIQUE INDEX `verification_verification_code_key`(`verification_code`),
    INDEX `userid_idx`(`userid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `verification` ADD CONSTRAINT `verification_userid_fkey` FOREIGN KEY (`userid`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
