SELECT * FROM names.names;
SELECT name FROM names.names;
INSERT INTO names (name) 
VALUES('Didier Drogba');
SELECT name FROM names.names;
SET SQL_SAFE_UPDATES = 0;
DELETE FROM names 
WHERE id = 4 ;
DELETE FROM names 
WHERE id = 5 ;
SELECT * FROM names.names;
-- UPDATE
UPDATE names
SET name = 'Paula'
WHERE id = 1;





