import os

from flask import Flask

from APP.exts import init_exts
from APP.settings import env, BASE_DIR
from APP.views import blue

from .urls import *

s = os.path.join(BASE_DIR,'static')
t = os.path.join(BASE_DIR,'templates')
def appname():

    app = Flask(__name__,static_folder=s,template_folder=t)
    app.register_blueprint(blueprint=blue)
    app.config.from_object(env.get('product'))
    init_exts(app)

    return app