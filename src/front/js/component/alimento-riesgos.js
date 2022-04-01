import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import "../../styles/home.css";

export const AlimentosRiesgos = (props) => {
    return (
        <>
            <div className="table-home mt-5 mx-2">
                <div className="row">
                    <div className="col">
                        <h5 className="titulo-home-riesgos">{props.tituloC}</h5>
                    </div>
                    {/* buscador de alimentos en la tabla, en construccion  */}
                    {/*  <div className="col-md-2">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                <BiSearchAlt /></span>
                            <input type="text" className="form-control" placeholder="Busqueda" aria-label="Busqueda" aria-describedby="basic-addon1" />
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="tabla-home">
                <ul className="lista-riesgo">
                    <li className="row items-riesgo">
                        <h2 className="col-4 tabla-text-home">Chocolate</h2>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaA}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrappe-yellow">
                            </p><p className="text-tabla-home">{props.tablaB}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p></p>
                            <p className="text-tabla-home">{props.tablaC}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaD}</p>
                        </div>
                    </li>
                    <li className="row items-riesgo">
                        <h2 className="col-4 tabla-text-home">Leche</h2>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaA}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaB}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper-orange"></p>
                            <p className="text-tabla-home">{props.tablaC}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaD}</p>
                        </div>
                    </li>
                    <li className="row items-riesgo">
                        <h2 className="col-4 tabla-text-home">Verduras</h2>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper-green"></p>
                            <p className="text-tabla-home">{props.tablaA}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaB}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaC}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaD}</p>
                        </div>
                    </li>
                    <li className="row items-riesgo">
                        <h2 className="col-4 tabla-text-home">Comida rapida</h2>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaA}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaB}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaC}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper-red"></p>
                            <p className="text-tabla-home">{props.tablaD}</p>
                        </div>
                    </li>
                    <li className="row items-riesgo">
                        <h2 className="col-4 tabla-text-home">Bebidas</h2>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaA}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaB}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaC}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper-red"></p>
                            <p className="text-tabla-home">{props.tablaD}</p>
                        </div>
                    </li>
                    <li className="row items-riesgo">
                        <h2 className="col-4 tabla-text-home">Butóxido de Piperonilo</h2>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaA}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrappe-yellow"></p>
                            <p className="text-tabla-home">{props.tablaB}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaC}</p>
                        </div>
                        <div className="col-2 nivel-riesgo d-flex">
                            <p className="spinning-text-wrapper"></p>
                            <p className="text-tabla-home">{props.tablaD}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}