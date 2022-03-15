"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Profile, Rol, DatosBaby, Actividad, LogroBebe, Etapa
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, get_jwt_identity, create_access_token, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import cloudinary
import cloudinary.uploader
import os

load_dotenv()

cloudinary.config( 
  cloud_name = os.getenv("CLOUD_NAME"), 
  api_key = os.getenv("CLOUDIARY_API_KEY"), 
  api_secret = os.getenv("CLOUDIARY_API_SECRET"),
  secure = True
)

api = Blueprint('api', __name__)

#------------------------Ruta de usuarios----------------------------------------#
@api.route('/users', methods=['GET','POST'])
@api.route('/users/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required()
def users(id=None):

    if request.method == 'GET':
        if id is not None:
            user = User.query.get(id)
            if not user: return jsonify({"msg": "Usuario no encontrado"}), 404
        else:
            user = User.query.all()
            user = list(map(lambda x: x.serialize(), user))
            return jsonify(user), 200

    if request.method == 'POST':
        if id is None:
            # email = request.json.get('email')
            # password = request.json.get('password')
            # roles_id = request.json.get('roles_id')
            # nombre = request.json.get('nombre')
            # apellido = request.json.get('apellido')
            # avatar = request.json.get('avatar')

            email = request.form['email']
            password = request.form['password']
            roles_id = request.form['roles_id']
            nombre = request.form['nombre']
            apellido = request.form['apellido']
            avatar = request.files['avatar']

            cloudinary.uploader.upload(avatar,
                folder = "avatars", 
                public_id = nombre + "_" + avatar.filename,
                overwrite = True, 
                resource_type = "image"
            )

            user = User.query.filter_by(email=email).first()

            if not email: return jsonify({"msg": "Email del usuario es requerido!"}), 400
            if not password: return jsonify({"msg": "Password es requerido!"}), 400
            if not nombre: return jsonify({"msg": "nombre es requerido!"}), 400
            if not apellido: return jsonify({"msg": "apellido es requerido!"}), 400
            if not roles_id: return jsonify({"msg": "roles_id es requerido!"}), 400
            if not avatar: return jsonify({"msg": "Avatar es requerido!"}), 400
            
            user = User()
            user.email = email
            user.password = generate_password_hash(password)
            user.roles_id = roles_id
            user.save()

            profile = Profile()
            profile.nombre = nombre
            profile.apellido = apellido
            profile.avatar = upload["url"]
            profile.users_id = user.id
            profile.save()

            if user: return jsonify({"status": "Exitoso", "user": user.serialize(),}), 201
    
    if request.method == 'DELETE':
        if id is not None:
            user = User.query.get(id)
            user.delete()
            user.save()
            return jsonify({"msg": "El usuario ha sido eliminado"}, {}), 200

        else:
            user = User.query.all()
            user.delete()
            user.save()
            return jsonify({"msg": "Todos los usuarios han sido eliminados"}, {}), 200

#---------------------------Ruta de registro----------------------------------------#
@api.route('/signups', methods=['POST'])
def signup():
    
        email = request.form['email']
        password = request.form['password']
        nombre = request.form['nombre']
        apellido = request.form['apellido']
        avatar = request.files['avatar']
        rol_name = request.form['rol_name']

        cloudinary.uploader.upload(avatar,
            folder = "avatars", 
            public_id = nombre + "_" + avatar.filename,
            overwrite = True, 
            resource_type = "image"
        )

        user = User.query.filter_by(email=email).first()

        if user: return jsonify({"msg": "Usuario ya existe"}), 400
        if not rol_name: return jsonify({"msg": "Nombre del ROL es requerido!"}), 400
        
        user = User()
        user.email = email
        user.password = generate_password_hash(password)
        user.save()

        roles=Rol()
        roles.rol_name = rol_name
        roles.save()

        profile = Profile()
        profile.nombre = nombre
        profile.apellido = apellido
        profile.users_id = user.id
        profile.avatar = upload["url"]
        profile.save()
        
        # if user: return jsonify({"form": request.form, "files": avatar.filename}), 201

        if user: return jsonify(user.serialize()), 201
    
#---------------------------Ruta de login----------------------------------------#
@api.route('/login', methods=['POST'])
def login():

    if request.method == 'POST':

        email = request.json.get('email')
        password = request.json.get('password')
        
        if not email: return jsonify({"msg": "Email del usuario es requerido!"}), 400
        if not password: return jsonify({"msg": "Password es requerido!"}), 400

        user = User.query.filter_by(email=email).first()

        if not user: return jsonify({"msg": "email/password son incorrectos"}), 401
        if not check_password_hash(user.password, password): return jsonify({"msg": "email/password son incorrectos"}), 401

        create_access_token = create_access_token(identity=user.id)

        data = {
            "access_token": access_token,
            "user": user.serialize()
        }
       
        return jsonify(data), 200
    
    else:
        return jsonify({"msg": "Inicio de sesión invalido"}), 400

#---------------------------Ruta de Roles----------------------------------------#
@api.route('/roles', methods=['GET', 'POST'])
@api.route('/roles/<int:id>', methods=['GET', 'PUT', 'DELETE'])
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

            roles=Rol()
            roles.rol_name = rol_name
            roles.save()

            return jsonify(roles.serialize()), 201
    
    if request.method == 'DELETE':
        if id is None:
            roles = Rol.query.all()
            roles.delete()
            roles.save()
            return jsonify({"msg": "Todos los Roles han sido eliminado"}, {}), 200

        elif id is not None:
            roles = Rol.query.get(id)
            roles.delete()
            roles.save()
            return jsonify({"msg": "El ROL ha sido eliminado"}, {}), 200
    else:
        return jsonify({"msg": "El ROL no existe"}), 400


#---------------------------Ruta de Perfil----------------------------------------#
@api.route('/profiles', methods=['GET'])
@api.route('/profiles/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @jwt_required()
def profiles(id=None):

    if request.method == 'GET':
        if id is not None:

            all_profiles = Profile.query.all()
            all_all_profiles = list(map(lambda x: x.serialize(), all_profiles))
            return jsonify(all_profiles)
    
    if request.method == 'POST':
        if id is None:
        
            nombre = request.json.get['nombre']
            apellido = request.json.get['apellido']
            avatar = request.json.get['avatar']
            users_id = request.json.get['users_id']

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
@api.route('/datababies', methods=['GET', 'POST'])
@api.route('/datababies/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def datababies(id=None):
    
    if request.method == 'GET':
        if id is not None:
            data_bebes = DatosBaby.query.all()
            data_bebes = list(map(lambda x: x.serialize(), data_bebes))
            return jsonify(data_bebes)   

    if request.method == 'POST':
        if id is None:
            nombre = request.form['nombre']
            apellido = request.form['apellido']
            edad = request.form['edad']
            genero = request.form['genero']
            estatura = request.form['estatura']
            user_id = request.form['user_id']

            if not nombre: return jsonify({"msg": "Nombre del bebé es requerido!"}), 400
            if not apellido: return jsonify({"msg": "Apellido del bebé requerido!"}), 400
            if not edad: return jsonify({"msg": "Edad es requerido!"}), 400
            if not genero: return jsonify({"msg": "Genero es requerido!"}), 400
            if not estatura: return jsonify({"msg": "Estatura es requerido!"}), 400

            data_bebes = DatosBaby()
            data_bebes.nombre = nombre
            data_bebes.apellido = apellido
            data_bebes.edad = edad
            data_bebes.genero = genero
            data_bebes.estatura = estatura
            data_bebes.user_id = user_id
            data_bebes.save()
            
            return jsonify(data_bebes.serialize()), 200

    if request.method == 'PUT':
        if id is not None:
            nombre = request.json('nombre')
            apellido = request.json('apellido')
            edad = request.json('edad')
            genero = request.json('genero')
            estatura = request.json('estatura')
            user_id = request.json('user_id')

            data_bebes = DatosBaby()
            data_bebes.nombre = nombre
            data_bebes.apellido = apellido
            data_bebes.edad = edad
            data_bebes.genero = genero
            data_bebes.estatura = estatura
            data_bebes.user_id = user_id
            data_bebes.update()
            
            return jsonify(data_bebes.serialize()), 200
    else:
        return jsonify({"msg": "Datos del bebe no existen"}, {}), 400


#---------------------------Ruta de Logros del Bebé----------------------------------------#
@api.route('/logrosbebes', methods=['GET', 'POST'])
@api.route('/logrosbebes/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def logrosbebes(id=None):

    if request.method == 'GET':
        if id is not None:
            logros_bebes = LogroBebe.query.all()
            logros_bebes = list(map(lambda x: x.serialize(), logros_bebes))
            return jsonify(logros_bebes)

    if request.method == 'POST':
        if id is None:
            etapas.request.json('etapas')
            descripcion.request.json('descripcion')

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
@api.route('/actividades/<int:id>', methods=['GET', 'PUT', 'DELETE'])
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
@api.route('/etapas/<int:id>', methods=['GET', 'PUT', 'DELETE'])
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
#---------------------------Agrega una Ruta si es necesario----------------------------------------#

