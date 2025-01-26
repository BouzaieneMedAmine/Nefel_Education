from flask_app import app
from flask import render_template, request, redirect
from flask_app.models.dojo_model import Dojo



@app.route('/')
def index(): 
    return render_template("index.html")

@app.route('/create', methods=['POST'])
def create_valid():
    if Dojo.is_valid(request.form):
          Dojo.create(request.form)
          return redirect('/result')
    return redirect("/")

@app.route("/result")
def home():
    all_expenses = Dojo.get_all()
    return render_template("results.html", all_expenses = all_expenses)
