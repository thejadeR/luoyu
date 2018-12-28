from flask import Blueprint, render_template, request
from .models import *

blue = Blueprint('myblue',__name__)


@blue.route('/')
def index():
    return render_template('index.html')


@blue.route('/login/')
def login():
    return render_template('login.html')



@blue.route('/register/')
def register():
    return render_template('register.html')



@blue.route('/logout/')
def logout():

    # request
    return render_template('index.html')



@blue.route('/forgetPassword/')
def forgetPassword():

    return render_template('forgetPassword.html')

