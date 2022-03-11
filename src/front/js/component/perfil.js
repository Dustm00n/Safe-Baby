import React from "react";
import "../../styles/Portada.css";

const Perfil = () => {
    return (
        <div className="container-profile">
            <div className="col-12">
                <div className="card-profile">
                    <div className="card-body-profile">
                        <img src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png" className="Foto-Perfil" />
                        <h6 className="card-nombre mb-2 text-muted">dustm00n</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil