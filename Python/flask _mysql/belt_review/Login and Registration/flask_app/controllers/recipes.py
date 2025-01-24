from flask_app import app
from flask_app.models.recipes import  Recipe
from flask_app.models.user import User
from flask import render_template,session,request,redirect
from flask_app.config.mysqlconnection import connectToMySQL





@app.route('/dashboard')
def dashboard():
    if  'user_id' in session:
        user=User.get_one_by_id({'id':session["user_id"]})
        print('user from dashboard route',user)
        posts = Recipe.get_all_post()
        return render_template('dashboard.html',user=user,posts=posts)
    else:
        return redirect('/')
    
    
  # **display route to display the create form
  
@app.route('/recipes/new')
def new_post():
    if  'user_id' in session:
        return render_template('create_recipe.html')
    return redirect('/')


# * action route for handling the create form
@app.route('/add/new',methods=["post"])
def add_new_post():
    if  Recipe.valide(request.form):
        data={
            **request.form,
            'user_id':session['user_id']
        }
        new=Recipe.add_new(data)
        print(new)
        return redirect('/dashboard')
    return redirect('/recipes/new')

@app.route('/dashboard/show_all', methods=['GET'])
def show_all():
    if 'user_id' in session:
        user=User.get_one_by_id({'id':session["user_id"]})
        posts = Recipe.get_all_post()
    return render_template('dashboard.html',user=user,posts=posts)
    

@app.route("/recipes/edit/<int:id>")
def edit(id):
    if  'user_id' in session:
        post=Recipe.get_by_id({'id':id})
        print(f"the post is {post}")
        return render_template('edit_recipe.html',post=post)
    return redirect ('/')


@app.route('/update/<int:id>',methods=['post'])
def update(id):
    if  Recipe.valide(request.form):
        data={
            'id':id,
            'name' : request.form['name'],
            'description' : request.form['description'],
            'instructions' : request.form['instructions'],
            'cook_date' : request.form['cook_date'],
            'under_30_min' : request.form['under_30_min']            
            }
        print("***************************************",data)
        if not Recipe.validate(request.form):
            return redirect(f"/recipes/edit/{id}")
        Recipe.update(data)
        return redirect("/dashboard")
    return redirect("/recipes/edit/"+str(id))


@app.route('/recipes/<int:id>')
def show(id):
    if  'user_id' in session:
        user=User.get_one_by_id({'id':session["user_id"]})
        post=Recipe.show_one({'id':id})
        return render_template("recipe_detail.html",post=post,user=user)
    return redirect('/')

@app.route('/delete/<int:id>',methods=["post"])
def delete(id):
    Recipe.delete_one({'id':id})
    return redirect('/dashboard')