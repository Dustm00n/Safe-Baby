import React from "react";
import '../../styles/temas.css';


const Temas = () => {
    return (
        <div className="container-p">
            <div className="container">
                <div className="col-4 caja-favoritos">
                    <div className="row">
                        <div className="card">
                            <div className="card-header">
                                Temas Favoritos
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Temas