from flask import render_template, request, redirect
from flask_app import app
from flask_app.models.users import User



@app.route('/')
def index():
    return redirect('/users')


@app.route('/users')
def users():
    return render_template("users.html",users=User.get_all())


@app.route('/users/new')
def new():
    return render_template("new_user.html")

# @app.route('/users/one_user')
# def one_user():
#     return render_template("one_user.html")


# @app.route('/users/edit/<int:id>')
# def edit(id):
#     data={
#         "id": id
#     }
#     return render_template("edit_user.html", user =User.get_one(data))

@app.route('/user/create',methods=['POST'])
def create():
    print(request.form)
    User.save(request.form)
    return redirect('/users')


@app.route('/user/update/<int:id>', methods=['POST'])
def update(id):
    User.update({**request.form, 'id':id})
    return redirect('/users')


@app.route('/user/destroy/<int:id>')
def destroy(id):
    data = {'id':id
    }
    User.destroy(data)
    return redirect('/users')
@app.route('/user/edit/<int:id>')
def edit(id):
    data ={ 'id':id
        }
    return render_template("edit_user.html",user=User.get_one(data))

@app.route('/user/show/<int:id>')
def show(id):
    data ={'id':id
    }
    return render_template("show_user.html",user=User.get_one(data))