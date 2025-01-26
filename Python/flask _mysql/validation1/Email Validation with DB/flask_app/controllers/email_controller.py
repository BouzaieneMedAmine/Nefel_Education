from flask_app import app
from flask import render_template, request, redirect
from flask_app.models.email_model import Email


@app.route('/')
def index(): 
    return render_template("index.html")

@app.route('/dashboard')
def results():
    emails = Email.get_all()
    return render_template("results.html", emails = emails)

@app.route('/register', methods=['POST'])
def register():
    if not Email.validate_user(request.form) or not Email.is_valid(request.form) or  Email.ExsistEmail(request.form)    :
        return redirect('/')
    Email.create(request.form)
    return redirect('/dashboard')

@app.route("/del/<int:id>")
def delete(id):
    Email.delete({"id": id})
    return redirect("/dashboard")

# @app.route('/create', methods=['POST'])
# def create_valid():
#     if Email.is_valid(request.form):
#           Email.create(request.form)
#           return redirect('/result')
#     return redirect("/")

