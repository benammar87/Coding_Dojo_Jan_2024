from flask_app import app
from flask import redirect, render_template, request, flash, session
from flask_app.models.recipes import Recipe
from flask_app.models.users import User


#VIEW Route
@app.route("/recipes/new")
def display_create_form():


    return render_template("new_recipe.html")

@app.route("/recipes/process" ,methods = ["POST"])
def process_new_recipe():

    print("===>", request.form)

    if not Recipe.validate_recipe(request.form):
        return redirect ("/recipes/new")
            
    data = {**request.form , "user_id" :session ["user_id"]}

    Recipe.create(data)
            
    return redirect("/recipes")

@app.route("/recipes")
def display_all_recipes():

     # grab the user id from session and put in a dictionary
    data = {"id": session["user_id"]}
    # grab the user by id from DB
    current_user = User.get_by_id(data)
   

    all_recipes_users = Recipe.get_all_with_users()

    
    return render_template("recipes.html",all_recipes=all_recipes_users,current_user=current_user.first_name)

@app.route("/recipes/<int:id>")
def show_one_recipe(id):
    recipe_id = {"id": id}
    recipe = Recipe.get_one_with_user(recipe_id)

     # grab the user id from session and put in a dictionary
    data = {"id": session["user_id"]}
    # grab the user by id from DB
    current_user = User.get_by_id(data)

    return render_template("one_recipe.html", recipe = recipe , current_user= current_user.first_name)

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")