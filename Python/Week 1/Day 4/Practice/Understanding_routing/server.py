from flask import Flask

app = Flask(__name__)


@app.route('/')

def Hello_World():
    return 'Hello World'

@app.route('/dojo')
def dojo():
    return 'dojo!'

@app.route('/hi/<name>')
def hi(name):
    print(name)
    return "hi, "+name +"!"

@app.route('/repeat/<int:num>/<name>')
def repeat(name,num):
    return (f" '{name}' " * num  )

if __name__== "__main__":
    app.run(debug=True)