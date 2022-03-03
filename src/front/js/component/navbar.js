import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar">
			<div className="container">
				<Link to="/Home">
					<span className="navbar-brand mb-0 h1">logo</span>
				</Link>
				<div className="">
					<Link to="/Home">
						<button className="btn btn-primary fs-6 text">inicio</button>
					</Link>
				</div>
				<div className="">
					<Link to="/Process">
						<button className="btn btn-primary">proceso</button>
					</Link>
				</div>
				<div className="">
					<Link to="/Foro">
						<button className="btn btn-primary">foro</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/Citas">
						<button className="btn btn-primary">citas</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
