from flask import Flask, render_template

app = Flask(__name__)

@app.route('/play')
def play():
    return render_template('index.html', times=3, color='blue')

@app.route('/play/<int:times>')
def times(times):
    return render_template('index.html', times=times, color='blue')

@app.route('/play/<int:times>/<color>')
def times_color(times, color):
    return render_template('index.html', times=times, color=color)

if __name__ == '__main__':
    app.run(debug=True)
