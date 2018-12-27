from flask import Flask, render_template, flash, redirect, url_for, g
from flask_bcrypt import check_password_hash
from flask_login import LoginManager, login_user

import forms
import models

DEBUG = True

app = Flask(__name__)
app.secret_key = "kudhgfbiugousifdgjhbsdfjhbsdfjhbjskhbdff98ys98dfs9dufhgisdfbjghuki"

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


@login_manager.user_loader
def load_user(userid):
    try:
        return models.User.get(models.User.id == userid)
    except models.DoesNotExist:
        return None


@app.before_request
def before_request():
    """Connect to the database before each request."""
    g.db = models.DATABASE
    g.db.connect()


@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response


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


@app.route("/signin", methods=("GET", "POST"))
def signin():
    form = forms.LoginForm()
    if form.validate_on_submit():
        try:
            user = models.User.get(models.User.email == form.email.data)
        except models.DoesNotExist:
            flash("Your email or password doesn't match!", "error")
        else:
            if check_password_hash(user.password, form.password.data):
                login_user(user)
                flash("You've been signed in!", "success")
                return redirect(url_for("index"))
            else:
                flash("Your email or password doesn't match!", "error")
    return render_template("signin.html", form=form)


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    models.initialize()
    try:
        models.User.create_user(
            username="m",
            email="m@gmail.com",
            password="m",
            admin=True
        )
    except ValueError:
        pass
    app.run(debug=DEBUG)
