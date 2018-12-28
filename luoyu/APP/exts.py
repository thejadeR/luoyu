
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_caching import Cache
from flask_bootstrap import Bootstrap
from flask_restful import Api
from flask_mail import Mail
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()
cache = Cache(config={
    'CACHE_TYPE':'simple'
})
bootstrap = Bootstrap()
api = Api()
mail = Mail()
cors = CORS(supports_credentials=True)
def init_exts(app):

    db.init_app(app)
    migrate.init_app(app,db)
    cache.init_app(app)
    bootstrap.init_app(app)
    api.init_app(app)
    mail.init_app(app)
    cors.init_app(app)