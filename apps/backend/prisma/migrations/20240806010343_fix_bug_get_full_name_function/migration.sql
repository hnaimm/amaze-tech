-- Update function getFullName

DROP FUNCTION IF EXISTS getFullName;

CREATE FUNCTION getFullName(email VARCHAR(255)) 
RETURNS VARCHAR(255)
BEGIN
    DECLARE fullName VARCHAR(255);
    
    SELECT CONCAT(firstName, ' ', lastName, ' (', email, ')') INTO fullName
    FROM user
    WHERE email  = email;
    
    RETURN fullName;
END;