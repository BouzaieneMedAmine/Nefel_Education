from flask_app import app 
from flask import render_template, request, session, redirect, flash
from flask_app.models.user import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route("/")
def index():
    return render_template ('/index.html')



@app.route("/register", methods=['post'])
def register():
    if User.validation(request.form):
        pw_hash = bcrypt.generate_password_hash(request.form["password"])
        data={
            **request.form,
            "password": pw_hash
        }
        user_id= User.register(data)
        session['user_id'] = user_id
        return redirect ("/expenses")

    return redirect ("/")

@app.route("/login", methods=['post'])
def login():
    user = User.get_by_email({'email': request.form['email']})
    if not user:
        flash("Invalid credentials", "login")
        return redirect('/')
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash("Invalid credentials", "login")
        return redirect('/')
    session['user_id']  = user.id
    return redirect('/expenses')

@app.route("/logout", methods= ['post'])
def logout ():
    session.clear()
    return redirect('/')
    




