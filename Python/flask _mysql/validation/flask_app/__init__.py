from flask import Flask
app = Flask(__name__) 
app.secret_key = "super_secret_key"
DATABASE = "expenses_tracker_schema"