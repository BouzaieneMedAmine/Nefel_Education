from flask import Flask,  render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')
# def index():
#     return render_template("index.html")

@app.route('//)
def style():
    return render_template("style.css")

@app.route('/<int:x>/<int:y>')
def change_color(x, y):
    if x > y:
     return render_template("color3")
 
    else:
     return render_template("color4")
 





if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

