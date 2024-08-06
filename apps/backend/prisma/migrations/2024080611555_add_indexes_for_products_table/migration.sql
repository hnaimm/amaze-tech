-- CreateIndex for unit_price
IF NOT EXISTS (
    SELECT 1 
    FROM INFORMATION_SCHEMA.STATISTICS 
    WHERE TABLE_SCHEMA = DATABASE() 
    AND TABLE_NAME = 'product' 
    AND INDEX_NAME = 'index_unit_price'
) THEN
    CREATE INDEX `index_unit_price` ON `product`(`unit_price`);
END IF;

-- CreateIndex for color
IF NOT EXISTS (
    SELECT 1 
    FROM INFORMATION_SCHEMA.STATISTICS 
    WHERE TABLE_SCHEMA = DATABASE() 
    AND TABLE_NAME = 'product' 
    AND INDEX_NAME = 'index_color'
) THEN
    CREATE INDEX `index_color` ON `product`(`color`);
END IF;

-- CreateIndex for size
IF NOT EXISTS (
    SELECT 1 
    FROM INFORMATION_SCHEMA.STATISTICS 
    WHERE TABLE_SCHEMA = DATABASE() 
    AND TABLE_NAME = 'product' 
    AND INDEX_NAME = 'index_size'
) THEN
    CREATE INDEX `index_size` ON `product`(`size`);
END IF;
