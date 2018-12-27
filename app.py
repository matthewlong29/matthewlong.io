from flask import Flask, render_template, flash, redirect
from forms import LoginForm

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


@app.route("/login")
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for user {}, remember_me={}'.format(
            form.username.data, form.remember_me.data))
        return redirect('/')
    return render_template('login.html', title='Sign In', form=form)


@app.route("/")
def index():
    return render_template("index.html")


app.run(debug=True)
