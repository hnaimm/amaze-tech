-- Create function to return full name of user

CREATE FUNCTION getFullName(userId INT) 
RETURNS VARCHAR(255)
BEGIN
    DECLARE fullName VARCHAR(255);
    
    SELECT CONCAT(firstName, ' ', lastName) INTO fullName
    FROM users
    WHERE id = userId;
    
    RETURN fullName;
END;