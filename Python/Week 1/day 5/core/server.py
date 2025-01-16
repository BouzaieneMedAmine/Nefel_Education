from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)
app.secret_key = 'your_secret_key'  


@app.route('/')
def index():
   
    if 'counter' in session:
        session['counter'] += 1
    else:
        session['counter'] = 1

   
    if 'actual_visits' in session:
        session['actual_visits'] += 1
    else:
        session['actual_visits'] = 1

    return render_template(
        'index.html',
        counter=session['counter'],
        actual_visits=session['actual_visits'],
    )


@app.route('/destroy_session')
def destroy_session():
    session.clear()  
    return redirect('/') 


@app.route('/increment_by_2')
def increment_by_2():
    session['counter'] += 2
    return redirect('/')


@app.route('/reset')
def reset():
    session.pop('counter', None)  
    return redirect('/')


@app.route('/set_increment', methods=['POST'])
def set_increment():
    increment_value = int(request.form.get('increment', 1))  
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
