from flask_app.config.mysqlconnection import connectToMySQL


DATABASE = 'dojos_and_ninjas_schema'




class Ninjas:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']



    @classmethod
    def update(cls, data):
        query ="UPDATE ninjas SET first_name=%(name)s,last_name=%(last_name)s,age=%(age)s,dojo_id=%(dojo_id)s"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query,data)
    

    @classmethod
    def get_dojo_s_ninja(cls,data):
        query="SELECT * FROM ninjas where dojo_id =%(dojo_id)s; "
        results = connectToMySQL(DATABASE).query_db(query,data)
        return  results
    
    @classmethod
    def create_ninja(cls, data):
        query ="INSERT INTO ninjas (first_name,last_name,age,dojo_id) VALUES (%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s)"
        return connectToMySQL('dojos_and_ninjas_schema').query_db(query,data)
    

    