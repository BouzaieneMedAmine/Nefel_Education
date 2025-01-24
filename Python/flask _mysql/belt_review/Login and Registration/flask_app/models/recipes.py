from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import db
from flask import flash
from datetime import date, datetime





class Recipe:
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.description=data['description']
        self.instructions=data['instructions']
        self.cook_date=data['cook_date']
        self.time=data['time']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
        self.user_id=data['user_id']
        self.creator =""
        
        
    @classmethod
    def add_new(cls,data):
        query="""insert into recipes (name,description,instructions,cook_date,under_30_min,user_id) values (%(name)s,%(description)s,%(instructions)s,%(cook_date)s,%(under_30_min)s,%(user_id)s)"""
        resulat=connectToMySQL("recipes_schema").query_db(query,data)
        return resulat
    
    
    @classmethod
    def get_all_post(cls):
        query='select * from recipes join users on recipes.user_id = users.id ;'
        res=connectToMySQL("recipes_schema").query_db(query)
        liste_posts=[]
        return res
    
    @classmethod
    def get_by_id(cls,data):
        query='select* from recipes where id=%(id)s ;'
        res=connectToMySQL("recipes_schema").query_db(query,data)
        return res[0]
    
    @classmethod
    def get_all(cls):
        query="""SELECT * FROM recipe
            JOIN users ON expenses.user_id = users.id;"""
        #* results contain a list of dictionaires
        results = connectToMySQL(db).query_db(query)
        #TODO : so we will convert these dictionaries to an instance of class Expense
        #* organize the results ( making a list of Expense instances instead of list of dictionaries)
        recipes=[] #* initialise the new list to an empty list 
        for row in results: #* loop through results(to separate each dictionary)
            recipe =cls(row)
            recipe.creator = row['name']
            recipe.append(recipe) #* append the instance of the dictrionary to our new list 
        return recipes #* return the new list 
    

    
    
    @classmethod
    def update(cls,data):
        query="UPDATE recipes SET name = %(name)s, description = %(description)s,instructions = %(instructions)s, cook_date = %(cook_date)s,under_30_min=%(under_30_min)s WHERE id=%(id)s;"
        res=connectToMySQL("recipes_schema").query_db(query,data)
        return res
    
    
    @classmethod
    def show_one(cls,data):
        query='select* from recipes join users on recipes.user_id = users.id where recipes.id=%(id)s ;'
        resulat=connectToMySQL("recipes_schema").query_db(query,data)
        return resulat[0]
        # if len(result)<1:
        #         return False
        #     recipes = cls(result[0])
        #     recipe.creator = result[0]['name']
        #     return recipes
    
    
    @classmethod
    def delete_one(cls,data):
        query="""delete from recipes where id=%(id)s;"""
        return connectToMySQL("recipes_schema").query_db(query,data)
    
    
    @staticmethod
    def valide(data):
        is_valid=True
        if len(data["name"])<2:
            flash("name must be at least 2 characteres","name")
            is_valid=False
        if len(data["description"])<2:
            flash("description  must be at least 2 characteres","description")
            is_valid=False
        if len(data["instructions"])<2:
            flash(" instructions must be at least 2 characteres","instructions")
            is_valid=False
            
        try:
            cook_date = datetime.strptime(data['cook_date'], "%Y-%m-%d").date()
            if cook_date > date.today():
                flash("Date must be in the past", "cook_date")
                is_valid=False
        except ValueError:
            flash('invalid date format', "cook_date")
            is_valid = False
        return is_valid
        
        