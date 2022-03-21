import React from "react";
import "../../styles/Portada.css";
import Perfil from "../../img/Perfil.png";


const Profile = () => {
    return (
        <div className="container-profile">
            <div className="col-12">
                <div className="card-profile">
                    <div className="card-body-profile">
                        <img src={Perfil} className="Foto-Perfil" />
                        <h6 className="card-nombre mb-2 text-muted">Hizis Orellana </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;