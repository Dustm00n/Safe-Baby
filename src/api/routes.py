"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Profile, Rol, DatosBaby, Actividad, LogroBebe, Etapa
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, get_jwt_identity, create_access_token
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)


@api.route('/users', methods=['GET','POST'])
@api.route('/users/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def users():
    if request.method == 'GET':
        all_users = User.query.all()
        all_users = list(map(lambda x: x.serialize(), all_users))
        return jsonify(all_users)
    
    if request.method == 'POST':
        email = request.json.get('email')
        password = request.json.get('password')
        # roles_id = request.json.get('roles_id')

        if not email: return jsonify({"msg": "Email del usuario es requerido!"}), 400
        if not password: return jsonify({"msg": "Password es requerido!"}), 400

        user = User()
        user.email = email
        user.password = generate_password_hash(password)
        # user.roles_id = roles_id
        user.save()

        # rol = Rol()
        # rol.rol_name = rol_name
        # rol.save()
        
        if user: return jsonify({"status": "Exitoso", "user": user.serialize(),}), 201


@api.route('/signups', methods=['GET','POST'])
def signup():
    if request.method == 'GET':
        all_users = User.query.all()
        all_users = list(map(lambda x: x.serialize(), all_users))
        return jsonify(all_users)

    if request.method == 'POST':
        email = request.json.get('email')
        password = request.json.get('password')
        roles_id = request.json.get('roles_id')

        if not email: return jsonify({"msg": "Email del usuario es requerido!"}), 400
        if not password: return jsonify({"msg": "Password es requerido!"}), 400

        user = User()
        user.email = email
        user.password = generate_password_hash(password)
        user.roles_id = roles_id
        user.save()

        rol = Rol()
        rol.rol_name = rol_name
        rol.save()
        
        if user: return jsonify({"status": "Exitoso", "user": user.serialize(),}), 201
    
    return jsonify({"status": "fallido", "user": {}}), 400

    # if request.method == 'POST':

    #     name = request.json.get('name')
    #     email = request.json.get('email')
    #     password = request.json.get('password') 
    #     roles_id = request.json.get('roles_id')
    #     # profile = request.json.get('profile')
    #     role = request.json.get('role')
    #     datos_babies = request.json.get('datos_babies')
    #     # nombre = request.json.get('nombre')
    #     # apellido = request.json.get('apellido')
    #     # avatar = request.json.get('avatar')
    #     # users_id = request.json.get('users_id')

    #     if not name: return jsonify({"msg": "Username es requerido!"}), 400
    #     if not email: return jsonify({"msg": "Email del usuario es requerido!"}), 400
    #     if not password: return jsonify({"msg": "Password es requerido!"}), 400
    #     if not roles_id: return jsonify({"msg": "Roles_id es requerido!"}), 400
    #     # if not profile: return jsonify({"msg": "Perfil del usuario es requerido!"}), 400
    #     if not role: return jsonify({"msg": "Rol del usuario es requerido!"}), 400
    #     # if not datos_babies: return jsonify({"msg": "Datos del bebe del usuario es requerido!"}), 400
    #     # if not nombre: return jsonify({"msg": "Nombre del usuario es requerido!"}), 400
    #     # if not apellido: return jsonify({"msg": "Apellido del usuario es requerido!"}), 400
    #     # if not avatar: return jsonify({"msg": "Avatar es requerido!"}), 400
    #     # if not user_id: return jsonify({"msg": "User_id es requerido!"}), 400

    #     user = User()
    #     user.name = name
    #     user.email = email
    #     user.password = password
    #     user.roles_id = roles_id 
    #     # user.profile = profile
    #     user.role = role
    #     # user.datos_babies = datos_babies
    #     user.save()

    #     # profile = Profile()
    #     # profile.nombre = nombre
    #     # profile.apellido = apellido
    #     # profile.avatar = avatar
    #     # profile.users_id = users_id
    #     # profile.save()

    #     response_body({"msg": "Usuario registrado"})
    #     return jsonify(user.serialize(), response_body), 201

@api.route('/login', methods=['GET', 'POST'])
def login():
    
    if request.method == 'POST':
        email = request.json.get('email')
        password = request.json.get('password')

        user=User()
        user.email = email
        user.password = generate_password_hash(password)
        user.save()
        
        return jsonify(user.serialize()), 201

@api.route('/roles', methods=['GET', 'POST'])
def roles():

    if request.method == 'GET':
        all_roles = Rol.query.all()
        all_roles = list(map(lambda x: x.serialize(), all_roles))
        return jsonify(all_roles)

    if request.method == 'POST':
        rol_name = request.json.get('rol_name')
        
        if not rol_name: return jsonify({"msg": "Nombre del ROL es requerido!"}), 400

        roles=Rol()
        roles.rol_name = rol_name
        roles.save()

        return jsonify(roles.serialize()), 201

@api.route('/profiles', methods=['GET', 'POST'])
def profiles():

    if request.method == 'GET':
        response_body = {
            "msg":"Este es mi ruta de PERFILES para guardarlo en DATABASE"
        }
        return jsonify(response_body), 200
    
    if request.method == 'POST':
        
        nombre = request.json.get('nombre')
        apellido = request.json.get('apellido')
        avatar = request.json.get('avatar')
        users_id = request.json.get('users_id')

        if not nombre: return jsonify({"msg": "nombre es requerido!"}), 400
        if not apellido: return jsonify({"msg": "apellido es requerido!"}), 400
        if not avatar: return jsonify({"msg": "avatar es requerido!"}), 400
        # if not users_id: return jsonify({"msg": "users_id es requerido!"}), 400

        profile = Profile()
        profile.nombre = nombre
        profile.apellido = apellido
        profile.avatar = avatar
        profile.users_id = users_id
        profile.save()

        return(profile.serialize()), 201

@api.route('/datababies', methods=['GET', 'POST'])
def datababies():

    if request.method == 'GET':
        response_body = {
            "msg":"Este es mi ruta de REGISTRO DATOS DEL BEBE para guardarlo en DATABASE"
        }
        return jsonify(response_body), 200

@api.route('/logrosbebes', methods=['GET', 'POST'])
def logrosbebes():

    if request.method == 'GET':
        response_body = {
            "msg":"Este es mi ruta de PROGRESO O LOGROS DEL BEBE para guardarlo en DATABASE"
        }
        return jsonify(response_body), 200

@api.route('/actividades', methods=['GET', 'POST'])
def actividades():
    if request.method == 'GET':
        response_body = {
            "msg":"Este es mi ruta de ACTIVIDADES QUE REALIZA EL BEBE para guardarlo en DATABASE"
        }
        return jsonify(response_body), 200

@api.route('/etapas', methods=['GET', 'POST'])
def etapas():
    if request.method == 'GET':
        response_body = {
            "msg":"Este es mi ruta de ETAPAS DE ACTIVIDADES SEGUN CRECIMIENTO DEL BEBE para guardarlo en DATABASE"
        }
        return jsonify(response_body), 200

