import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import { AuthRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container'
import GamePLaceContainer from './game_places/game_place_container';
import ReservationViewForm from './reservations/reservation_view_form';
import ReservationViewFormConf from './reservations/reservation_view_form_conf';
import ReservationsIndexContainer from './reservations/reservations_index_container'

const App = () => (
    <div>
        <ModalContainer />
        <Route exact path='/' component={Home}/>
        <Route exact path='/gameplaces/:gamePlaceId' component={GamePLaceContainer}/>
        <Route exact path='/booking/details' component={ReservationViewForm} />
        <Route exact path='/book/view' component={ReservationViewFormConf} />
        <Route exact path='/my/profile' component={ReservationsIndexContainer} />
    </div>
);

export default App;

