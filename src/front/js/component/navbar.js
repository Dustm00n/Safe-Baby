import React, { useContext } from "react";
import LogoBebe from "../../img/logo-nuevo-safe baby.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	return (
		<nav className="navbar navbar py-3">
			<Link to="/Home">
				<img className="navbar-brand" src={LogoBebe} />
			</Link>
			<div className="container-buttons gap-4 d-flex justify-content-end">
				<div className="">
					<Link to="/Home">
						<button className="btn btn-navbar text">Inicio</button>
					</Link>
				</div>
				<div className="">
					<Link to="/Progress">
						<button className="btn btn-navbar">Progreso</button>
					</Link>
				</div>
				<div className="">
					<Link to="/Foro">
						<button className="btn btn-navbar">Chat</button>
					</Link>
				</div>
				<div className="">
					<Link to="/Citas">
						<button className="btn btn-navbar">Citas</button>
					</Link>
				</div>
				<div className="">
					<Link to="/Perfil">
						<button className="btn btn-navbar">Perfil</button>
					</Link>
				</div>
				<div className="">
					<button onClick={() => actions.logOut(history)} className="btn btn-navbar">Logout</button>
				</div>
			</div>
		</nav>
	);
};
