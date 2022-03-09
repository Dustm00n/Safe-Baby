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

  const handleChange = (e, item) => {
    let aux = loginform;
    aux[item] = e.target.value;
    setLoginForm(aux);
    console.log(loginform)
  }

  return (
    <>
      <div className="main-login">
        <div className="form-container-login">
          <h1 className="title-login">Login</h1>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nombre de usuario"
                onChange={(e) => { handleChange(e, 'username') }} />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={(e) => { handleChange(e, 'email') }} />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => { handleChange(e, 'password') }} />
            </div>
            <button type="submit" className="btn button-login d-grid gap-2 col-6 mx-auto">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
