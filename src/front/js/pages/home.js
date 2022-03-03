import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import imageUrl from "../../img/rigo-baby.jpg"
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5 bg-primary">
      <h5>Recomendaciones para el cuidado de tu bebé</h5>
      <div className="scrollmenu">
        <div className="row">
          <div className="col-md-6">
            <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card">
              <h5 className="card-title">Recomendaciones</h5>
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="texto">
        hola
      </p>
    </div >

  );
};
