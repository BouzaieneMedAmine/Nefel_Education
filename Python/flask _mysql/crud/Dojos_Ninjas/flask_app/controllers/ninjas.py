from flask import render_template, request, redirect
from flask_app import app

from flask_app.models.ninjas import Ninjas

from flask_app.models.dojos import Dojos


@app.route('/ninjas')
def ninja():
    dojo=Dojos.get_all()

    return render_template("ninjas.html", dojo=dojo)


@app.route('/ninjas/create', methods=['POST'])
def create():
    print(request.form)
    Ninjas.create_ninja(request.form)
        
    return redirect('/')

