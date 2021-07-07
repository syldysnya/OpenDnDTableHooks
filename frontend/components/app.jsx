import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import AreaPage from './area/area_page';
import CityPage from './area/city_page';
import GamePlace from './game_places/gp/game_place';
import Footer from './main/footer';
import Home from './main/home';
import NavBar from './main/navbar';
import Modal from './modal/modal';
import Profile from './profile/profile';
import ConfirmationCreateForm from './reservations/create_forms/confirmation_create_form';
import CanceledReservationView from './reservations/edit_form/canceled_reservation_view';
import CancelReservation from './reservations/edit_form/cancel_reservation_form';
import ConfirmationModifyForm from './reservations/edit_form/confirmation_modify_form';
import EditReservationPage from './reservations/edit_form/edit_reservation_page';
import ReservationView from './reservations/view_form/reservation_view';
import SearchBar from './search/search_bar';
import SearchPage from './search/search_page';


const App = () => {

    return (
        <>
            <Modal />
            <Route path='/' component={NavBar} />
            <Route exact path='/' component={Home} />
            <Route exact path='/gameplaces/:gamePlaceId' component={GamePlace}/>
            <Route exact path='/:area' component={AreaPage}/>
            <Route exact path='/:cityId' component={CityPage}/>

            <Switch>
                <Route exact path='/search' component={SearchPage} />
                <ProtectedRoute exact path='/booking/details' component={ConfirmationCreateForm} />
                <ProtectedRoute exact path='/booking/details/edit' component={ConfirmationModifyForm} />
                <ProtectedRoute exact path='/book/view/:reservationId' component={ReservationView} />
                <ProtectedRoute exact path='/book/cancel' component={CancelReservation} />
                <ProtectedRoute exact path='/book/cancel/form' component={CanceledReservationView} />
                <ProtectedRoute exact path='/booking/:gamePlaceId/:reservationId/modify' component={EditReservationPage} />
                <ProtectedRoute path='/my' component={Profile} />
            </Switch>
            <Route path='/' component={Footer} />
        </>
    );
}

export default App;

