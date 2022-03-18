
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './utils';
// import { Context } from "../store/appContext";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    // const { store, actions } = useContext(Context);

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLogin() && registered == false ?
                <Redirect to="/" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;