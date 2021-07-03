import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteReview from '../../reviews/delete_review';
import EditReview from '../../reviews/edit_review';
import PlayerReservationItem from './player_reservation_item';
import { fetchAllReviews } from '../../../actions/review_actions';

const PastReservations = (props) => {
    const {reservations, currentPlayer} = props;
    
    const mapped = reservations.map((res, i) => {
        return <PlayerReservationItem res={res} key={`resPlayer-${i}`} currentPlayer={currentPlayer}/>
    })

    return mapped
};

export default PastReservations;