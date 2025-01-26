from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash


class Dojo:
    def __init__(self,data):
        self.id = data["id"]
        self.name = data["name"]
        self.location = data["location"]
        self.language = data["language"]
        self.comment = data["comment"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def create(cls, data):
        query = """INSERT INTO dojos (name, location, language, comment) 
        VALUES (%(name)s, %(location)s, %(language)s, %(comment)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_all(cls):
        query="SELECT *from dojos where id= ( SELECT id FROM dojos ORDER BY id DESC LIMIT 1  );"
        #* results contain a list of dictionaires
        results = connectToMySQL(DATABASE).query_db(query)
        #* organize the results ( making a list of Expense instances instead of list of dictionaries)
        expenses=[]
        for row in results: 
            expenses.append(cls(row))
        return expenses
    
    # We do need to take in a parameter to represent our burger
    @staticmethod
    def is_valid(inputs):
        is_valid = True # we assume this is true
        if len(inputs['name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False  
        if len(inputs['language']) < 3:
            flash("choose a language")
            is_valid = False     
        if len(inputs['location']) < 3:
            flash("choose  location")
            is_valid = False  
        if len(inputs['comment']) < 3:
            flash(" the comment must be at   3 characters.")
            is_valid = False           
        return is_valid