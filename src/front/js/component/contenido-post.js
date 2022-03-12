import React from "react";
import "../../styles/contenido-post.css";


const Contenido = () => {
    return (
        <div className="container-cotenido">
            <div className="col-8" >
                <div className="card-contenido">
                    <h5 className="card-header">de que se trata</h5>
                    <div className="card-body">
                        <h5 className="card-title-cotenido">What is Lorem Ipsum?</h5>
                        <p className="card-text-contenido">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        <p className="card-text-contenido">industry. Lorem Ipsum has been the industry's standard dummy</p>
                        <p className="card-text-contenido">text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <a href="#" className="btn btn-primary">Responder</a>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Contenido