from APP.exts import cache
from APP.models import User
from flask_restful import Resource, reqparse, fields, marshal_with
from werkzeug.security import check_password_hash

parser = reqparse.RequestParser()
parser.add_argument('name', type=str, required=True, help='必须传用户名')
parser.add_argument('password', type=str, required=True, help='必须传密码')


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

class LoginR(Resource):

    @marshal_with(result_fields)
    def post(self):

        args = parser.parse_args()
        name = args.get('name')
        password = args.get('password')

        # 检测用户名和密码是否匹配
        users = User.query.filter(User.name==name)


        # 检测用户名是否存在
        if users.count() > 0:
            user = users.first()

            # 检测密码是否匹配
            if check_password_hash(user.password, password):

                # 如果是已经激活，则登录成功，返回了用户信息
                if user.is_check:

                    utoken = user.token
                    cache.set(user.token, user.name, timeout=3600*24)

                    return {"returnCode": '1', "msg":'success', "returnValue": user}
                else:
                    return {"returnCode": '0', "msg": '用户未激活！'}
            else:
                return {"returnCode": '0', "msg": "密码错误!"}

        return {"returnCode":'0', "msg": "用户名不存在!"}