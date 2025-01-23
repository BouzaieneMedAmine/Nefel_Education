from flask import render_template, request, redirect
from flask_app import app

from flask_app.models.dojos import Dojos




@app.route('/')
def index():
    return redirect('/dojos')



@app.route('/dojos')
def dojo():
    dojo=Dojos.get_all()

    return render_template("dojos.html", dojo = dojo)





# app.route('/dojos/create',methods=['POST'])
# def create():
#     print(request.form)
#     data = {
#         "name": request.form["name"]
#     }
#     Dojos.save(data)
#     return redirect ('/dojos')
@app.route('/dojos/create', methods=['POST'])
def create_dojo():
    Dojos.save(request.form)
    return redirect('/dojos')



@app.route('/dojos/update/<int:id>', methods=['POST'])
def update(id):
    Dojos.update({**request.form, 'id':id})
    return redirect('/users')



@app.route('/dojos/destroy/<int:id>')
def destroy(id):
    data = {'id':id
    }
    Dojos.destroy(data)
    return redirect('/dojos')


@app.route('/dojos/edit/<int:id>')
def edit(id):
    data ={ 'id':id
           }
    return render_template("edit_user.html",dojos=Dojos.get_one(data))



@app.route('/one_dojos/<int:id>')
def show(id):
    


    data ={'id':id
    }
    return render_template("one_dojos.html",dojo = Dojos.get_one_with_ninjas(data))
