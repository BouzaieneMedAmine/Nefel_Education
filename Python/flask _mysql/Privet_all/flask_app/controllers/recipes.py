from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user import User
from flask_app.models.recipes_model import Recipes




@app.route('/dashboard', methods=['GET', 'POST'])
def dashboard():
    if 'user_id' not in session:
        return redirect('/login')  # Redirect to login if not authenticated

    user = User.get_by_id({"id": session["user_id"]})  # Fetch logged-in user
    recipes = Recipes.get_all()  # Fetch all recipes

    return render_template('dashboard.html', recipes=recipes, user=user)



@app.route('/recipes/new', methods=['GET'])
def new_recipe_form():
    """Show form to create a new recipe"""
    if "user_id" not in session:
        flash("You must be logged in to create a recipe!", "error")
        return redirect('/')
    return render_template('create_recipe.html')

@app.route('/recipes/create', methods=['POST'])
def create_recipe():
    """Handle form submission and create a new recipe"""
    if "user_id" not in session:
        flash("You must be logged in to create a recipe!", "error")
        return redirect('/')

    if not Recipes.validate(request.form):  # Check validation
        return redirect('/recipes/new')

    data = {
        **request.form,
        "user_id": session["user_id"]
    }
    
    Recipes.create(data)  # Fixed function call
    flash("Recipe created successfully!", "success")
    return redirect('/dashboard')

@app.route('/recipes/one/<int:id>')
def show(id):
    data = {'id':id
            }
    return render_template("one_recipe.html",recipe=Recipes.get_one(data) )



    

    