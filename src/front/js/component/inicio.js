import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";

export const Inicio = (props) => {
    const { titulo, text, parrafo, image } = props;
    const [isTruncated, setIsTruncated] = useState(true);
    const resultString = isTruncated ? parrafo.slice(0, 100) : parrafo;
    function toggleIsTruncated() {
        setIsTruncated(!isTruncated);
    }

    return (
        <>
            <h5 className="titulo-home">{titulo}</h5>
            <div className="card-home">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="card-title-home">{text}</h5>
                        <div className="card-body-home">
                            <p className="parrafoA-home">{resultString}</p>
                            <button className="button-toggle" onClick={toggleIsTruncated}> {isTruncated ? "Leer más" : "Leer menos"}</button>
                        </div>
                    </div>
                    <div className="col-md-6 gap-4 d-flex justify-content-center">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </>
    );
}

Inicio.propTypes = {
    titulo: PropTypes.string,
    text: PropTypes.string,
    parrafo: PropTypes.string,
    image: PropTypes.string
}
