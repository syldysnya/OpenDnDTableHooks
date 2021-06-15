import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllReviews } from '../../actions/review_actions';
import ReviewItem from './review_item';

const ReviewsIndex = (props) => {

    // const params = useParams();
    // const {gamePlaceId} = params;
    const {reviews} = props;
    // const reviews = useSelector(state => state.entities.reviews.reviewsAll);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchAllReviews(gamePlaceId))
    // }, [])

    let mapped = reviews.map((rev, i) => {
        return (
            <ReviewItem review={rev} key={`review-${i}`}/>
        )
    })
    
    return mapped;
};

export default ReviewsIndex;