import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayerReservationItem from './player_reservation_item';

const PastReservations = (props) => {
    const {reservations, currentPlayer} = props;
    const reviews = useSelector(state => state.entities.player.reviews);
    const dispatch = useDispatch();
    
    const mapped = reservations.map((res, i) => {
        const {gamePlaceId} = res;
        const review = reviews.filter(rev => rev.gamePlaceId === gamePlaceId);

        if (review.length === 0) {
            return <PlayerReservationItem res={res} i={i} currentPlayer={currentPlayer}/>
        }
    })

    return mapped
};

export default PastReservations;