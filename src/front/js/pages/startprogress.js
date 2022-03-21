import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/startprogress.css";
import { Navbar } from "../component/navbar";

export const StartProgress = () => {
  const { store, actions } = useContext(Context);

  const [babyForm, setBabyForm] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    genero: "",
    estatura: ""
  })

  const history = useHistory();

  const [babyErrorsForm, setErrorsBabyForm] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...babyForm };
    newState[name] = value;
    setBabyForm(newState);
    console.log(newState)
  }

  const handleValidate = (babyForm) => {
    const errors = {};
    if (!babyForm.nombre) {
      errors.nombre = "Nombre del bebé es requerido!";
    }
    if (!babyForm.apellido) {
      errors.apellido = "El apellido del bebé es requerido!";
    }
    if (!babyForm.edad) {
      errors.edad = "La edad del bebé es requerido!";
    }
    if (!babyForm.genero) {
      errors.genero = "El género del bebé es requerido!";
    }
    if (!babyForm.estatura) {
      errors.estatura = "La estatura del bebé es requerido!";
    }
    return errors;
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    setErrorsBabyForm(handleValidate(babyForm));
    let formData = new FormData();
    formData.append('nombre', babyForm.nombre);
    formData.append('apellido', babyForm.apellido);
    formData.append('edad', babyForm.edad);
    formData.append('genero', babyForm.genero);
    formData.append('estatura', babyForm.estatura);
    actions.datosBaby(formData, history);
    e.target.reset();
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid startprogress">
        <div className="row">
          <div className="col-6">
            <div className="register-baby">
              <div className="form-container-baby">
                <h1 className="title-baby text-center">Ingresa los datos de tu bebé</h1>
                <form onSubmit={(e) => handlesubmit(e)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre"
                      onChange={(e) => { handleChange(e) }} />
                  </div>
                  <p className="errors-babyform">{babyErrorsForm.nombre}</p>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="apellido"
                      name="apellido"
                      placeholder="Apellido"
                      onChange={(e) => { handleChange(e) }} />
                  </div>
                  <p className="errors-babyform">{babyErrorsForm.apellido}</p>
                  <div className="mb-3">
                    <input type="text"
                      className="form-control"
                      id="edad"
                      name="edad"
                      placeholder="Edad"
                      onChange={(e) => { handleChange(e) }} />
                  </div>
                  <p className="errors-babyform">{babyErrorsForm.edad}</p>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="genero"
                      name="genero"
                      placeholder="Género"
                      onChange={(e) => { handleChange(e) }} />
                  </div>
                  <p className="errors-babyform">{babyErrorsForm.genero}</p>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="estatura"
                      name="estatura"
                      placeholder="Estatura"
                      onChange={(e) => { handleChange(e) }} />
                  </div>
                  <p className="errors-babyform">{babyErrorsForm.estatura}</p>
                  <Link to="/progress">
                    <button type="submit" className="btn button-baby d-grid gap-2 col-6 mx-auto">Siguiente</button>
                  </Link>
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
      </div>
    </>
  );

};

