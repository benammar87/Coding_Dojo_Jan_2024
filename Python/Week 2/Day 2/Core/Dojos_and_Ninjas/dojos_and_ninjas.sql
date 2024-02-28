SELECT * FROM dojos_and_ninjas.ninjas;
-- Retrieve all the ninjas from the first dojo
SELECT * FROM ninjas JOIN dojos ON dojos.id = ninjas.dojo_id where dojos.id=4; 
-- Retrieve all the ninjas from the last dojo
SELECT first_name FROM ninjas JOIN dojos ON dojos.id = ninjas.dojo_id where dojos.id=6;

-- Query: Retrieve the last ninja's dojo
SELECT * from dojos where id=(SELECT dojo_id
FROM ninjas
ORDER BY id desc limit 1);
/*Use a JOIN to retrieve the ninja with id 6 as well as the data from its dojo. Be sure to do this in one query using a 
join statement.*/
SELECT * FROM dojos 
JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE ninjas.id=6;
/*Use a JOIN to retrieve all the ninjas as well as that ninja's dojo, note, you will see repeated data on dojos as a dojo 
can have many ninjas!*/
SELECT * FROM ninjas 
JOIN dojos ON dojos.id = ninjas.dojo_id ;
