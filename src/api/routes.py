"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


# @api.route('/login', methods=['GET'])
# def login():

#     # user = User()
#     # user_email = User.query.get('email')
#     # if user.email == user_request:
        


#     # if user is not None:
#     response_body = {
#         "message": "Usuario no encontrado"
#     }
#     return jsonify(response_body), 404


@api.route('/signup', methods=['POST'])
def signup():

    user = User()
    
    user.user_name = request.json.get('user_name')
    user.email = request.json.get('email')
    user.is_active = request.json.get('is_active')
    user.roles_id = request.json.get('roles_id')
    user.profile = request.json.get('profile')
    user.role = request.json.get('role')
    user.datos_babies = request.json.get('datos_babies')

    user.save()

    return jsonify(user.serialize()), 201