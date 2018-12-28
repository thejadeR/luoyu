# ForgetPasswordApi
from flask import session
from flask_restful import Resource,fields,marshal_with,reqparse
from werkzeug.security import check_password_hash, generate_password_hash

from APP.models import *


theparser = reqparse.RequestParser()

theparser.add_argument('oldpassword',type=str,required=True,help='原密碼不能爲空')
theparser.add_argument('newpassword',type=str,required=True,help='新碼不能爲空')
theparser.add_argument('newpassword2',type=str,required=True,help='第二次新密碼不能爲空')

result_fields = {
    'returnCode':fields.String,
    'msg':fields.String,
}




class CheckPasswordR(Resource):
    @marshal_with(result_fields)
    def post(self):

        result = {
            'returnCode': '1',
            'msg': '修改成功',
        }
        args = theparser.parse_args()
        oldpassword = args.get('oldpassword')
        newpassword = args.get('newpassword')
        print(oldpassword)
        token = session.get('token')
        users = User.query.filter_by(token=token)

        if users.count() > 0:
            user = users.first()
            if check_password_hash(user.password, oldpassword):
                user.password = generate_password_hash(newpassword)
                db.session.commit()
                return result
            else:
                result['returnCode'] = '0'
                result['msg'] = '原密碼不正確'
                return result
        else:
            result['returnCode'] = '0'
            result['msg'] = '用戶不存在'
            return result




