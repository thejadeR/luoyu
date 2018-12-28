# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sqlite1.db'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:123456@localhost:3306/site2'
# app.config['SQLALCHEMY_TRACK_MODIFYCATIONS'] = False
import os


def getdb(dbinfo):
    db = dbinfo.get('DB')
    driver = dbinfo.get('DRIVER')
    user = dbinfo.get('USER')
    password = dbinfo.get('PASSWORD')
    host = dbinfo.get('HOST')
    port = dbinfo.get('PORT')
    name = dbinfo.get('NAME')
    return '{}+{}://{}:{}@{}:{}/{}'.format(
        db,driver,user,password,host,port,name
    )

class Config:
    DEBUG = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = '123456'


class DevelopEnv(Config):
    DEBUG = True
    ENV = 'development'

    # MAIL_SERVER = "smtp.qq.com"
    # MAIL_USERNAME = "1056497498@qq.com"
    # MAIL_PASSWORD = "vhsudzmtxfrrbdab"
    MAIL_SERVER = 'smtp.163.com'
    MAIL_USERNAME = 'jade1056497498@163.com'
    MAIL_PASSWORD = 'jade123456'

    dbinfo = {
    'DB' : 'mysql',
    'DRIVER' : 'pymysql',
    'USER' : 'root',
    'PASSWORD' : '123456',
    'HOST' : 'localhost',
    'PORT' : '3306',
    'NAME' : 'luoyu',
    }

    SQLALCHEMY_DATABASE_URI = getdb(dbinfo)


class ProductEnv(Config):
    DEBUG = False
    ENV = 'product'

    MAIL_SERVER = 'smtp.163.com'
    MAIL_USERNAME = 'jade1056497498@163.com'
    MAIL_PASSWORD = 'jade123456'

    dbinfo = {
        'DB': 'mysql',
        'DRIVER': 'pymysql',
        'USER': 'root',
        'PASSWORD': '123456',
        'HOST': 'localhost',
        'PORT': '3306',
        'NAME': 'luoyu',
    }

    SQLALCHEMY_DATABASE_URI = getdb(dbinfo)

env = {
    'develop':DevelopEnv,
    'product':ProductEnv,
}


BASE_DIR = os.path.dirname( os.path.abspath(__file__) )
print(BASE_DIR)