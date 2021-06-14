import React from 'react';
import { Route } from 'react-router-dom';
import GamePlace from './game_places/gp/game_place';
import Home from './main/home';
import NavBar from './main/navbar';
import Modal from './modal/modal';
import ConfirmationCreateForm from './reservations/create_forms/confirmation_create_form';


const App = () => (
    <>
        <Modal />
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Home} />
        <Route exact path='/gameplaces/:gamePlaceId' component={GamePlace}/>
        <Route exact path='/booking/details' component={ConfirmationCreateForm} />
    </>
);

export default App;

