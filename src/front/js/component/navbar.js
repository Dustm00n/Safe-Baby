import React, { useContext, useState, useEffect } from "react";
import LogoBebe from "../../img/logo-nuevo-safe baby.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [isToken, setIsToken] = useState({
		datos_babies: [],
		email: "",
		profile: {
			apellido: "",
			avatar: "",
			nombre: ""
		},
		roles: {
			id: null,
			rol_name: ""
		}
	})
	useEffect(() => {
		if (localStorage.getItem('token')) {
			setIsToken(JSON.parse(localStorage.getItem('token')));
		}
	}, []);
	return (
		<nav className="navbar navbar-expand-lg py-3">
			<div className="container-fluid">
				<Link to="/Home">
					<img className="navbar-brand" src={LogoBebe} />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<MdMenu className="navbar-toggler-icon"></MdMenu>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav mb-2 mb-lg-0 gap-2 mt-2">
						<li className="nav-item">
							<Link to="/home">
								<button className="btn btn-navbar text">Inicio</button>
							</Link>
						</li>
						{/* {
							isToken.user?.roles?.rol_name !== undefined ||
							isToken.user?.roles?.rol_name == "Papá" ||
							isToken.user?.roles?.rol_name == "Mamá" ||
							isToken.user?.roles?.rol_name !== "Niñera" ||
							isToken.user?.roles?.rol_name !== "Niñero" &&
								<Link to="/startprogress">
									<button className="btn btn-navbar">Progreso</button>
								</Link>
							</li>
						} */}
						{/* {console.log("AQUI", isToken.user?.roles?.rol_name)} */}

						<li className="nav-item">
							<Link to="/startprogress">
								<button className="btn btn-navbar">Progreso</button>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/foro">
								<button className="btn btn-navbar">Chat</button>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/citas">
								<button className="btn btn-navbar">Citas</button>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/perfil">
								<button className="btn btn-navbar">Perfil</button>
							</Link>
						</li>
						<li className="nav-item">
							<button onClick={() => actions.logOut(history)} className="btn btn-navbar">Logout</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
