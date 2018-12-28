from APP.Apis.CheckEmailApi import CheckEmailR
from APP.Apis.CheckNameApi import CheckNameR
from APP.Apis.EmailActiveCheckApi import CheckEmailActiveR
from APP.Apis.ForgetPasswordApi import CheckPasswordR
from APP.Apis.IndexApi import IndexR

from APP.Apis.LogoutApi import LogoutR
from APP.Apis.RegisterApi import RegisterR
from APP.Apis.UserApi import UserR

from APP.Apis.LoginApi import LoginR
from APP.exts import api

api.add_resource(IndexR,'/index_api/')



api.add_resource(UserR,'/user_api/')

api.add_resource(RegisterR,'/register_api/')
api.add_resource(CheckEmailR,'/check_email/')
api.add_resource(CheckEmailActiveR,'/check_email_active/')
api.add_resource(CheckNameR,'/check_name/')


api.add_resource(LoginR,'/login_api/')

api.add_resource(CheckPasswordR,'/check_password/')


api.add_resource(LogoutR,'/logout_api/')