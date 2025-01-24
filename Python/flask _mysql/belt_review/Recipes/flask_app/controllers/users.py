from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user import User
from flask_app.models.rec_model import Rec
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

# ======================INDEX PAGE===================
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect('/')
    user = User.get_by_id({'id':session['user_id']})
    allrecipes = Rec.get_allrecipes()
    return render_template("dashboard.html", user = user, allrecipes = allrecipes)



# =========================REGISTER===================
@app.route('/users/create', methods=['POST'])
def register():
    # 1- Get the form data from the front-end
     # 2- validate the form data
        # - if data is valid
    if User.validate(request.form):
        # Secure password = hash the password using bcrypt
        pw_hash = bcrypt.generate_password_hash(request.form['password'])
        data = {
            **request.form,
            'password':pw_hash
        }
        # create the new user
        user_id = User.create(data)
        session['user_id'] = user_id
        return redirect('/dashboard')
    # - if data not valid
    return redirect('/')


# ========================LOGIN======================
@app.route('/login', methods=['POST'])
def login():
    # 1 - Get user by email
    user  = User.get_by_email({'email':request.form['email']})
    # if user not exist : redirect to index and display errors 
    if not user :
        flash("Invalid Email/Password", "login")
        return redirect('/')
    # if user exist : check password
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash("Invalid Email/Password", "login")
        return redirect('/')
    session['user_id'] = user.id
    return redirect('/dashboard')






# ========================LOGOUT=======================
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')
