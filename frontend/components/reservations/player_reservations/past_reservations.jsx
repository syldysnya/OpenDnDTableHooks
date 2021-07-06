import React from 'react';
import PlayerReservationItem from './player_reservation_item';

const PastReservations = (props) => {
    const {reservations, currentPlayer} = props;
    
    const mapped = reservations.map((res, i) => {
        return <PlayerReservationItem res={res} key={`resPlayer-${i}`} currentPlayer={currentPlayer}/>
    })

    return mapped
};

export default PastReservations;