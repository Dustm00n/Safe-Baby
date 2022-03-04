import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import LogoBebe from "../../img/logo-bebe.png"
export const Navbar = () => {
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
					<Link to="/Process">
						<button className="btn btn-navbar">Progeso</button>
					</Link>
				</div>
				<div className="">
					<Link to="/Foro">
						<button className="btn btn-navbar">Foro</button>
					</Link>
				</div>
				<div className="">
					<Link to="/Citas">
						<button className="btn btn-navbar">Citas</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
