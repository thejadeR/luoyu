import hashlib
import random
import time
import uuid

from flask import render_template
from flask_mail import Message
from flask_restful import Resource,fields,marshal_with,reqparse
from werkzeug.security import generate_password_hash

from APP.exts import cache, mail
from APP.models import *

def generate_token():
    token = str(random.random()) + str(time.time())
    mymd5 = hashlib.md5()
    mymd5.update(token.encode('utf-8'))
    return mymd5.hexdigest()

def generate_id():
    id = str(uuid.uuid4())
    return id

theparser = reqparse.RequestParser()
theparser.add_argument('name',type=str,required=True,help='用戶名不能爲空')
theparser.add_argument('password',type=str,required=True,help='密碼不能爲空')
# theparser.add_argument('password2',type=str,required=True,help='密碼2不能爲空')
theparser.add_argument('email',type=str,required=True,help='郵箱不能爲空')

# users_fields = {
#     'name':fields.String,
#     'email':fields.String,
# }


result_fields = {
    'returnCode':fields.String,
    'msg':fields.String,
}

class RegisterR(Resource):
    @marshal_with(result_fields)
    def post(self):
        result = {
            'returnCode': '1',
            'msg': '註冊成功,請前往 郵箱 激活用戶 (5秒後自動跳到登錄頁)',
        }
        args = theparser.parse_args()


        id = generate_id()

        name = args.get('name')
        password = args.get('password')
        password = generate_password_hash(password)
        email = args.get('email')

        token = generate_token()

        u = User()
        u.id = id
        u.name = name
        u.password = password
        u.email = email
        u.token = token
        try:
            db.session.add(u)
            db.session.commit()
            cache.set(u.token, u.name, timeout=300)
            msg = Message(subject='jade邮箱激活', sender='jade1056497498@163.com', recipients=[email])
            msg.html = render_template('emailactivecheck.html', the_url='http://127.0.0.1:5001/check_email_active/?token={}'.format(u.token))
            mail.send(msg)

        except Exception as e:
            result['returnCode'] = '0'
            result['msg'] = str(e)

        return result



