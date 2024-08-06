-- CreateTable
CREATE TABLE IF NOT EXISTS IF NOT EXISTS `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `image_link` TEXT NULL,
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE IF NOT EXISTS IF NOT EXISTS `inventory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,

    INDEX `productId`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE IF NOT EXISTS `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `sku` VARCHAR(255) NOT NULL,
    `unit_price` DECIMAL(10, 0) NOT NULL,
    `currency` VARCHAR(10) NOT NULL,
    `image_link` TEXT NOT NULL,
    `color` VARCHAR(255) NULL,
    `size` VARCHAR(255) NULL,
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `categoryId` INTEGER NOT NULL,

    INDEX `categoryId`(`categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE IF NOT EXISTS `tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inventory` ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;



-- Make foregin keys idempotent
DELIMITER $$

CREATE PROCEDURE `add_inventory_foreign_key`()
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS 
        WHERE CONSTRAINT_SCHEMA = DATABASE() 
        AND CONSTRAINT_NAME = 'inventory_ibfk_1'
    ) THEN
        ALTER TABLE `inventory` 
        ADD CONSTRAINT `inventory_ibfk_1` 
        FOREIGN KEY (`productId`) REFERENCES `product`(`id`) 
        ON DELETE RESTRICT ON UPDATE RESTRICT;
    END IF;
END $$

CALL `add_inventory_foreign_key`();
DROP PROCEDURE `add_inventory_foreign_key`;

DELIMITER ;

-- AddForeignKey
DELIMITER $$

CREATE PROCEDURE `add_product_foreign_key`()
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS 
        WHERE CONSTRAINT_SCHEMA = DATABASE() 
        AND CONSTRAINT_NAME = 'product_ibfk_1'
    ) THEN
        ALTER TABLE `product` 
        ADD CONSTRAINT `product_ibfk_1` 
        FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) 
        ON DELETE RESTRICT ON UPDATE RESTRICT;
    END IF;
END $$

CALL `add_product_foreign_key`();
DROP PROCEDURE `add_product_foreign_key`;

DELIMITER ;