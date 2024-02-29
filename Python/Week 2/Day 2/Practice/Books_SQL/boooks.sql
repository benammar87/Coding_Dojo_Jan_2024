SELECT * FROM books_schema.books_has_users;
--  Retrieve all the users who favorited the 3rd book
SELECT * FROM users
LEFT JOIN books_has_users
ON users.id = books_has_users.user_id
LEFT JOIN books
ON books_has_users.book_id = books.id
WHERE books.id = 3 ;

delete from books_has_users
where(user_id=2)and(book_id=3);

SELECT * FROM users
LEFT JOIN books_has_users
ON users.id = books_has_users.user_id
LEFT JOIN books
ON books_has_users.book_id = books.id
WHERE users.id = 3 ;

SELECT * FROM users
LEFT JOIN books_has_users
ON users.id = books_has_users.user_id
LEFT JOIN books
ON books_has_users.book_id = books.id
WHERE books.id = 5 ;
