import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router';

const mapSTP = state => ({
    loggedIn: Boolean(state.session.currentPlayer)
});

const Auth = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to='/'/> : <Component {...props} />
        )}
    />
);

const Protected = ({ component: Component, path, loggedIn }) => {
    return (
        <Route 
            path={path}
            render={props => (
                loggedIn ? <Component {...props} /> : <Redirect to='/' />
            )}
        />
)};

export const AuthRoute = withRouter(connect(mapSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mapSTP, undefined)(Protected))