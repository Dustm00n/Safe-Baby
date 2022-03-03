import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);


	return (
		<>
			<div className="form-container">
				<h1 className="title-login">Log in</h1>
				<form>
					<div class="mb-3">
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre de usuario" />
					</div>
					<div class="mb-3">
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
					</div>
					<div class="mb-3">
						<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<button type="submit" class="btn btn-login d-grid gap-2 col-6 mx-auto">Log In</button>
				</form>
			</div>
		</>
	);
};
