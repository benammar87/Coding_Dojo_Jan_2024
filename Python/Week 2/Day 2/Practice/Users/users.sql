SELECT * FROM users_schema.users;
-- SELECT first_name and last_name
SELECT first_name , last_name FROM users;
-- SELECT email  from first_user
SELECT email
FROM users
WHERE id = 1;
-- SELECT the last user

SELECT * FROM users LIMIT 3 OFFSET 2;
 -- CHANGE THE USER
UPDATE users SET last_name = 'pancake' WHERE id =3;

-- DELETE
DELETE FROM users WHERE id = 2;

-- GET BY first_name
SELECT first_name
FROM users;

-- BONUS
SELECT first_name FROM users
ORDER BY first_name DESC;



