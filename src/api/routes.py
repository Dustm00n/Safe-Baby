"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.models import db, Profile
from api.models import db, Rol
from api.models import db, UserRole
from api.models import db, DatosBaby
from api.models import db, Actividad
from api.models import db, LogroBebe
from api.models import db, Etapa
# from api.models import db, ParticipanteChat
# from api.models import db, Chat
# from api.models import db, Message
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, get_jwt_identity, create_access_token, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
import socketio
import cloudinary.uploader



api = Blueprint('api', __name__)

#------------------------Ruta de usuarios----------------------------------------#
@api.route('/users', methods=['GET'])
def get_all_users():

    all_users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), all_users))

    if not all_users: return jsonify({"msg": "No hay usuarios"}, all_users), 200

    else: return jsonify({"msg": "Todos los suarios han sido econtrados"}, all_users), 200

@api.route('/users/delete', methods=['DELETE'])
def delete_all_users():

    users = User.query.all()
    for user in users:
        user.delete()

    return jsonify({"msg": "Usuarios han sido eliminados"}), 200

@api.route('/users/delete/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def delete_a_user(id):

    if id is not None:
        users = User.query.get(id)
        users.delete()

    return jsonify({"msg": "El usuario ha sido eliminado"}), 200

#---------------------------Ruta de registro----------------------------------------#  
@api.route('/signup', methods=['POST'])
def signup():
    
        email = request.form['email']
        password = request.form['password']
        nombre = request.form['nombre']
        apellido = request.form['apellido']
        avatar = request.files['avatar']
        # rol_name = request.form['rol_name']
        # roles_id = request.form['roles_id']

        user = User.query.filter_by(email=email).first()

        if not email: return jsonify({"msg": "Usuario ya existe"}), 400
        if not password: return jsonify({"msg": "Usuario ya existe"}), 400
        if not nombre: return jsonify({"msg": "Usuario ya existe"}), 400
        if not apellido: return jsonify({"msg": "Usuario ya existe"}), 400
        # if not rol_name: return jsonify({"msg": "Usuario ya existe"}), 400

        if user: return jsonify({"msg": "Usuario ya existe"}), 400
        # if not roles: return jsonify({"msg": "El rol-id es requerido!"}), 400
        
        upload = cloudinary.uploader.upload(avatar,
            folder = "avatars", 
            public_id = nombre + "_" + avatar.filename,
            overwrite = True, 
            resource_type = "image"
        )

        user = User()
        user.email = email
        # user.roles_id = roles_id
        user.password = generate_password_hash(password)
        user.save()

        profile = Profile()
        profile.nombre = nombre
        profile.apellido = apellido
        profile.users_id = user.id
        profile.avatar = upload["secure_url"]
        profile.save()

        # rol = Rol()
        # rol.rol_name = rol_name
        # rol.save()

        if not check_password_hash(user.password, password): return jsonify({"msg": "email/password son incorrectos"}), 400

        access_token = create_access_token(identity=user.id)

        data = {
            "access_token": access_token,
            "user": user.serialize()
        }


        if user: return jsonify(data), 201
        # if user: return jsonify({"form": request.form, "files": avatar.filename}), 201
    
#---------------------------Ruta de login----------------------------------------#
@api.route('/login', methods=['GET','POST'])
def login():

    if request.method == 'POST':

        email = request.form['email']
        password = request.form['password']
        
        if not email: return jsonify({"msg": "Email del usuario es requerido!"}), 400
        if not password: return jsonify({"msg": "Password es requerido!"}), 400

        user = User.query.filter_by(email=email).first()

        if not user: return jsonify({"msg": "email/password son incorrectos"}), 400
        if not check_password_hash(user.password, password): return jsonify({"msg": "email/password son incorrectos"}), 400

        access_token = create_access_token(identity=user.id)

        data = {
            "access_token": access_token,
            "user": user.serialize()
        }
       
        return jsonify(data), 200
    
    else:
        return jsonify({"msg": "Inicio de sesión invalido"}), 400

#---------------------------Ruta de Roles----------------------------------------#
@api.route('/roles', methods=['GET', 'POST'])
def get_all_roles():

    if request.method == 'GET':
        all_roles = Rol.query.all()
        all_roles = list(map(lambda x: x.serialize(), all_roles))
        return jsonify(all_roles), 200

    if request.method == 'POST':
        rol_name = request.json.get('rol_name')

        if not rol_name: return jsonify({"msg": "Nombre del ROL es requerido!"}), 400

        roles = Rol()
        roles.rol_name = rol_name
        roles.save()

        return jsonify(roles.serialize()), 201

@api.route('/roles/delete', methods=['DELETE'])
def delete_all_roles():

    roles = Rol.query.all()
    for rol in roles:
        rol.delete()
    return jsonify({"msg": "Todos los roles han sido eliminados"}, {}), 200

@api.route('/roles/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required()
def roles(id = None):

    if request.method == 'GET':
        if id is None:
            all_roles = Rol.query.all()
            all_roles = list(map(lambda x: x.serialize(), all_roles))
            return jsonify(all_roles), 200

        elif id is not None:
            all_roles = Rol.query.get(id)
            return jsonify(all_roles.serialize()), 200

    if request.method == 'POST':
        if id is None:
            rol_name = request.json.get('rol_name')

            if not rol_name: return jsonify({"msg": "Nombre del ROL es requerido!"}), 400

            roles = Rol()
            roles.rol_name = rol_name
            roles.save()

            return jsonify(roles.serialize()), 201
    
    if request.method == 'DELETE':
        if id is not None:
            roles = Rol.query.get(id)
            roles.delete()
            roles.save()
            return jsonify({"msg": "El ROL ha sido eliminado"}, {}), 200
    else:
        return jsonify({"msg": "El ROL no existe"}), 400

#---------------------------Ruta de Colección de Roles----------------------------------------#
@api.route('/user_roles', methods=['GET'])
def user_roles():

    all_user_roles = UserRole.query.all()
    all_user_roles = list(map(lambda x: x.serialize(), all_user_roles))
    return jsonify(all_user_roles), 200

    return jsonify({"msg": "El ROL no existe"}), 400

#---------------------------Ruta de Perfil----------------------------------------#
@api.route('/profiles', methods=['GET'])
@api.route('/profiles/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required()
def profiles(id=None):

    if request.method == 'GET':
        if id is not None:

            all_profiles = Profile.query.all()
            all_profiles = list(map(lambda x: x.serialize(), all_profiles))
            return jsonify(all_profiles)
    
    if request.method == 'POST':
        if id is None:
        
            nombre = request.json.get('nombre')
            apellido = request.json.get('apellido')
            avatar = request.json.get('avatar')
            users_id = request.json.get('users_id')

            cloudinary.uploader.upload(avatar,
            folder = "avatars", 
            public_id = nombre + "_" + avatar.filename,
            overwrite = True, 
            resource_type = "image"
            )

            if not nombre: return jsonify({"msg": "nombre es requerido!"}), 400
            if not apellido: return jsonify({"msg": "apellido es requerido!"}), 400
            if not avatar: return jsonify({"msg": "avatar es requerido!"}), 400
            # if not users_id: return jsonify({"msg": "users_id es requerido!"}), 400

            profile = Profile()
            profile.nombre = nombre
            profile.apellido = apellido
            profile.avatar = upload["url"]
            profile.users_id = users_id
            profile.save()

            return jsonify(profile.serialize()), 201
   

    if request.method == 'PUT':
        if id is not None:
            
            nombre = request.json.get('nombre')
            apellido = request.json.get('apellido')
            avatar = request.json.get('avatar')
            users_id = request.json.get('users_id')

            profile = Profile.query.get(id)
            profile.nombre = nombre
            profile.apellido = apellido
            profile.avatar = avatar
            profile.users_id = users_id
            profile.update()

            return jsonify(profile.serialize()), 200
    
    else: return jsonify({"msg": "Perfil no existe"}),400
            
#---------------------------Ruta de Datos del Bebé----------------------------------------#
@api.route('/datababies', methods=['GET', 'POST', 'DELETE'])
# @jwt_required()
def data_babies_():

    if request.method == 'GET':
        data_babies = DatosBaby.query.all()
        data_babies = list(map(lambda x: x.serialize(), data_babies))
        return jsonify(data_babies)   

    if request.method == 'POST':
        nombre = request.form['nombre']
        apellido = request.form['apellido']
        edad = request.form['edad']
        genero = request.form['genero']
        estatura = request.form['estatura']

        if not nombre: return jsonify({"msg": "Nombre del bebé es requerido!"}), 400
        if not apellido: return jsonify({"msg": "Apellido del bebé requerido!"}), 400
        if not edad: return jsonify({"msg": "Edad es requerido!"}), 400
        if not genero: return jsonify({"msg": "Genero es requerido!"}), 400
        if not estatura: return jsonify({"msg": "Estatura es requerido!"}), 400

        data_babies = DatosBaby()
        data_babies.nombre = nombre
        data_babies.apellido = apellido
        data_babies.edad = edad
        data_babies.genero = genero
        data_babies.estatura = estatura
        data_babies.users_id = user.id
        data_babies.save()
        
        return jsonify(data_babies.serialize()), 200
        
    if request.method == 'DELETE':
        data_babies = DatosBaby.query.all()
        data_babies.delete()
        data_babies.save()
        return jsonify({"msg": "Todos los bebés han sido eliminados"})   

# @api.route('/datababies/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# # @jwt_required()
# def data_baby_id(id=None):
    
#     if request.method == 'GET':
#         if id is not None:
#             data_bebes = DatosBaby.query.all()
#             data_bebes = list(map(lambda x: x.serialize(), data_bebes))
#             return jsonify(data_bebes)   

#     if request.method == 'POST':
#         if id is None:
#             nombre = request.form['nombre']
#             apellido = request.form['apellido']
#             edad = request.form['edad']
#             genero = request.form['genero']
#             estatura = request.form['estatura']
#             users_id = request.form['users_id']

#             if not nombre: return jsonify({"msg": "Nombre del bebé es requerido!"}), 400
#             if not apellido: return jsonify({"msg": "Apellido del bebé requerido!"}), 400
#             if not edad: return jsonify({"msg": "Edad es requerido!"}), 400
#             if not genero: return jsonify({"msg": "Genero es requerido!"}), 400
#             if not estatura: return jsonify({"msg": "Estatura es requerido!"}), 400

#             data_bebes = DatosBaby()
#             data_bebes.nombre = nombre
#             data_bebes.apellido = apellido
#             data_bebes.edad = edad
#             data_bebes.genero = genero
#             data_bebes.estatura = estatura
#             data_bebes.users_id = users_id
#             data_bebes.save()
            
#             return jsonify(data_bebes.serialize()), 200

#     if request.method == 'PUT':
#         if id is not None:
#             nombre = request.json('nombre')
#             apellido = request.json('apellido')
#             edad = request.json('edad')
#             genero = request.json('genero')
#             estatura = request.json('estatura')
#             users_id = request.json('users_id')

#             data_bebes = DatosBaby()
#             data_bebes.nombre = nombre
#             data_bebes.apellido = apellido
#             data_bebes.edad = edad
#             data_bebes.genero = genero
#             data_bebes.estatura = estatura
#             data_bebes.users_id = users_id
#             data_bebes.update()
            
#             return jsonify(data_bebes.serialize()), 200
#     else:
#         return jsonify({"msg": "Datos del bebe no existen"}, {}), 400


#---------------------------Ruta de Logros del Bebé----------------------------------------#
@api.route('/logrosbebes', methods=['GET', 'POST'])
# @api.route('/logrosbebes/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required()
def logrosbebes():

    if request.method == 'GET':
        logros_bebes = LogroBebe.query.all()
        logros_bebes = list(map(lambda x: x.serialize(), logros_bebes))
        return jsonify(logros_bebes)

    if request.method == 'POST':
        etapas.request.json.get('etapas')
        descripcion.request.json.get('descripcion')

        if not etapas: return jsonify({"msg": "Etapa es requerida"}), 400
        if not descripcion: return jsonify({"msg": "Descripción es requerida"}), 400

        logros_bebes = LogroBebe()
        logros_bebes.etapas = etapas
        logros_bebes.descripcion = descripcion
        logros_bebes.save()

        return jsonify(logros_bebes.serialize()), 200

    else:
        return jsonify({"msg": "Logros del bebe no existen"}),400
    
#---------------------------Ruta de Actividades del Bebé----------------------------------------#
@api.route('/actividades', methods=['GET', 'POST'])
def creat_actividad():

    if request.method == 'POST':
        etapas = request.json.get('etapas')
        descripcion = request.json.get('descripcion')

        if not etapas: return jsonify({"msg": "Etapa es requerida"}), 400
        if not descripcion: return jsonify({"msg": "Descripción es requerida"}), 400

        actividades = Actividad()
        actividades.etapas = etapas
        actividades.descripcion = descripcion
        actividades.save()

        return jsonify(actividades.serialize()), 200


@api.route('/actividades/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required()
def actividades(id=None):

    if request.method == 'GET':
        if id is not None:
            actividades = Actividad.query.all()
            actividades = list(map(lambda x: x.serialize(), actividades))
            return jsonify(actividades.serialize()), 200

    if request.method == 'POST':
        if id is None:
            etapas = request.json('etapas')
            descripcion = request.json('descripcion')

            if not etapas: return jsonify({"msg": "Etapa es requerida"}), 400
            if not descripcion: return jsonify({"msg": "Descripción es requerida"}), 400

            actividades = Actividad()
            actividades.etapas = etapas
            actividades.descripcion = descripcion
            actividades.save()

            return jsonify(actividades.serialize()), 200
    
    return jsonify({"msg": "Actividades no existen"}),400

#---------------------------Ruta de Etapas de las actividades----------------------------------------#
@api.route('/etapas', methods=['GET', 'POST'])
def create_etapas():

    if request.method == 'GET':
        getting_etapas = Etapa.query.all()
        getting_etapas = list(map(lambda x: x.serialize(), getting_etapas))
        return jsonify(str(getting_etapas))

    if request.method == 'POST':
        actividades_id = request.json.get('actividades_id')
        datos_baby_id = request.json.get('datos_baby_id')

        if not actividades_id: return jsonify({"msg": "ID Actividades es requerida"}), 400
        if not datos_baby_id: return jsonify({"msg": "ID Datos del Bebé es requerida"}), 400

        numero_etapas = Etapa()
        numero_etapas.actividades_id = str(actividades_id)
        numero_etapas.datos_baby_id = str(datos_baby_id)
        numero_etapas.save()

        return jsonify(numero_etapas.serialize()), 200


@api.route('/etapas/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required()
def etapas(id=None):
    if request.method == 'GET':
        if id is not None:
            numero_etapas = Etapa.query.get(id)
            numero_etapas = list(map(lambda x: x.serialize(), numero_etapas))
            return jsonify(numero_etapas)

    if request.method == 'POST':
        if id is None:
            actividades_id = request.json('actividades_id')
            datos_baby_id = request.json('datos_baby_id')

            numero_etapas = Etapa()
            numero_etapas.actividades_id = actividades_id
            numero_etapas.datos_baby_id = datos_baby_id
            numero_etapas.save()

            return jsonify(numero_etapas)
    else:
        return jsonify({"msg": "No existen etapas"}), 400

#---------------------------------------- Chat ----------------------------------------#

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
    
