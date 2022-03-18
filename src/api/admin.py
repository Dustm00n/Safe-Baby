  
import os
from flask_admin import Admin
from .models import db, User
from .models import db, Profile
from .models import db, Rol
from .models import db, DatosBaby
from .models import db, LogroBebe
from .models import db, Actividad
from .models import db, Etapa
from .models import db, Participante
from .models import db, Chat
from .models import db, Mensaje

from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Profile, db.session))
    admin.add_view(ModelView(Rol, db.session))
    admin.add_view(ModelView(DatosBaby, db.session))
    admin.add_view(ModelView(LogroBebe, db.session))
    admin.add_view(ModelView(Actividad, db.session))
    admin.add_view(ModelView(Etapa, db.session))
    admin.add_view(ModelView(Participante, db.session))
    admin.add_view(ModelView(Chat, db.session))
    admin.add_view(ModelView(Mensaje, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session)) 