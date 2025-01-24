from flask_app import app #* import app from __init__.py file
#! Always remember to import all controllers here 
from flask_app.controllers import recipes
from flask_app.controllers import users 
 

if __name__ == '__main__':
    app.run(debug=True)
