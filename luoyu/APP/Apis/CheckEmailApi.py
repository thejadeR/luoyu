from flask_restful import Resource,fields,marshal_with,reqparse
from APP.models import *


theparser = reqparse.RequestParser()

theparser.add_argument('email',type=str,required=True,help='郵箱不能爲空')


result_fields = {
    'returnCode':fields.String,
    'msg':fields.String,
}




class CheckEmailR(Resource):
    @marshal_with(result_fields)
    def get(self):

        result = {
            'returnCode': '1',
            'msg': '郵箱可用',
        }
        args = theparser.parse_args()
        email = args.get('email')
        print(email)
        users = User.query.filter_by(email=email)
        if users.count() > 0:
            result['returnCode'] = '0'
            result['msg'] = '郵箱已經被註冊'
            return result

        return result



