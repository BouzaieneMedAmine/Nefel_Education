from flask_app.config.mysqlconnection import connectToMySQL

DATABASE = 'dojos_and_ninjas_schema'


class Dojos:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas =[]


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos ;"
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)

        return results   
   
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM dojos WHERE id = %(id)s"
        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        
        return cls(result[0])
    
    @classmethod
    def update(cls, data):
        query ="UPDATE dojos SET name=%(name)s"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query,data)
    
    @classmethod
    def destroy(cls, data):
        query= 'DELETE FROM users WHERE id =%(id)s'
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
    

    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojos (name) VALUES %(name)s"
        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query,data)
        return result
    
    @classmethod
    def get_one_with_ninjas(cls, dojo_id):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, dojo_id)
        dojo = cls(results[0])
        dojo.ninjas = []
        for row in results:
            if row['ninjas.id']:
                dojo.ninjas.append({
                    "id": row['ninjas.id'],
                    "first_name": row['first_name'],
                    "last_name": row['last_name']
                })
        return dojo


    