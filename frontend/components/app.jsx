import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import ModalContainer from './modal/modal_container'
import GamePLaceContainer from './game_places/game_place_container';
import ReservationViewForm from './reservations/reservation_view_form';
import ReservationsIndexContainer from './reservations/reservations_index_container'
import ReservationItem from './reservations/reservation_item';

const App = () => (
    <div>
        <ModalContainer />
        <Route exact path='/' component={Home}/>
        <Route exact path='/my/profile/info' component={ReservationsIndexContainer}/>
        <Route exact path='/gameplaces/:gamePlaceId' component={GamePLaceContainer}/>
        <Route exact path='/booking/details' component={ReservationViewForm} />
        <Route exact path='/book/view/:reservationId' component={ReservationItem} />
        <Route exact path='/my/profile' component={ReservationsIndexContainer} />
    </div>
);

export default App;

