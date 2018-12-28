from APP.exts import cache, db
from APP.models import User
from flask_restful import Resource,reqparse

theparser = reqparse.RequestParser()
theparser.add_argument('token')


class CheckEmailActiveR(Resource):

    def get(self):
        args = theparser.parse_args()
        token = args.get('token')

        uname = cache.get(token)
        if uname:

            us = User.query.filter_by(token=token)
            if us.count() > 0:
                us.first().is_check = True
                db.session.commit()
                cache.delete(token)
                return {'returnCode':'1','msg':'郵箱验证成功！',}

            return {'returnCode':'0','msg':'用户名不存在，验证失败',}



        return {'returnCode':'-1','msg':'激活失败,验证链接过期',}



