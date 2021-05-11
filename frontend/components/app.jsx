import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import { AuthRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container'

const App = () => (
    <div>
        <Route exact path='/' component={Home}/>
        <ModalContainer />
    </div>
);

export default App;

