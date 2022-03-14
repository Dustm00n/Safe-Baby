import React, { useContext } from "react";
import { Context } from "./store/appContext";
import injectContext from "./store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Navbar } from "./component/navbar";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { StartProgress } from "./pages/startprogress";
import { Progress } from "./pages/progress";
import { Citas } from "./pages/citas";
import { App } from "./pages/App";
/* import { Foro2 } from "./pages/foro2"; */
import { Footer } from "./component/footer";
import { LandingPageIntro } from "./pages/landingpage-intro";

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
					<Navbar />
					<Switch>
						<Route exact path="/" component={LandingPageIntro} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/startprogress" component={StartProgress} />
						<Route exact path="/progress" component={Progress} />
						<Route exact path="/foro" component={App} />
						{/* <Route exact path="/foro2" component={Foro2} /> */}
						<Route path="/citas" component={Citas} />
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


// {store.authentication === true && <Route exact path="/" component={LandingPageIntro} />}