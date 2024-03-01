SELECT * FROM friendship_schema.freindships;
INSERT into freindships (user_id , friend_id ) values ( 6,7 ) , (6 , 9) , (6 , 11 ) ;
INSERT into freindships (user_id , friend_id ) values ( 7,6 ) , (7 , 8) , (7 , 10 ) ;
INSERT into freindships (user_id , friend_id ) values ( 8,7 ) , (8, 10) ;
INSERT into freindships (user_id , friend_id ) values ( 9,8 )  ;
INSERT into freindships (user_id , friend_id ) values ( 10,6 ) , (10, 11) ;
INSERT into freindships (user_id , friend_id ) values ( 11,7 ) , (11, 8) ;
SELECT * from users 
 JOIN freindships ON users.id=freindships.user_id 
 LEFT JOIN users as users2 ON freindships.id = freindships.friend_id;







