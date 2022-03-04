import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";
export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="main-login">
				<div className="form-container">
					<h1 className="title-login">Log in</h1>
					<form>
						<div className="mb-3">
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre de usuario" />
						</div>
						<div className="mb-3">
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
						</div>
						<div className="mb-3">
							<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
						</div>
						<button type="submit" className="btn button-login d-grid gap-2 col-6 mx-auto">Log In</button>
					</form>
				</div>
			</div>
		</>
	);
};
