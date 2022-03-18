import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import "../../styles/home.css"
import imageUrl from "../../img/bebe-meses.jpeg"
import imageUrlMeses from "../../img/bebe-pasos.jpeg"
import imagePasos from "../../img/bebe-9-meses.jpeg"
import imageDesarollo from "../../img/desarrollo-bebe.jpeg"
import imageJUegos from "../../img/juegos_didacticos.jpeg"
import imageMeses from "../../img/mom-and-baby.jpeg"
// import { BiSearchAlt } from "react-icons/bi";


export const Inicio = (props) => {
    return (
        <div className="mt-5 mx-5">
            <div className="scrollmenu-home">
                <h5 className="titulo-home">{props.tituloA}</h5>
                <div className="card-home">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="card-title-home">{props.textA}</h5>
                            <div className="card-body-home">
                                <p className="parrafoA-home">{props.parrafoA}</p>
                            </div>
                        </div>
                        <div className="col-md-6 gap-4 d-flex justify-content-center">
                            <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card-home">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="card-title-home">{props.textB}</h5>
                            <div className="card-body-home">
                                <p className="parrafoA-home">{props.parrafoB}</p></div>
                        </div>
                        <div className="col-md-6 gap-4 d-flex justify-content-center">
                            <img src={imageUrlMeses} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card-home">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="card-title-home">{props.textC}</h5>
                            <div className="card-body-home">
                                <p className="parrafoA-home">{props.parrafoC}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 gap-4 d-flex justify-content-center">
                            <img src={imagePasos} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="scrollmenu-home">
                <h5 className="titulo-home">{props.tituloB}</h5>
                <div className="card-home">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="card-title-home">{props.textD}</h5>
                            <div className="card-body-home">
                                <p className="parrafoA-home">{props.parrafoD}</p>
                            </div>
                        </div>
                        <div className="col-md-6 gap-4 d-flex justify-content-center">
                            <img src={imageDesarollo} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card-home">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="card-title-home">{props.textE}</h5>
                            <div className="card-body-home">
                                <p className="parrafoA-home">{props.parrafoE}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 gap-4 d-flex justify-content-center">
                            <img src={imageJUegos} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card-home">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="card-title-home">{props.textF}</h5>
                            <div className="card-body-home">
                                <p className="parrafoA-home">{props.parrafoF} </p>
                            </div>
                        </div>
                        <div className="col-md-6 gap-4 d-flex justify-content-center">
                            <img src={imageMeses} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h5 className="titulo-home">ESPACIO PARA TU BEBÉ</h5>
            </div>
            <div className="card-video-group">
                <div className="card-video-home">
                    <h5 className="card-title-video-home">Educacion para tu bebé</h5>
                    <div className="row">
                        <div className="col md-4 d-flex justify-content-center">
                            <ReactPlayer
                                width="100%"
                                height="300px"
                                controls
                                url="https://www.youtube.com/watch?v=vNAAwojkQtM" />

                        </div>
                        <div className="col md-4 d-flex justify-content-center">
                            <ReactPlayer
                                width="100%"
                                height="300px"
                                url="https://www.youtube.com/watch?v=sOG8xJPxYqw" />
                        </div>
                        <div className="col md-4 d-flex justify-content-center">
                            <ReactPlayer
                                width="100%"
                                height="300px"
                                url="https://www.youtube.com/watch?v=UYkmRoTpCPs" />
                        </div>
                    </div>
                </div>
                <div className="card-video-home">
                    <h5 className="card-title-video-home">Entretenimiento para tu bebé</h5>
                    <div className="row">
                        <div className="col md-4 d-flex justify-content-center">
                            <ReactPlayer
                                width="100%"
                                height="300px"
                                controls
                                url="https://www.youtube.com/watch?v=AwpZl39gz7U" />

                        </div>
                        <div className="col md-4 d-flex justify-content-center">
                            <ReactPlayer
                                width="100%"
                                height="300px"
                                controls
                                url="https://www.youtube.com/watch?v=nyrKHQxMxoo" />

                        </div>
                        <div className="col md-4 d-flex justify-content-center">
                            <ReactPlayer
                                width="100%"
                                height="300px"
                                controls
                                url="https://www.youtube.com/watch?v=tlf4h1tiOOs" />

                        </div>
                    </div>
                </div>
                <div className="card-video-home">
                    <h5 className="card-title-video-home">Música para tu bebé</h5>
                    <div className="row">
                        <div className="col md-4 d-flex justify-content-center">
                            <ReactPlayer
                                width="100%"
                                height="310px"
                                controls
                                url="https://www.youtube.com/watch?v=lMZzkxszfWE" />

                        </div>
                        <div className="col md-4 d-flex justify-content-center">
                            <ReactPlayer
                                width="100%"
                                height="310px"
                                controls
                                url="https://www.youtube.com/watch?v=azxGmHY6rFQ" />

                        </div>
                        <div className="col md-4 d-flex justify-content-center">
                            <ReactPlayer
                                width="100%"
                                height="310px"
                                controls
                                url="https://www.youtube.com/watch?v=EwZ3KhAh448" />

                        </div>
                    </div>
                </div>
            </div>
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
        </div>

    );
}

Inicio.propTypes = {
    tituloA: PropTypes.string,
    textA: PropTypes.string,
    parrafoA: PropTypes.string,
    textB: PropTypes.string,
    parrafoB: PropTypes.string,
    textC: PropTypes.string,
    parrafoC: PropTypes.string,
    tituloB: PropTypes.string,
    textD: PropTypes.string,
    parrafoD: PropTypes.string,
    textE: PropTypes.string,
    parrafoE: PropTypes.string,
    textF: PropTypes.string,
    parrafoF: PropTypes.string,
    tituloC: PropTypes.string,
    tablaA: PropTypes.string,
    tablaB: PropTypes.string,
    tablaC: PropTypes.string,
    tablaD: PropTypes.string

}
