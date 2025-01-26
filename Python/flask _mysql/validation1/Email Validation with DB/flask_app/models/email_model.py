from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re	 
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 


class Email:
    def __init__(self,data):
        self.id = data["id"]
        self.emailname = data["emailname"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def create(cls, data):
        query = """INSERT INTO email (emailname) 
        VALUES (%(emailname)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @staticmethod
    def ExsistEmail(data):
        isfound = False
        query = "SELECT emailname FROM email WHERE emailname= %(emailname)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if len(result)>0:
            flash(" isfound email address!")     
            isfound=True
        return isfound


    @staticmethod
    def validate_user( user ):
        is_valid = True
        if not EMAIL_REGEX.match(user['emailname']): 
            flash("Invalid email address!")
            is_valid = False
        return is_valid
    
    
    @classmethod
    def get_all(cls):
        query="SELECT * FROM email;"
        #* results contain a list of dictionaires
        results = connectToMySQL(DATABASE).query_db(query)
        emails=[]
        for row in results: 
            emails.append(cls(row))
        return emails
        
    @classmethod
    def delete(cls, data):
        query="DELETE FROM email WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)



    @staticmethod
    def is_valid(inputs):
        is_valid = True # we assume this is true
        if len(inputs['emailname']) < 8:
            flash("email must be at least 3 characters.")
            is_valid = False            
        return is_valid
