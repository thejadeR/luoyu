from flask import request, session
from flask_restful import Resource, reqparse, fields, marshal_with
from werkzeug.security import check_password_hash

from APP.exts import cache

parser = reqparse.RequestParser()
parser.add_argument('token', type=str)
from APP.models import *
# 返回字段
user_fields = {
    'name': fields.String,
    'email': fields.String,
    'token': fields.String,
    'is_check': fields.Boolean
}
result_fields = {
    "returnCode": fields.String,
    "msg": fields.String,
    "returnValue": fields.Nested(user_fields)
}


# 商品
meizhuang_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'img': fields.String,
    'price': fields.String,
    'category': fields.Integer
}

nanzhuang1_fields = {
    'id': fields.Integer,

    'img': fields.String,

    'category': fields.Integer
}

nanzhuang2_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'img': fields.String,
    'price': fields.String,
    'category': fields.Integer
}

result2_fields = {
    'returnCode': fields.String,
    'msg': fields.String,
    'returnValue1': fields.List(fields.Nested(meizhuang_fields)),
    'returnValue2': fields.List(fields.Nested(nanzhuang1_fields)),
    'returnValue3': fields.List(fields.Nested(nanzhuang2_fields)),
    'user':fields.Nested(user_fields)
}


class IndexR(Resource):

    @marshal_with(result2_fields)
    def get(self):

        meizhuang = MeiZhuang.query.all()
        nanzhaung1 = NanZhuang1.query.all()
        nanzhuang2 = NanZhuang2.query.all()
        result = {
            'returnCode': '0',
            'msg': '发送goods',
            'returnValue1': meizhuang,
            'returnValue2': nanzhaung1,
            'returnValue3': nanzhuang2,

        }
        token = session.get('token')
        print(token)
        users = User.query.filter_by(token=token)

        if users:
            user = users.first()
            result['user'] = user
            return result

        # args = parser.parse_args()
        # token = args.get('token')
        # print('token-get:',token)
        #
        # token1 = request.args.get('token')
        # print('token1-request:', token1)
        # uname = cache.get(token)
        #
        # if uname:
        #     users = User.query.filter(User.token == token)
        #     user = users.first()
        # #
        # # #
        # # # # 检测用户名是否存在
        # # # if user:
        #     result['user'] = user

        return result

    #
    # def post(self):
    #     args = parser.parse_args()
    #     token = args.get('token')
    #
    #     uname = cache.get(token)
    #     if uname:
    #
    #         us = User.query.filter_by(token=token)
    #         if us.count() > 0:
    #             us.first().is_check = True
    #             db.session.commit()
    #             cache.delete(token)
    #             return {'returnCode':'1','msg':'郵箱验证成功！',}
    #
    #         return {'returnCode':'0','msg':'用户名不存在，验证失败',}
    #
    #
    #
    #     return {'returnCode':'-1','msg':'激活失败,验证链接过期',}




    def post(self):

        args = parser.parse_args()
        token = args.get('token')
        print('token-post:', token)

        us = User.query.filter(User.token == token)
        u = us.first()
        #
        session['token'] = token
        # cache.set(u.token, u.name, timeout=3600*60)
        result = {}
        #
        # # 检测用户名是否存在
        # if user:
        result['msg'] = 'store users token ok'

        return result

