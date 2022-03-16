import React from "react";
import "../../styles/perfil2-info.css";

const InfoBB = () => {
    return (
        <div className="card-InfoBB">
            <div className="card-body-InfoBB">
                <h5 className="card-title-InfoBB">Nombre de tu Bebé</h5>
                <p className="card-text">Matteo serrano orellana</p>
                <div className="Boton-Baby">
                    <button type="button" className="btn btn-secondary btn-sm boton-InfoBB">
                        <img
                            src="https://i0.wp.com/i.blogs.es/c51839/gateo/450_1000.gif"
                            className="imagen-boton"
                        />
                        <p className="card-text-boton">Agenda Pediatrica</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoBB;
