import React from 'react';
import { Route } from 'react-router-dom';
import GamePlace from './game_places/gp/game_place';
import Home from './main/home';
import NavBar from './main/navbar';
import Modal from './modal/modal';
import ConfirmationCreateForm from './reservations/create_forms/confirmation_create_form';
import CanceledReservationView from './reservations/edit_form/canceled_reservation_view';
import CancelReservation from './reservations/edit_form/cancel_reservation_form';
import EditReservationPage from './reservations/edit_form/edit_reservation_page';
import ReservationView from './reservations/view_form/reservation_view';


const App = () => (
    <>
        <Modal />
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Home} />
        <Route exact path='/gameplaces/:gamePlaceId' component={GamePlace}/>
        <Route exact path='/booking/details' component={ConfirmationCreateForm} />
        <Route exact path='/book/view/:reservationId' component={ReservationView} />
        <Route exact path='/book/cancel' component={CancelReservation} />
        <Route exact path='/book/cancel/form' component={CanceledReservationView} />
        <Route exact path='/booking/details/edit' component={EditReservationPage} />
    </>
);

export default App;

