import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Citas } from "./pages/citas";
import { Process } from "./pages/process";
import { Login } from "./pages/login";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Foro } from "./pages/foro";

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
            <Route exact path="/process" component={Process}>
              <Process />
            </Route>
            <Route exact path="/foro" component={Foro}>
              <Foro />
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
