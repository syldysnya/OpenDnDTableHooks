import React from 'react';
import { useSelector } from 'react-redux';
import PlayerReservationItem from './player_reservation_item';

const PastReservations = () => {

    const reservations = useSelector(state => state.entities.reservations.past);
    
    let mapped = reservations.map((res, i) => {
        return <PlayerReservationItem res={res} key={`resPlayer-${i}`}/>
    })

    return mapped
};

export default PastReservations;