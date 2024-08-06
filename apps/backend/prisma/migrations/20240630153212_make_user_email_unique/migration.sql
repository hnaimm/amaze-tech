/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex (Idempotent)
IF NOT EXISTS (
    SELECT 1 
    FROM INFORMATION_SCHEMA.STATISTICS 
    WHERE TABLE_SCHEMA = DATABASE() 
    AND TABLE_NAME = 'user' 
    AND INDEX_NAME = 'user_email_key'
) THEN
    CREATE UNIQUE INDEX `user_email_key` ON `user`(`email`);
END IF;