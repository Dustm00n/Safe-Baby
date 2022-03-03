import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar">
				<Link to="/Home">
					<span className="navbar-brand mb-0 h1 ms-4 ">logo</span>
				</Link>
			<div className="container mr-5 d-grid gap-2 d-md-flex justify-content-md-end">
				<div className="">
					<Link to="/Home">
						<button className="btn btn-primary fs-6 text">inicio</button>
					</Link>
				</div>
				<div className="">
					<Link to="/Process">
						<button className="btn btn-primary">progeso</button>
					</Link>
				</div>
				<div className="">
					<Link to="/Foro">
						<button className="btn btn-primary">foro</button>
					</Link>
				</div>
				<div className="">
					<Link to="/Citas">
						<button className="btn btn-primary">citas</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
