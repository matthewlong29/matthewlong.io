import os

from flask import Flask, render_template


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY="dev",
        DATABASE=os.path.join(app.instance_path, "blog.sqlite"),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile("config.py", silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route("/hello")
    def hello():
        """A single page that says hello..."""
        return "Hello, World!"

    @app.route("/resume")
    def resume():
        """doc"""
        return render_template("resume.html")

    @app.route("/blog")
    def blog():
        """doc"""
        return render_template("blog.html")

    @app.route("/showcase")
    def showcase():
        """doc"""
        return render_template("showcase.html")

    @app.route("/game")
    def game():
        """doc"""
        return render_template("game.html")

    # register the database commands
    from . import db
    db.init_app(app)

    # the authentication blueprint has views for registration, signing in, and signing out
    from . import auth
    app.register_blueprint(auth.bp)

    from . import blog
    app.register_blueprint(blog.bp)
    app.add_url_rule("/", endpoint="index")

    return app
