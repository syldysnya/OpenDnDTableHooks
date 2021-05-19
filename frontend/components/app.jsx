import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import ModalContainer from './modal/modal_container'
import GamePLaceContainer from './game_places/game_place_container';
import ReservationViewForm from './reservations/reservation_view_form';
import ReservationsIndexContainer from './reservations/reservations_index_container';
import ReservationItemContainer from './reservations/reservation_item_container';
import ModifyForm from './reservations/modify_form';
import NavBarContainer from './home/nav_bar_container';
import CancelReservationForm from './reservations/cancel_reservation';
import PastReservationItem from './reservations/past_reservation';

const App = () => (
    <div>
        <ModalContainer />
        <Route path='/' component={NavBarContainer} />
        <Route exact path='/' component={Home}/>
        <Route exact path='/my/profile/info' component={ReservationsIndexContainer}/>
        <Route exact path='/gameplaces/:gamePlaceId' component={GamePLaceContainer}/>
        <Route exact path='/booking/details' component={ReservationViewForm} />
        <Route exact path='/booking/details/edit' component={ModifyForm} />
        <Route exact path='/book/cancel' component={CancelReservationForm} />
        <Route exact path='/book/cancel/form' component={PastReservationItem} />
        <Route exact path='/book/view/:reservationId' component={ReservationItemContainer} />
        <Route exact path='/my/profile' component={ReservationsIndexContainer} />
    </div>
);

export default App;

