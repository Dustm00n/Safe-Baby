import React, { useState, useEffect } from "react";
import injectContext from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import PrivateRoute from './component/private-routes';

import { NotFound } from './pages/not-found';
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { StartProgress } from "./pages/startprogress";
import { Progress } from "./pages/progress";
import { Citas } from "./pages/citas";
import { Mainchat } from "./pages/Mainchat";
import { Perfil } from "./pages/perfil";
import { Footer } from "./component/footer";
import { LandingPageIntro } from "./pages/landingpage-intro";
import { Agenda } from "./pages/agenda";


const Layout = () => {
	const basename = process.env.BASENAME || "";
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
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={LandingPageIntro} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={SignUp} />
						<PrivateRoute exact path="/startprogress" component={StartProgress} />
						<PrivateRoute exact path="/progress" component={Progress} />
						<PrivateRoute exact path="/home" component={Home} />
						<PrivateRoute exact path="/foro" component={Mainchat} />
						<PrivateRoute exact path="/agenda" component={Agenda} />
						<PrivateRoute path="/citas" component={Citas} />
						<PrivateRoute path="/perfil" component={Perfil} />
						<Route component={NotFound} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

// {
// 	isToken.user?.roles?.rol_name == "Papá" ||
// 	isToken.user?.roles?.rol_name == "Mamá" &&
// }
// {console.log("AQUI", isToken.user?.roles?.rol_name)}
// {store.authentication === true && <Route exact path="/" component={LandingPageIntro} />}