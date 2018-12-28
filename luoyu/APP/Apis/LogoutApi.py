from flask import session
from flask_restful import Resource


class LogoutR(Resource):
    def get(self):
        session.pop('token')
        session.clear()
        return {'msg':'success'}