from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models.user import User
from flask_app.models.rec_model import Rec
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

@app.route('/new/rec')
def newrec():
    if not "user_id" in session:
            return redirect('/')
    return render_template("newrec.html")

@app.route("/new/recpost", methods=["POST"])
def handle_create_form():
    if not Rec.validate(request.form):       
        return redirect('/new/rec')     
    Rec.create({**request.form,'users_id':session['user_id']})
    return redirect("/dashboard")



@app.route("/rec/show/<int:idrec>")
def show_one(idrec):
    recone = Rec.show_one({"idrec": idrec})
    return render_template("Recshow.html", recone = recone)




@app.route("/rec/edit/<int:idrec>")
def edit(idrec):
    rec = Rec.edit_one({"idrec": idrec})
    print("x"*88)
    return render_template("edit.html",rec = rec)


@app.route("/update/rec/<int:id>", methods=['POST'])
def updaterec(id):
    data = {
        **request.form,
        "id": id
    }
    if not Rec.validate(request.form):
        return redirect(f"/rec/edit/{id}")
    Rec.updaterec(data)
    return redirect("/dashboard")


@app.route("/rec/del/<int:id>")
def delete(id):
    Rec.delete({"id": id})
    return redirect("/dashboard")

