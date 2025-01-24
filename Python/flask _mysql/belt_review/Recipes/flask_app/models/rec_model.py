from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
# from datetime import date, datetime


class Rec:
    
    
    def __init__(self,data):
        self.id = data["id"]
        self.name = data["name"]
        self.discription = data["discription"]
        self.instrution = data["instrution"]
        self.date_coced = data["date_coced"]
        self.underminute = data["underminute"]
        self.users_id = data["users_id"]      
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.first_name = data["first_name"]
        self.idrec = data["idrec"]
        




    @classmethod
    def create(cls, data):
        print("-------------------------------------------------xxx-----------------------------------------------------------")
        # xxx= session['user_id'] 
        query = """INSERT INTO recipes (name, discription,instrution ,date_coced,underminute,users_id) 
        VALUES (%(name)s, %(discription)s, %(instrution)s, %(date_coced)s, %(underminute)s, %(users_id)s );"""

        print("data from create method ;",data)
        return connectToMySQL(DATABASE).query_db(query,data)


    @classmethod
    def get_allrecipes(cls):
        query="SELECT users.id,recipes.id as idrec , recipes.name AS name ,recipes.underminute,users.first_name, recipes.underminute,  recipes.date_coced, recipes.instrution,  recipes.discription,  recipes.users_id ,  recipes.updated_at, recipes.created_at  FROM recipes JOIN users ON recipes.users_id = users.id ;"
        # query="SELECT users.id , recipes.name AS name ,recipes.underminute,users.first_name FROM recipes JOIN users ON recipes.users_id = users.id ;"
        # query="SELECT * FROM recipes;"
        #* results contain a list of dictionaires
        results = connectToMySQL(DATABASE).query_db(query)
        #* organize the results ( making a list of Expense instances instead of list of dictionaries)
        recipes=[]
        for row in results: 
            recipes.append(cls(row))
        return recipes

    @classmethod
    def show_one(cls, data):
        query="SELECT users.id,recipes.id as idrec , recipes.name AS name ,recipes.underminute,users.first_name, recipes.underminute,  recipes.date_coced, recipes.instrution,  recipes.discription,  recipes.users_id ,  recipes.updated_at, recipes.created_at  FROM recipes JOIN users ON recipes.users_id = users.id    where recipes.id = %(idrec)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        print("x"*90)

        if len(result)<1:
            return False
        return cls(result[0])
    
    
    @classmethod
    def edit_one(cls, data):
        # query = "SELECT * FROM recipes WHERE id = %(idrec)s;"
        query="SELECT users.id,recipes.id as idrec , recipes.name AS name ,recipes.underminute,users.first_name, recipes.underminute,  recipes.date_coced, recipes.instrution,  recipes.discription,  recipes.users_id ,  recipes.updated_at, recipes.created_at  FROM recipes JOIN users ON recipes.users_id = users.id    where recipes.id = %(idrec)s;"        
        result = connectToMySQL(DATABASE).query_db(query, data)
        print(result,"--------==================================")
        if len(result)<1:
            return False
        return cls(result[0])
    
    
    @classmethod
    def updaterec(cls,data):
        query = """ UPDATE recipes SET 
                    name = %(name)s ,
            discription= %(discription)s ,
            instrution= %(instrution)s  ,
            date_coced= %(date_coced)s  , 
            underminute= %(underminute)s 
                    WHERE id = %(id)s;
                """ 
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def delete(cls, data):
        query="DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)


    @staticmethod
    def validate(data):
        is_valid = True 
        if len(data['name'])<5:
            flash("name  is blank", "name")
            is_valid = False
        if len(data['discription'])<5:
            flash("discription is blank", "discription")
            is_valid = False   
        if len(data['instrution'])<5:
            flash("instrution  is blank", "instrution")
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