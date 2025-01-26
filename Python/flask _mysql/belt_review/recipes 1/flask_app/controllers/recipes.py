from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.users import Users
from flask_app.models.recipes import Recipes
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

@app.route('/new/recipes')
def newrecipes():
    if not "user_id" in session:
            return redirect('/')
    return render_template("newrecipes.html")

@app.route("/new/recipespost", methods=["POST"])
def handle_create_form():
    if not Recipes.validate(request.form):       
        return redirect('/new/recipes')     
    Recipes.create({**request.form,'users_id':session['user_id']})
    return redirect("/dashboard")



@app.route("/recipes/show/<int:idrecipes>")
def show_one(idrecipes):
    recipesone = Recipes.show_one({"idrecipes": idrecipes})
    return render_template("recipesshow.html", recipesone = recipesone)




@app.route("/recipes/edit/<int:idrecipes>")
def edit(idrecipes):
    recipes = Recipes.edit_one({"idrecipes": idrecipes})
    print("x"*88)
    return render_template("edit.html",recipes = recipes)


@app.route("/update/recipes/<int:id>", methods=['POST'])
def updaterecipes(id):
    data = {
        **request.form,
        "id": id
    }
    if not Recipes.validate(request.form):
        return redirect(f"/recipes/edit/{id}")
    Recipes.updaterecipes(data)
    return redirect("/dashboard")


@app.route("/recipes/del/<int:id>")
def delete(id):
    Recipes.delete({"id": id})
    return redirect("/dashboard")

