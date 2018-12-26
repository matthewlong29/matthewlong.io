from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = 'kudhgfbiugousifdgjhbsdfjhbsdfjhbjskhbdff98ys98dfs9dufhgisdfbjghuki'


@app.route("/resume")
def resume():
    return render_template("resume.html")


@app.route("/blog")
def blog():
    return render_template("blog.html")


@app.route("/showcase")
def showcase():
    return render_template("showcase.html")


@app.route("/game")
def game():
    return render_template("game.html")


@app.route("/admin")
def admin():
    return render_template("admin.html")


@app.route("/")
def index():
    return render_template("index.html")


app.run(debug=True)
