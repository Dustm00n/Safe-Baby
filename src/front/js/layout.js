import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Citas } from "./pages/citas";
import { StartProgress } from "./pages/startprogress";
import { Progress } from "./pages/progress";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Foro } from "./pages/foro";
import { Foro2 } from "./pages/foro2";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home}>
							<Home />
						</Route>
						<Route exact path="/home" component={Home}>
							<Home />
						</Route>
						<Route exact path="/login" component={Login}>
							<Login />
						</Route>
						<Route exact path="/signup" component={SignUp}>
							<SignUp />
						</Route>
						<Route exact path="/startprogress" component={StartProgress}>
							<StartProgress />
						</Route>
						<Route exact path="/progress" component={Progress}>
							<Progress />
						</Route>
						<Route exact path="/foro" component={Foro}>
							<Foro />
						</Route>
						<Route exact path="/foro2" component={Foro2}>
							<Foro2 />
						</Route>
						<Route exact path="/citas" component={Citas}>
							<Citas />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
