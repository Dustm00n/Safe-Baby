"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Profile, Rol, DatosBaby, Actividad, LogroBebe, Etapa, Participante, Chat, Mensaje
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, get_jwt_identity, create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
import cloudinary
import socketio


cloudinary.config( 
  cloud_name = "sample", 
  api_key = "874837483274837", 
  api_secret = "a676b67565c6767a6767d6767f676fe1",
  secure = True
)

api = Blueprint('api', __name__)

#------------------------Ruta de usuarios----------------------------------------#

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
        roles_id = request.json.get('roles_id')
        nombre = request.json.get('nombre')
        apellido = request.json.get('apellido')
        avatar = request.json.get('avatar')

        if not email: return jsonify({"msg": "Email del usuario es requerido!"}), 400
        if not password: return jsonify({"msg": "Password es requerido!"}), 400
        if not nombre: return jsonify({"msg": "nombre es requerido!"}), 400
        if not apellido: return jsonify({"msg": "apellido es requerido!"}), 400
        
        user = User()
        user.email = email
        user.password = generate_password_hash(password)
        user.roles_id = roles_id
        user.save()

        profile = Profile()
        profile.nombre = nombre
        profile.apellido = apellido
        profile.avatar = avatar
        profile.users_id = user.id
        profile.save()

        if user: return jsonify({"status": "Exitoso", "user": user.serialize(),}), 201

#---------------------------Ruta de registro----------------------------------------#

@api.route('/signups', methods=['POST'])
def signup():
    
        email = request.json.get['email']
        password = request.json.get['password']
        nombre = request.json.get['nombre']
        apellido = request.json.get['apellido']
        avatar = request.json.get['avatar']

        user = User.query.filter_by(email=email).first()

        if user: return jsonify({"msg": "Usuario ya existe"}), 400
        
        user = User()
        user.email = email
        user.password = generate_password_hash(password)
        user.save()

        profile = Profile()
        profile.nombre = nombre
        profile.apellido = apellido
        profile.users_id = user.id
        profile.save()

        if user: return jsonify(user.serialize()), 201
    
#---------------------------Ruta de login----------------------------------------#

@api.route('/login', methods=['GET', 'POST'])
def login():

    if request.method == 'GET':

        response_body = {
            "msg":"Este es mi ruta de REGISTRO DATOS DEL BEBE para guardarlo en DATABASE"
        }
        return jsonify(response_body), 200


    if request.method == 'POST':

        email = request.json.get('email')
        password = request.json.get('password')

        if not email: return jsonify({"msg": "Email del usuario es requerido!"}), 400
        if not password: return jsonify({"msg": "Password es requerido!"}), 400
        
        user=User()
        user.email = email
        user.password = generate_password_hash(password)
        user.save()
        
        return jsonify(user.serialize()), 201

#---------------------------Ruta de Roles----------------------------------------#

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

#---------------------------Ruta de Perfil----------------------------------------#

@api.route('/profiles', methods=['GET'])
@api.route('/profiles/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def profiles(id=None):

    if request.method == 'GET':
        all_profiles = Profile.query.all()
        all_all_profiles = list(map(lambda x: x.serialize(), all_profiles))
        return jsonify(all_profiles)
    
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

#---------------------------Ruta de Datos del Bebé----------------------------------------#

@api.route('/datababies', methods=['GET', 'POST'])
@api.route('/datababies/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def datababies():
    
   if request.method == 'GET':
        all_profiles = Profile.query.all()
        all_all_profiles = list(map(lambda x: x.serialize(), all_profiles))
        return jsonify(all_profiles)   

    # if request.method == 'POST':
    #     response_body = {
    #         "msg":"Este es mi ruta de REGISTRO DATOS DEL BEBE para guardarlo en DATABASE"
    #     }
    #     return jsonify(response_body), 200

#---------------------------Ruta de Logros del Bebé----------------------------------------#

@api.route('/logrosbebes', methods=['GET', 'POST'])
@api.route('/logrosbebes/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def logrosbebes():

    if request.method == 'GET':
        all_profiles = Profile.query.all()
        all_all_profiles = list(map(lambda x: x.serialize(), all_profiles))
        return jsonify(all_profiles)
    
    if request.method == 'POST':
        response_body = {
            "msg":"Este es mi ruta de REGISTRO DATOS DEL BEBE para guardarlo en DATABASE"
        }
        return jsonify(response_body), 200

#---------------------------Ruta de Actividades del Bebé----------------------------------------#

@api.route('/actividades', methods=['GET', 'POST'])
@api.route('/actividades/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def actividades():

    if request.method == 'GET':
        all_profiles = Profile.query.all()
        all_all_profiles = list(map(lambda x: x.serialize(), all_profiles))
        return jsonify(all_profiles)

#---------------------------Ruta de Etapas de las actividades----------------------------------------#

@api.route('/etapas', methods=['GET', 'POST'])
@api.route('/etapas/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def etapas():
    if request.method == 'GET':
        response_body = {
            "msg":"Este es mi ruta de ETAPAS DE ACTIVIDADES SEGUN CRECIMIENTO DEL BEBE para guardarlo en DATABASE"
        }
        return jsonify(response_body), 200
    
    if request.method == 'POST':
        response_body = {
            "msg":"Este es mi ruta de REGISTRO DATOS DEL BEBE para guardarlo en DATABASE"
        }
        return jsonify(response_body), 200

#----------------------------------------Chat----------------------------------------#

@api.route('/chats', methods=['GET'])
def get_chats():
    chats = Chat.query.all()
    chats = list(map(lambda x: x.serialize(), chats))
    return jsonify(chats), 200
    
@api.route('/send-message/<int:user_id>', methods=['GET'])
def send_message(user_id):
    user = User.query.get(user_id)
    newMessage = Message()
    newMessage.message = "Hola mundo " + str(len(Message.query.all()))
    newMessage.users_id = user.id
    user.chats[0].messages.append(newMessage)
    user.save()
    return jsonify(user.serialize()), 201
    
