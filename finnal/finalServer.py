from flask import Flask, render_template, request

app = Flask(__name__)
pw = "109-1 107 final"

@app.route('/', methods=['GET','POST'])
def finalIndex():
    global pw
    if request.method == 'POST':
        if request.values.get('pw') == pw:
            return render_template('mainfinal.html')
    return render_template('main.html')