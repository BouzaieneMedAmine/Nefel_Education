from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re
from datetime import date , datetime 
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 





class User:
    def __init__(self,data):
        self.id = data['id']
        self.username = data['username']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def register(cls, data):
        query= "INSERT INTO users (username, email, password) VALUES (%(username)s, %(email)s, %(password)s);"
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            return cls (result[0])
        return False
    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            return cls (result[0])
        return False
    
    @staticmethod
    def validation (data):
        is_valid = True
        if len(data['username'])<3:
            is_valid =False
            flash ("Name must contain at least 3 characters", "username")
        if not EMAIL_REGEX.match(data['email']):
            flash ("Emali not valid", "email")
            is_valid = False
        elif User.get_by_email({'email': data['email']}):
            flash ("Email already teken", "email")
            is_valid= False
        if len(data['password'])<8:
            flash("password less the 8 char", "password")
            is_valid=False
        elif data['password'] != data['confirm_password']:
            flash ("Password must mutch", "password")
            is_valid=False
        return is_valid     


        

    @staticmethod
    def validate(data):
        is_valid =True
        if len(data['description'])<10:
            flash("Description must contain at least 10 charecters", "description")
            is_valid = False
        if data['amount']== "" or float(data['amount']) < 0.5:
            is_valid = False
            flash ("Amount must be at least 0.5$", "amount")
        try:
            expense_date = datetime.strptime(data['expense_date'], "%y-%m-%d").date()
            if expense_date> date.today():
                flash("Date must be in the past", "expense_date")
                is_valid=False
        except ValueError:
            flash('Invalid date format', "expense_date")
            is_valid = False

        return is_valid
