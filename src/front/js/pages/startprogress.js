import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/startprogress.css";

export const StartProgress = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  // const [state, setState] = useState({
  //   nombre: "",
  //   apellido: "",
  //   edad: "",
  //   genero: "",
  //   estatura: ""
  // })

  // const handlesubmit = (e) => {

  // }

  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="register-baby">
            <div className="form-container-baby">
              <h1 className="title-baby text-center">Ingresa los datos de tu bebé</h1>
              <form onSubmit={(e) => handlesubmit(e)}>
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apellido" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Edad" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Género" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Estatura" />
                </div>
                <button type="submit" className="btn button-baby d-grid gap-2 col-6 mx-auto">Siguiente</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card w-75">
            <div className="card-body">
              <h1 className="title text-center">Registra a tu bebé</h1>
              <p className="card-text">Te recomendamos registrar a tu bebé para que puedas tener un mejor control de las actividades que realice tu bebé y acorde a su edad.</p>
            </div>
          </div>
        </div>
      </div >
      <div className="container-button">
        <Link to="/">
          <button className="btn backhome-button">
            Back home
          </button>
        </Link>
      </div>
    </>
  );

};

// Process.propTypes = {
//   match: PropTypes.object,
// };

