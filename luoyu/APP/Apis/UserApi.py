from flask_restful import Resource,fields,marshal_with,reqparse

from APP.models import *

users_fields = {
    'name':fields.String,
    'email':fields.String,
}


result_fields = {
    'returnCode':fields.String,
    'msg':fields.String,
    'returnValue':fields.List(fields.Nested(users_fields))
}
class UserR(Resource):
    @marshal_with(result_fields)
    def get(self):

        users = User.query.all()
        result = {
            'returnCode':'1',
            'msg':'success',
            'returnValue':users
        }
        return result