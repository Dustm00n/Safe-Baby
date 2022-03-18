import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './utils';
import { Context } from "../store/appContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { store, actions } = useContext(Context);

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            actions.login() == true ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;