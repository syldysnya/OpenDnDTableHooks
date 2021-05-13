import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import { AuthRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container'
import GamePLaceContainer from './game_places/game_place_container';

const App = () => (
    <div>
        <ModalContainer />
        <Switch>
            <Route exact path='/' component={Home}/>
            {/* <Route path='/gp/:gamePlacesId' component={GamePLaceContainer}/> */}
        </Switch>
    </div>
);

export default App;

