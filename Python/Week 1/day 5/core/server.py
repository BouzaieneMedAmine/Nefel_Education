from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)  


app.secret_key = 'keep it secret, keep it safe' 

@app.route('/')
def index():
    session['num'] = 1
    return render_template("index.html")

@app.route('/count', methods=['POST'])
def increase():
    print("Got Post Info") 
    session['num'] = session['num']
    
    session['num'] =session['num']+ 1
    
    return redirect('/count')
@app.route('/count')
def main():
    return render_template('index.html', pyn=session['num'] )

if __name__=="__main__":  
    app.run(debug=True)    
