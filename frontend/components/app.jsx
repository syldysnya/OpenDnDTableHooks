import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import { AuthRoute } from '../util/route_util';
import LoginContainer from './session/login_container';

const App = () => (
    <div>
        <Route exact path='/' component={Home}/>
        <AuthRoute path='login' component={LoginContainer}/>
    </div>
);

export default App;