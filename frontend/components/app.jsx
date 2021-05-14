import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import { AuthRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container'
import GamePLaceContainer from './game_places/game_place_container';
import ReservationViewForm from './reservations/reservation_view_form';

const App = () => (
    <div>
        <ModalContainer />
        <Route exact path='/' component={Home}/>
        <Route exact path='/gameplaces/:gamePlaceId' component={GamePLaceContainer}/>
        <Route exact path='/booking/details' component={ReservationViewForm} />
    </div>
);

export default App;

