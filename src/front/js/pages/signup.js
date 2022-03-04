import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const SignUp = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="main-login">
        <div className="form-container">
          <h1 className="title-login">Sign Up</h1>
          <form>
            <div class="mb-3">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apellido" />
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-signup d-grid gap-2 col-6 mx-auto">Sign up</button>
          </form>
        </div>
      </div>
    </>
  );
};
