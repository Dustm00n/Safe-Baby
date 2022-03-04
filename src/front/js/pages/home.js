import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import imageUrl from "../../img/rigo-baby.jpg"
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5 mx-5">
      <h5>Recomendaciones para el cuidado de tu bebé</h5>
      <div className="scrollmenu">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Recom.Tema A</h5>
              <div className="card-body">
                <p className="card-text fs-1 text-center">PARRAFO</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title col-md-6">Recom.Tema B</h5>
              <div className="card-body">
                <p className="card-text fs-1 text-center">PARRAFO</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title col-md-6">Recom.Tema C</h5>
              <div className="card-body">
                <p className="card-text fs-1 text-center">PARRAFO</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title col-md-6">Recom.Tema D</h5>
              <div className="card-body">
                <p className="card-text fs-1 text-center">PARRAFO</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title col-md-6">Recom.Tema E</h5>
              <div className="card-body">
                <p className="card-text fs-1 text-center">PARRAFO</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title col-md-6">Recom.Tema F</h5>
              <div className="card-body">
                <p className="card-text fs-1 text-center">PARRAFO</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};
