import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
export const Login = () => {
  const { store, actions } = useContext(Context);

  const [loginform, setLoginForm] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [loginErrors, setLoginErrors] = useState({})

  const handleChange = (e, item) => {
    let aux = loginform;
    aux[item] = e.target.value;
    setLoginForm(aux);
    // console.log(loginform)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(loginform);
    setLoginErrors(handleValidate(loginform))
    e.target.reset();
    // console.log('store.authentication', store.authentication);

  }
  const handleValidate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username es requerido!";
      console.log(errors.username)
    }
    if (!values.email) {
      errors.email = "Email es requerido!";
      console.log(errors.email)
    } else if (!regex.test(values.email)) {
      errors.email = "Tu correo no es valido!";
      console.log(errors.email)
    }
    if (!values.password) {
      errors.password = "Password es requerido!";
      console.log(errors.password)
    }
    return errors;
  }

  return (
    <>
      <div className="main-login">
        <div className="form-container-login">
          <h1 className="title-login">Login</h1>
          <form className="form-login" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nombre de usuario"
                onChange={(e) => { handleChange(e, 'username') }} />
            </div>
            <p>{loginErrors.username}</p>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={(e) => { handleChange(e, 'email') }} />
            </div>
            <p>{loginErrors.email}</p>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => { handleChange(e, 'password') }} />
              <p>{loginErrors.password}</p>
            </div>
            <button type="submit" className="btn button-login d-grid gap-2 col-6 mx-auto">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
