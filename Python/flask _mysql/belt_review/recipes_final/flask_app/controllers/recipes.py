from flask_app import app
from flask_app.models.user import User
from flask_app.models.recipes import Recipes
from flask import render_template,session, redirect,request
from flask_app.config.mysqlconnection import connectToMySQL







@app.route('/dashboard')
def dashboard():
    if 'user_id' in session:
        
        print('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

        user = User.get_by_id({'id': session["user_id"]})
        
        recipes = Recipes.get_all()
        return render_template('dashboard.html', user=user, recipes=recipes)
    else:
        return redirect('/')
    



@app.route('/recipe_new')
def new_recipe():
    if 'user_id' in session:
        return render_template('create_recipe.html')
    return redirect('/')

@app.route('/add_new', methods=["POST"])
def add_recipe():
    if Recipes.validate(request.form):
        data = {
            **request.form,
            'user_id': session['user_id']
        }
        new_recipe_id = Recipes.add_recipe(data)  # Call add_recipe() instead of get_one()
        print(f"New Recipe ID: {new_recipe_id}")
        return redirect('/dashboard')  # Redirect to dashboard
    return redirect('/recipe_new')  # If validation fails, stay on the form page


@app.route('/recipes/<int:id>')
def show(id):
    if 'user_id' not in session:
        return redirect('/')

    user = User.get_by_id({'id': session["user_id"]})
    if not user:
        return redirect('/')  # If the user does not exist, redirect to home

    recipe = Recipes.get_one({'id': id})
    if not recipe:
        return redirect('/dashboard')  # If the recipe does not exist, redirect to dashboard

    return render_template("recipe_detail.html", recipe=recipe, user=user)




#  Route to show the edit form
@app.route('/recipes/edit/<int:id>')
def edit_recipe(id):
    if 'user_id' not in session:
        return redirect('/')
    
    user = User.get_by_id({'id': session["user_id"]})
    recipe = Recipes.get_one({'id': id})

    # Make sure only the owner can edit the recipe
    if not recipe or recipe.user_id != session["user_id"]:
        return redirect('/dashboard')

    return render_template("edit_recipe.html", recipe=recipe, user=user)

#  Route to process the edit form submission
@app.route('/recipes/update/<int:id>', methods=["POST"])
def update_recipe(id):
    if 'user_id' not in session:
        return redirect('/')

    if Recipes.validate(request.form):
        data = {
            **request.form,
            'id': id,
            'user_id': session["user_id"]
        }
        Recipes.update_recipe(data)
        return redirect('/dashboard')

    return redirect(f'/recipes/edit/{id}')

#  Route to delete a recipe
@app.route('/recipes/delete/<int:id>', methods=["POST"])
def delete_recipe(id):
    if 'user_id' not in session:
        return redirect('/')

    recipe = Recipes.get_one({'id': id})

    # Only the owner can delete the recipe
    if recipe and recipe.user_id == session["user_id"]:
        Recipes.delete_recipe({'id': id, 'user_id': session["user_id"]})

    return redirect('/dashboard')

