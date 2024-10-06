from flask import Flask , render_template, request , session
import random

app=Flask(__name__)

@app.route('/')
def index():
    if "gold" not in session:
        session["gold"] = 0
    my_gold =
    return render_template("index.html")

@app.route('/process_money',methods = ['post'])
def get_gold():
    building = request.form["bulding"]
    if building=="farm":
        amount = random.randint(10,20)
        session["gold"] +=amount
        print(session["gold"])
    if building=="cave":
        amount = random.randint(5,10)
        session["gold"] +=amount
        print(session["gold"])
    if building=="cave":
        amount = random.randint(2,5)
        session["gold"] +=amount
        print(session["gold"])
    if building=="casino":
        amount = random.randint(-50,50)
        session["gold"] +=amount
        print(session["gold"])


if __name__=="__main__":
    app.run(debug=True)