from flask_restful import Resource,fields,marshal_with,reqparse
from APP.models import *


theparser = reqparse.RequestParser()

theparser.add_argument('name',type=str,required=True,help='名字不能爲空')


result_fields = {
    'returnCode':fields.String,
    'msg':fields.String,
}




class CheckNameR(Resource):
    @marshal_with(result_fields)
    def get(self):

        result = {
            'returnCode': '1',
            'msg': '用戶名可用',
        }
        args = theparser.parse_args()
        name = args.get('name')
        print(name)
        users = User.query.filter_by(name=name)
        if users.count() > 0:
            result['returnCode'] = '0'
            result['msg'] = '用戶名已經被註冊'
            return result

        return result
