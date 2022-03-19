import React, { useContext } from "react";
import { Context } from "./store/appContext";
import injectContext from "./store/appContext";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import LogoBebe from "../img/logo-bebe.png";
import PublicRoute from './component/public-routes';
import PrivateRoute from './component/private-routes';

import { NotFound } from './pages/not-found';
import { Navbar } from "./component/navbar";
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


import { isLogin } from './component/utils';

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Route exact path="/" component={LandingPageIntro} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Navbar />
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/startprogress" component={StartProgress} />
						<Route exact path="/progress" component={Progress} />
						<Route exact path="/foro" component={Mainchat} />
						<Route exact path="/Agenda" component={Agenda} />
						<Route path="/citas" component={Citas} />
						<Route path="/perfil" component={Perfil} />
						<Route>
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);


// {store.authentication === true && <Route exact path="/" component={LandingPageIntro} />}