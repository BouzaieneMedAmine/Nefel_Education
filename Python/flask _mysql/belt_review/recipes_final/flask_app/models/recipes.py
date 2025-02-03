from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
from datetime import date, datetime

class Recipes:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.under_30_min = data['under_30_min']
        self.date_cooked = data['date_cooked']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.creator = ""

    @classmethod
    def add_recipe(cls, data):
        query = """INSERT INTO recipes (name, description, instructions, under_30_min, date_cooked, user_id)
        VALUES (%(name)s, %(description)s, %(instructions)s, %(under_30_min)s, %(date_cooked)s, %(user_id)s);"""
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_all(cls):
        print('Fetching all recipes...')
        query = """
            SELECT recipes.*, users.first_name, users.last_name 
            FROM recipes
            JOIN users ON recipes.user_id = users.id;
        """
        result = connectToMySQL(DATABASE).query_db(query)

        if not result:
            return []

        recipes = []
        for row in result:
            recipe = cls(row)
            recipe.creator = f"{row['first_name']} {row['last_name']}"
            recipes.append(recipe)

        return recipes

    @classmethod
    def get_one(cls, data):
        query = """SELECT recipes.*, users.first_name, users.last_name 
                   FROM recipes
                   JOIN users ON recipes.user_id = users.id
                   WHERE recipes.id = %(id)s;"""
        results = connectToMySQL(DATABASE).query_db(query, data)
        return cls(results[0]) if results else None

    @classmethod
    def update_recipe(cls, data):
        query = """UPDATE recipes SET
        name = %(name)s,
        description = %(description)s,
        instructions = %(instructions)s,
        under_30_min = %(under_30_min)s,
        date_cooked = %(date_cooked)s
        WHERE id = %(id)s AND user_id = %(user_id)s;"""
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete_recipe(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s AND user_id = %(user_id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    @staticmethod 
    def validate(data):
        is_valid = True
        if len(data["name"]) < 2:
            flash("Name must be at least 2 characters.", "name")
            is_valid = False
        if len(data["description"]) < 2:
            flash("Description must be at least 2 characters.", "description")
            is_valid = False
        if len(data["instructions"]) < 2:
            flash("Instructions must be at least 2 characters.", "instructions")
            is_valid = False

        # Validate date_cooked
        if "date_cooked" in data:
            try:
                cook_date = datetime.strptime(data['date_cooked'], "%Y-%m-%d").date()
                if cook_date > date.today():
                    flash("Date must be in the past.", "date_cooked")
                    is_valid = False
            except ValueError:
                flash("Invalid date format.", "date_cooked")
                is_valid = False
        else:
            flash("Date is required.", "date_cooked")
            is_valid = False

        return is_valid
