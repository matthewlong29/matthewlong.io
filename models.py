import datetime

from flask_bcrypt import generate_password_hash
from flask_login import UserMixin

from peewee import *

DATABASE = SqliteDatabase("articles.db")


class User(UserMixin, Model):
    username = CharField(unique=True)
    name = CharField(unique=True)
    password = CharField(max_length=100)
    joined_at = DateTimeField(default=datetime.datetime.now)
    is_admin = BooleanField(default=False)

    class Meta:
        database = DATABASE
        order_by = ("-joined",)

    def getArticles(self):
        """Get all published articles."""
        return Article.select().where(Article.user == self)


class Article(Model):
    timestamp = DateTimeField(default=datetime.datetime.now)
    author = ForeignKeyField(User, related_name="articles")
    content = TextField()

    class Meta:
        database = DATABASE
        order_by = ("-timestamp",)


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User, Article], safe=True)
    DATABASE.close()
