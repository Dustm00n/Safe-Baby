import React from 'react';
import Liston from "../../img/Liston-baby.png";



const Misprimerascosas = () => {
    return (
        <>
            <div className="card text-center  p-cosas">
                <div className="card-header">
                    <img src={Liston} className="liston-a" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
        </>
    )
}

export default Misprimerascosas