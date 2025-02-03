from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DATABASE


class Recipes:
    def __init__(self,data):
       self.id = data['id']
       self.name = data['name']
       self.discription = data['discription']
       self.instructions = data['instructions']
       self.underminute = data['underminute']
       self.date_cooked = data['date_cooked']
       self.created_at = data['created_at']
       self.updated_at = data['updated_at']
       self.user_id = data['user_id']
       self.postedBy=""





    @classmethod
    def create(cls,data):
        print (data)
       
        query = "INSERT INTO recipes (name ,discription,instructions ,underminute,date_cooked,user_id) VALUES (%(name)s,%(discription)s,%(instructions)s,%(underminute)s,%(date_cooked)s,%(user_id)s)"
        return connectToMySQL(DATABASE).query_db(query,data)
    



        



    @classmethod 
    def get_all(cls):
        query = """SELECT * FROM recipes
        JOIN users on recipes.user_id =users.id;"""
        result = connectToMySQL(DATABASE).query_db(query)
        all_recipes=[]
        for row in result:
            recipe =cls(row)
            recipe.postedBy =f"{row['first_name']}"
            all_recipes.append(recipe)
        return all_recipes
   
   
   
    @classmethod 
    def get_one(cls, data):
        query = "SELECT * FROM recipes WHERE id=%(id)s ;"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result
    

    @classmethod
    def update(cls,data):
        query = "UPDATE recipes SET name = %(name)s, discription = %(discription)s, instructions = %(instructions)s , underminute = %(underminute)s,date_cooked =%(date_cooked)s, user_id = %(user_id)s WHERE id = %(id)s; "
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result
    

    @classmethod
    def delete(cls,data):
        query = "DELETE FROM recipes WHERE id + %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result
    

    @staticmethod
    def validate(data):
        is_valid = True
        if len(data["name"]) < 2:
            flash("Recipe name must be at least 2 characters", "name")
            is_valid = False
        if len(data["description"]) < 2:
            flash("Description must be at least 2 characters", "description")
            is_valid = False
        return is_valid

    



