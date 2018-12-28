from APP.exts import db


class User(db.Model):
    # __tablename__ = 'user'
    id = db.Column(db.String(256),primary_key=True)
    name = db.Column(db.String(30),unique=True)

    password = db.Column(db.String(255))

    email = db.Column(db.String(50),unique=True)

    is_check = db.Column(db.Boolean,default=False)

    token = db.Column(db.String(256))



class MeiZhuang(db.Model):

    id = db.Column(db.Integer, primary_key=True,autoincrement=True)

    name = db.Column(db.String(100))

    img = db.Column(db.String(256), unique=True)

    price = db.Column(db.String(255))

    category = db.Column(db.Integer)


class NanZhuang1(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)


    img = db.Column(db.String(256), unique=True)

    # price = db.Column(db.String(255))

    category = db.Column(db.Integer)


class NanZhuang2(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    name = db.Column(db.String(100))

    img = db.Column(db.String(256), unique=True)

    price = db.Column(db.String(255))

    category = db.Column(db.Integer)

