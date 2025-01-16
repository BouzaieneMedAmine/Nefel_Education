from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a secure key

# Route to display the form
@app.route('/')
def index():
    return render_template('index.html')

# Route to process the form submission
@app.route('/process', methods=['POST'])
def process():
    # Save form data into the session
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comments'] = request.form['comments']
    session['hobbies'] = request.form.getlist('hobbies')  # Save multiple checkboxes
    return redirect('/result')  # Redirect to the results page

# Route to display the results page
@app.route('/result')
def result():
    return render_template(
        'result.html',
        name=session.get('name'),
        location=session.get('location'),
        language=session.get('language'),
        comments=session.get('comments'),
        hobbies=session.get('hobbies'),
    )

# Route to clear session and restart
@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
