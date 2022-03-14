from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Role(db.Model):
    __tablename__: 'user'
    id = db.Column(db.Integer, primary_key=True)
    mama_papa = db.Column(db.String(120), unique=True, nullable=False)
    niñera_niñero = db.Column(db.String(120), unique=True, nullable=False)
    user_id - db.Column(db.Integer, db.foreginkey('use.id', nullable=False))

    def __repr__(self):
        return '<Role %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "mama_papa": self.mama_papa,
            "niñera_niñero": self.niñera_niñero
        }

class DatosBaby(db.Model):
    __tablename__: 'datos_baby'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    apellido = db.Column(db.String(120), nullable=False)
    edad = db.Column(db.String(120), nullable=False)
    genero = db.Column(db.Integer(50), nullable=False)
    estatura = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.foreginkey('use.id', nullable=False))
    user = db.relationship(User)

    def __repr__(self):
        return '<DatosBaby %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "edad": self.edad,
            "genero": self.genero,
            "estatura": self.estatura,
            "user_id": self.user_id,
            "user": self.user
        }

class Etapa1(db.Model):
    __tablename__: 'etapa1'
    id = db.Column(db.Integer, primary_key=True)
    actividades = db.Column(db.String(200), nullable=False)
    datos_baby_id = db.Column(db.Integer, db.foreginkey('datosBaby.id', nullable=False))
    datos_baby = db.relationship(DatosBaby)

    def __repr__(self):
        return '<Etapa1 %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "actividades": self.actividades,
            "datos_baby_id": self.datos_baby_id,
            "datos_baby": self.datos_baby
        }

class Etapa2(db.Model):
    __tablename__: 'etapa2'
    id = db.Column(db.Integer, primary_key=True)
    actividades = db.Column(db.String(200))
    datos_baby_id = db.Column(db.Integer, db.foreginkey('datosBaby.id', nullable=False))
    datos_baby = db.relationship(DatosBaby)


    def __repr__(self):
        return '<Etapa2 %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "actividades": self.actividades,
            "datos_baby_id": self.datos_baby_id,
            "datos_baby": self.datos_baby
        }

class Etapa3(db.Model):
    __tablename__: 'etapa3'
    id = db.Column(db.Integer, primary_key=True)
    actividades = db.Column(db.String(200))
    datos_baby_id = db.Column(db.Integer, db.foreginkey('datosBaby.id', nullable=False))
    datos_baby = db.relationship(DatosBaby)


    def __repr__(self):
        return '<Etapa3 %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "actividades": self.actividades,
            "datos_baby_id": self.datos_baby_id,
            "datos_baby": self.datos_baby
        }

class Etapa4(db.Model):
    __tablename__: 'etapa4'
    id = db.Column(db.Integer, primary_key=True)
    actividades = db.Column(db.String(200))
    datos_baby_id = db.Column(db.Integer, db.foreginkey('datosBaby.id', nullable=False))
    datos_baby = db.relationship(DatosBaby)

    def __repr__(self):
        return '<Etapa4 %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "actividades": self.actividades,
            "datos_baby_id": self.datos_baby_id,
            "datos_baby": self.datos_baby
        }

class Etapa5(db.Model):
    __tablename__: 'etapa5'
    id = db.Column(db.Integer, primary_key=True)
    actividades = db.Column(db.String(200))
    datos_baby_id = db.Column(db.Integer, db.foreginkey('datosBaby.id', nullable=False))
    datos_baby = db.relationship(DatosBaby)

    def __repr__(self):
        return '<Etapa5 %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "actividades": self.actividades,
            "datos_baby_id": self.datos_baby_id,
            "datos_baby": self.datos_baby
        }

class grafico1(db.Model):
    __tablename__: 'grafico1'
    id = db.Column(db.Integer, primary_key=True)
    etapa_1_id = db.Column(db.Integer, db.foreginkey('etapa1.id', nullable=False))
    etapa1 = db.relationship(Etapa1)
    def __repr__(self):
        return '<grafico1 %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "etapa_1_id": self.etapa_1_id,
            "etapa1": self.etapa1
        }

