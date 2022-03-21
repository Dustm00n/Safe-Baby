import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/login.css";
/* import { firebaseConfig } from "../component/firebase"; */
import { NavbarLoginSignup } from '../component/navbar-login-signup';


export const Login = () => {
  const { store, actions } = useContext(Context);

  const history = useHistory();

  const [loginform, setLoginForm] = useState({
    email: "",
    password: ""
  })

  const [loginErrors, setLoginErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...loginform };
    newState[name] = value;
    setLoginForm(newState);
  }

  const handleValidate = (loginform) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!loginform.email) {
      errors.email = "Email es requerido!";
    } else if (!regex.test(loginform.email)) {
      errors.email = "Tu correo no es valido!";
    }
    if (!loginform.password) {
      errors.password = "Password es requerido!";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginErrors(handleValidate(loginform))
    let formData = new FormData();
    formData.append('email', loginform.email);
    formData.append('password', loginform.password);
    actions.login(formData, history);
    e.target.reset();
  }
  return (
    <>
      <NavbarLoginSignup />
      <div className="main-login">
        <div className="form-container-login">
          <h1 className="title-login">Login</h1>
          <form className="form-login" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => { handleChange(e) }} />
            </div>
            <p className="errors-login">{loginErrors.email}</p>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) => { handleChange(e) }} />
              <p className="errors-login">{loginErrors.password}</p>
            </div>
            <button type="submit" className="btn button-login d-grid gap-2 col-6 mx-auto">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
