from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'supersecretkey'

# Root route
@app.route('/')
def index():
    # Initialize game state
    if 'random_number' not in session:
        session['random_number'] = random.randint(1, 100)
        session['attempts'] = 0
        session['max_attempts'] = 5
    return render_template('index.html', attempts=session['attempts'], max_attempts=session['max_attempts'])

# Process guess
@app.route('/guess', methods=['POST'])
def guess():
    user_guess = int(request.form['guess'])
    session['attempts'] += 1

    if session['attempts'] > session['max_attempts']:
        return redirect('/lose')

    if user_guess == session['random_number']:
        return redirect('/win')
    elif user_guess > session['random_number']:
        session['status'] = 'Too high!'
    else:
        session['status'] = 'Too low!'

    return redirect('/')

# Win route
@app.route('/win', methods=['GET', 'POST'])
def win():
    if request.method == 'POST':
        name = request.form['name']
        attempts = session['attempts']
        with open('leaderboard.txt', 'a') as f:
            f.write(f'{name} - {attempts} attempts\n')
        return redirect('/leaderboard')

    return render_template('win.html', attempts=session['attempts'])

# Lose route
@app.route('/lose')
def lose():
    session.clear()
    return render_template('lose.html')

# Leaderboard route
@app.route('/leaderboard')
def leaderboard():
    try:
        with open('leaderboard.txt', 'r') as f:
            leaderboard = f.readlines()
    except FileNotFoundError:
        leaderboard = []

    return render_template('leaderboard.html', leaderboard=leaderboard)

# Restart game
@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
