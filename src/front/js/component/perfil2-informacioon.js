import React from "react";
import "../../styles/perfil2-info.css"
import "../../styles/mis-primeras-cosas.css"
import { Link } from "react-router-dom";
import Misprimerascosas from "../component/perfil3-mis primeras cosas";

const InfoBB = () => {
    return (
        <div className="container-fluid   caja0">
            <div className="col-12">
                <div className="row">
                    <div className="col-4">
                        <div className="card-InfoBB">
                            <div className="card-body-InfoBB">
                                <h5 className="card-title-InfoBB">Nombre de tu Bebé</h5>
                                <p className="card-text-color">Matteo serrano orellana</p>
                                <Link to="/Agenda">
                                    <button type="button" className="btn boton-neon">
                                        <span id="span1"></span>
                                        <span id="span2"></span>
                                        <span id="span3"></span>
                                        <span id="span4"></span>
                                        <img
                                            src="https://i0.wp.com/i.blogs.es/c51839/gateo/450_1000.gif"
                                            className="imagen-boton"
                                        />
                                        <p className="card-text-boton">Agenda Pediatrica</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <Misprimerascosas />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBB;
