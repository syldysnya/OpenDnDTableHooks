import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteReview from '../../reviews/delete_review';
import EditReview from '../../reviews/edit_review';
import PlayerReservationItem from './player_reservation_item';
import { fetchAllReviews } from '../../../actions/review_actions';

const PastReservations = (props) => {
    const {reservations, currentPlayer} = props;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAllReviews())
    }, [])
    
    const mapped = reservations.map((res, i) => {
        const {reviews} = res;
        let review = {}
        let playerReviews = {}
        if (reviews) {
            playerReviews = Object.values(reviews).filter(rev => rev.player_id === parseInt(currentPlayer.id));
            review = playerReviews[0];
        }
        
        return <PlayerReservationItem res={res} i={i} currentPlayer={currentPlayer} review={review}/>
    })

    return mapped
};

export default PastReservations;