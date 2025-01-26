from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
# from datetime import date, datetime


class Recipes:
    
    
    def __init__(self,data):
        self.id = data["id"]
        self.name = data["name"]
        self.descrition = data["descrition"]
        self.instruction = data["instruction"]
        self.date_cooked = data["date_cooked"]
        self.underminute = data["underminute"]
        self.user_id = data["user_id"]      
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.first_name = data["first_name"]
        self.idrecipes = data["idrecipes"]
        




    @classmethod
    def create(cls, data):
        print("-------------------------------------------------xxx-----------------------------------------------------------")
        # xxx= session['user_id'] 
        query = """INSERT INTO recipesipes (name, descrition,instruction ,date_cooked,underminute,user_id) 
        VALUES (%(name)s, %(descrition)s, %(instruction)s, %(date_cooked)s, %(underminute)s, %(user_id)s );"""

        print("data from create method ;",data)
        return connectToMySQL(DATABASE).query_db(query,data)


    @classmethod
    def get_allrecipes(cls):
        query="SELECT users.id,recipesipes.id as idrecipes , recipesipes.name AS name ,recipesipes.underminute,users.first_name, recipesipes.underminute,  recipesipes.date_cooked, recipesipes.instruction,  recipesipes.descrition,  recipesipes.users_id ,  recipesipes.updated_at, recipesipes.created_at  FROM recipesipes JOIN users ON recipesipes.user_id = users.id ;"
        # query="SELECT users.id , recipesipes.name AS name ,recipesipes.underminute,users.first_name FROM recipesipes JOIN users ON recipesipes.users_id = users.id ;"
        # query="SELECT * FROM recipesipes;"
        #* results contain a list of dictionaires
        results = connectToMySQL(DATABASE).query_db(query)
        #* organize the results ( making a list of Expense instances instead of list of dictionaries)
        recipesipes=[]
        for row in results: 
            recipesipes.append(cls(row))
        return results

    @classmethod
    def show_one(cls, data):
        query="SELECT users.id,recipesipes.id as idrecipes , recipesipes.name AS name ,recipesipes.underminute,users.first_name, recipesipes.underminute,  recipesipes.date_cooked, recipesipes.instruction,  recipesipes.descrition,  recipesipes.users_id ,  recipesipes.updated_at, recipesipes.created_at  FROM recipesipes JOIN users ON recipesipes.users_id = users.id    where recipesipes.id = %(idrecipes)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        print("x"*90)

        if len(result)<1:
            return False
        return cls(result[0])
    
    
    @classmethod
    def edit_one(cls, data):
        # query = "SELECT * FROM recipesipes WHERE id = %(idrecipes)s;"
        query="SELECT users.id,recipesipes.id as idrecipes , recipesipes.name AS name ,recipesipes.underminute,users.first_name, recipesipes.underminute,  recipesipes.date_cooked, recipesipes.instruction,  recipesipes.descrition,  recipesipes.users_id ,  recipesipes.updated_at, recipesipes.created_at  FROM recipesipes JOIN users ON recipesipes.user_id = users.id    where recipesipes.id = %(idrecipes)s;"        
        result = connectToMySQL(DATABASE).query_db(query, data)
        print(result,"--------==================================")
        if len(result)<1:
            return False
        return cls(result[0])
    
    
    @classmethod
    def updaterecipes(cls,data):
        query = """ UPDATE recipesipes SET 
                    name = %(name)s ,
            descrition= %(descrition)s ,
            instruction= %(instruction)s  ,
            date_cooked= %(date_cooked)s  , 
            underminute= %(underminute)s 
                    WHERE id = %(id)s;
                """ 
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def delete(cls, data):
        query="DELETE FROM recipesipes WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)


    @staticmethod
    def validate(data):
        is_valid = True 
        if len(data['name'])<5:
            flash("name  is blank", "name")
            is_valid = False
        if len(data['descrition'])<5:
            flash("descrition is blank", "descrition")
            is_valid = False   
        if len(data['instruction'])<5:
            flash("instruction  is blank", "instruction")
            is_valid = False  
        return is_valid

        # if len(data['description'])<10:
        #     flash("Description must contain at least 10 characteres", "description")
        #     is_valid = False
        # if data['amount']=="" or float(data['amount'])<0.5:
        #     is_valid = False
        #     flash("Amount must be at least $0.5", "amount")
        # try:
        #     expense_date = datetime.strptime(data['expense_date'], "%Y-%m-%d").date()
        #     if expense_date > date.today():
        #         flash("Date must be in the past", "expense_date")
        #         is_valid=False
        # except ValueError:
        #     flash('invalid date format', "expense_date")
        #     is_valid = False