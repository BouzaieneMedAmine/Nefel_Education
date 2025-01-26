from flask import Flask
app = Flask(__name__) #* create a flask application
app.secret_key = "super_secret_key"
DATABASE = "emaildb" #* global variable containing DB name to call it in every file we need it