import React from 'react';
import Liston from "../../img/Liston-baby.png";



const Misprimerascosas = () => {
    return (
        <>
            <div className="card-P">
                <div className="header-liston">
                    <img src={Liston} className="Listoncito" />
                </div>
                <div className="card-body-p">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col  bs">
                            <div className="card-imp">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col  bs">
                            <div className="card-imp ">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a short card.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col  bs">
                            <div className="card-imp">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col  bs">
                            <div className="card-imp">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Misprimerascosas