class grafico2(db.Model):
    __tablename__: 'grafico2'
    id = db.Column(db.Integer, primary_key=True)
    etapa_1_id = db.Column(db.Integer, db.foreginkey('etapa1.id', nullable=False))
    etapa1 = db.relationship(Etapa1)
    etapa_2_id = db.Column(db.Integer, db.foreginkey('etapa2.id', nullable=False))
    etapa2 = db.relationship(Etapa2)

    def __repr__(self):
        return '<grafico2 %r>' % self.username

    def serialize(self):
        return {
             "id": self.id,
            "etapa_1_id": self.etapa_1_id,
            "etapa1": self.etapa1,
            "etapa_2_id": self.etapa_2_id,
            "etapa2": self.etapa2
        }

class grafico3(db.Model):
    __tablename__: 'grafico3'
    id = db.Column(db.Integer, primary_key=True)
    etapa_1_id = db.Column(db.Integer, db.foreginkey('etapa1.id', nullable=False))
    etapa1 = db.relationship(Etapa1)
    etapa_2_id = db.Column(db.Integer, db.foreginkey('etapa2.id', nullable=False))
    etapa2 = db.relationship(Etapa2)
    etapa_3_id = db.Column(db.Integer, db.foreginkey('etapa3.id', nullable=False))
    etapa3 = db.relationship(Etapa3)

    def __repr__(self):
        return '<grafico3 %r>' % self.username

    def serialize(self):
        return {
             "id": self.id,
            "etapa_1_id": self.etapa_1_id,
            "etapa1": self.etapa1,
            "etapa_2_id": self.etapa_2_id,
            "etapa2": self.etapa2,
            "etapa_3_id": self.etapa_3_id,
            "etapa3": self.etapa3
        }

class grafico4(db.Model):
    __tablename__: 'grafico4'
    id = db.Column(db.Integer, primary_key=True)
    etapa_1_id = db.Column(db.Integer, db.foreginkey('etapa1.id', nullable=False))
    etapa1 = db.relationship(Etapa1)
    etapa_2_id = db.Column(db.Integer, db.foreginkey('etapa2.id', nullable=False))
    etapa2 = db.relationship(Etapa2)
    etapa_3_id = db.Column(db.Integer, db.foreginkey('etapa3.id', nullable=False))
    etapa3 = db.relationship(Etapa3)
    etapa_4_id = db.Column(db.Integer, db.foreginkey('etapa4.id', nullable=False))
    etapa4 = db.relationship(Etapa4)

    def __repr__(self):
        return '<grafico4 %r>' % self.username

    def serialize(self):
        return {
             "id": self.id,
            "etapa_1_id": self.etapa_1_id,
            "etapa1": self.etapa1,
            "etapa_2_id": self.etapa_2_id,
            "etapa2": self.etapa2,
            "etapa_3_id": self.etapa_3_id,
            "etapa3": self.etapa3,
            "etapa_4_id": self.etapa_4_id,
            "etapa4": self.etapa4
        }

class grafico5(db.Model):
    __tablename__: 'grafico5'
    id = db.Column(db.Integer, primary_key=True)
    etapa_1_id = db.Column(db.Integer, db.foreginkey('etapa1.id', nullable=False))
    etapa1 = db.relationship(Etapa1)
    etapa_2_id = db.Column(db.Integer, db.foreginkey('etapa2.id', nullable=False))
    etapa2 = db.relationship(Etapa2)
    etapa_3_id = db.Column(db.Integer, db.foreginkey('etapa3.id', nullable=False))
    etapa3 = db.relationship(Etapa3)
    etapa_4_id = db.Column(db.Integer, db.foreginkey('etapa4.id', nullable=False))
    etapa4 = db.relationship(Etapa4)
    etapa_5_id = db.Column(db.Integer, db.foreginkey('etapa5.id', nullable=False))
    etapa5 = db.relationship(Etapa5)

    def __repr__(self):
        return '<grafico5 %r>' % self.username

    def serialize(self):
        return {
            " "id": self.id,
            "etapa_1_id": self.etapa_1_id,
            "etapa1": self.etapa1,
            "etapa_2_id": self.etapa_2_id,
            "etapa2": self.etapa2,
            "etapa_3_id": self.etapa_3_id,
            "etapa3": self.etapa3,
            "etapa_4_id": self.etapa_4_id,
            "etapa4": self.etapa4,
            "etapa_5_id": self.etapa_5_id,
            "etapa5": self.etapa5
        }

class Mainchat(db.Model):
    __tablename__: 'chat'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    numero_sala = db.Column(db.String(120), unique=True, nullable=False)
    user_id - db.Column(db.Integer, db.foreginkey('use.id', nullable=False))

    def __repr__(self):
        return '<Role %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "numero_sala": self.numero_sala
        }
