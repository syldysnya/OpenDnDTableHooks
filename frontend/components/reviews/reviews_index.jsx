import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReviewItem from './review_item';

const ReviewsIndex = () => {

    const params = useParams();
    const reviews = useSelector(state => state.entities.reviews.reviewsAll)

    let mapped = Object.values({...reviews}).map((rev, i) => {
        
        if (rev.gamePlaceId === parseInt(params.gamePlaceId)) {
            return <ReviewItem review={rev} key={`review-${i}`}/>
        }
    })
    
    return mapped;
};

export default ReviewsIndex;