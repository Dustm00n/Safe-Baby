from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__= 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    roles_id = db.Column(db.Integer(), db.ForeignKey('roles.id'), nullable=False)
    profile = db.relationship("Profile", backref="user", uselist=False)
    role = db.relationship("Role", uselist=False)
    datos_babies = db.relationship("DatosBaby")

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "roles_id":self.roles_id,
            "profile":self.profile.serialize(),
            "role":self.role,
            "datos_babies":self.datos_babies
            # do not serialize the password, its a security breach
        }

    #definiendo comandos para guardar actualizar y eliminar desde models y usarlo en mis endpoints como ejemplo: user.save()
    def save(self):
        db.session.add(self)
        db.session.commit()

    def updade(self):
        db.session.commit(self)
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Role(db.Model):
    __tablename__= 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<Role %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def updade(self):
        db.session.commit(self)
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Profile(db.Model):
    __tablename__= 'profile'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    apellido = db.Column(db.String(120), nullable=False)
    avatar = db.Column(db.String(200), nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def __repr__(self):
        return '<Profile %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "avatar": self.avatar,
            "users_id": self.users_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def updade(self):
        db.session.commit(self)
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class DatosBaby(db.Model):
    __tablename__= 'datos_baby'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    apellido = db.Column(db.String(120), nullable=False)
    edad = db.Column(db.String(120), nullable=False)
    genero = db.Column(db.String(120), nullable=False)
    estatura = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    datos_actividades= db.relationship("Actividades", secondary="logros_bebes")
    user = db.relationship("User")
    
    def __repr__(self):
        return '<DatosBaby %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "edad": self.edad,
            "genero": self.genero,
            "estatura": self.estatura,
            "user_id": self.user_id,
            "datos_actividades": self.datos_actividades
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def updade(self):
        db.session.commit(self)
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Actividades(db.Model):
    __tablename__= 'actividades'
    id = db.Column(db.Integer, primary_key=True)
    etapas = db.Column(db.Integer, nullable=False)
    descripcion = db.Column(db.String(300), nullable=False)
    datos_babies = db.relationship("DatosBaby", secondary="logros_bebes")

    def __repr__(self):
        return '<Actividades %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "etapas": self.etapas,
            "descripcion": self.descripcion,
            "datos_babies": self.datos_babies
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def updade(self):
        db.session.commit(self)
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class LogrosBebes(db.Model):
    __tablename__= 'logros_bebes'    
    actividades_id = db.Column(db.Integer, db.ForeignKey('actividades.id'), nullable=False, primary_key=True)
    datos_baby_id = db.Column(db.Integer, db.ForeignKey('datos_baby.id'), nullable=False, primary_key=True)
    actividades = db.relationship("Actividades")
    datos_babies = db.relationship("DatosBaby")

    def __repr__(self):
        return '<LogrosBebe %r>' % self.actividades_id

    def serialize(self):
        return {
            "actividades_id": self.actividades_id,
            "actividades": self.actividades,
            "datos_baby_id": self.datos_baby_id,
            "datos_babies": self.datos_babies
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def updade(self):
        db.session.commit(self)
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Etapas(db.Model):
    __tablename__= 'etapa'    
    actividades_id = db.Column(db.Integer, db.ForeignKey('actividades.id'), nullable=False, primary_key=True)
    datos_baby_id = db.Column(db.Integer, db.ForeignKey('datos_baby.id'), nullable=False, primary_key=True)
    actividades = db.relationship("Actividades")
    datos_babies = db.relationship("DatosBaby")

    def __repr__(self):
        return '<Etapas %r>' % self.actividades_id

    def serialize(self):
        return {
            "actividades_id": self.actividades_id,
            "actividades": self.actividades,
            "datos_baby_id": self.datos_baby_id,
            "datos_babies": self.datos_babies
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def updade(self):
        db.session.commit(self)
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()