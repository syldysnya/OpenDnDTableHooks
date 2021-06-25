import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteReview from '../../reviews/delete_review';
import EditReview from '../../reviews/edit_review';
import PlayerReservationItem from './player_reservation_item';
import { fetchAllReviews } from '../../../actions/review_actions';

const PastReservations = (props) => {
    const {reservations, currentPlayer} = props;
    const reviews = useSelector(state => state.entities.reviews.reviewsAll);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAllReviews())
    }, [])
    
    const mapped = reservations.map((res, i) => {
        const {gamePlaceId} = res;
        let review = {}
        if (reviews) {
            review = Object.values(reviews).filter(rev => rev.gamePlaceId === gamePlaceId);
        }
        debugger
        if (review) {
            return <PlayerReservationItem res={res} i={i} currentPlayer={currentPlayer} review={review}/>
        }
    })

    return mapped
};

export default PastReservations;