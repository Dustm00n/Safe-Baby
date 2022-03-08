import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Navbar } from "./component/navbar";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { StartProgress } from "./pages/startprogress";
import { Progress } from "./pages/progress";
import { Citas } from "./pages/citas";
import { Foro } from "./pages/foro";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

// import { LandingPageIntro } from "./pages/landingpage-intro";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar>
						<Switch>
							{/* <Route exact path="/" component={LandingPageIntro}>
								<LandingPageIntro />
							</Route> */}
							<Route path="/home" component={Home}>
								<Home />
							</Route>
							<Route path="/login" component={Login}>
								<Login />
							</Route>
							<Route path="/signup" component={SignUp}>
								<SignUp />
							</Route>
							<Route path="/startprogress" component={StartProgress}>
								<StartProgress />
							</Route>
							<Route path="/progress" component={Progress}>
								<Progress />
							</Route>
							<Route path="/foro" component={Foro}>
								<Foro />
							</Route>
							<Route path="/citas" component={Citas}>
								<Citas />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
					</Navbar>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
