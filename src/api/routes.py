"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Profile
from api.utils import generate_sitemap, APIException
# from flask_jwt_extended import JWTManager, get_jwt_identity, create_access_token
# from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)


@api.route('/signups', methods=['POST'])
def post_signup():

    # if request.method == 'GET':
    #     response_body = {
    #         "msg":"Esto es prueba"
    #     }
    #     return jsonify(response_body), 200

    user_name = request.json.get('user_name')
    email = request.json.get('email')
    is_active = request.json.get('is_active')
    roles_id = request.json.get('roles_id')
    profile = request.json.get('profile')
    role = request.json.get('role')
    datos_babies = request.json.get('datos_babies')
    password = request.json.get('password')
    nombre = request.json.get('nombre')
    apellido = request.json.get('apellido')
    avatar = request.json.get('avatar')
    user_id = request.json.get('user_id')

    if not user_name: return jsonify({"msg": "Nombre del usuario es requerido!"}), 400
    if not email: return jsonify({"msg": "Email del usuario es requerido!"}), 400
    if not password: return jsonify({"msg": "Password es requerido!"}), 400
    # if not is_active: return jsonify({"msg": "Is_active del usuario es requerido!"}), 400
    # if not roles_id: return jsonify({"msg": "Roles_id es requerido!"}), 400
    # if not profile: return jsonify({"msg": "Perfil del usuario es requerido!"}), 400
    # if not role: return jsonify({"msg": "Role del usuario es requerido!"}), 400
    # if not datos_babies: return jsonify({"msg": "Datos del bebe del usuario es requerido!"}), 400

    user = User()
    user.user_name = user_name
    user.email = email
    user.is_active = is_active
    user.roles_id = roles_id
    user.profile = profile
    user.role = role
    user.datos_babies = datos_babies
    user.password = password
    user.save()

    profile = Profile()
    profile.nombre = nombre
    profile.apellido = apellido
    profile.avatar = avatar
    profile.user_id = user_id

    response_body({"msg": "Usuario registrado"})
    return jsonify(user.serialize(), response_body), 201

@api.route('/login', methods=['GET', 'POST'])
def login():
    
    if request.method == 'POST':
        user_name = request.json.get('user_name')
        email = request.json.get('email')
        password = request.json.get('password')

        user=User()
        user.user_name=user_name
        user.email=email
        user.password=password
        user.save()
        
        return jsonify(user.serialize()), 200
