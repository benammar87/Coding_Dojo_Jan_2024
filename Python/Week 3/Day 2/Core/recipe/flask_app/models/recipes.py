from flask_app.configs.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash


class Recipe:
    def __init__(self , data):
        self.id = data["id"]
        self.name = data["name"]
        self.description = data["description"]
        self.instructions = data["instructions"]
        self.made = data["made"]
        self.under = data["under"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]
        self.postedby=data["first_name"]


    @classmethod
    def create(cls , data):

        query = """
                INSERT INTO recipes (name, description, instructions, made , under , user_id)
                VALUES(%(name)s, %(description)s, %(instructions)s, %(made)s ,%(under)s , %(user_id)s);
                """
        
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_all_with_users(cls):

        query = """
                SELECT * FROM recipes JOIN users 
                ON recipes.user_id = users.id ;
                """
        return connectToMySQL(DATABASE).query_db(query)
    
    @classmethod
    def get_one_with_user(cls, data):
        
        query = """
                 SELECT * FROM recipes JOIN users 
                 ON recipes.user_id = users.id 
                 WHERE recipes.id = %(id)s ;
                """
        result=connectToMySQL(DATABASE).query_db(query , data)
        return cls(result[0])

    @staticmethod
    def validate_recipe(data):
        is_valid = True
        if len(data["name"]) < 1:
            is_valid = False
            flash("name is required !" ,"recipe")
        if len(data["description"]) < 1:
            is_valid = False
            flash("description is required !" ,"recipe")
        if len(data["instructions"]) < 1:
            is_valid = False
            flash("instructions is required !" ,"recipe")
        
        
        return is_valid
