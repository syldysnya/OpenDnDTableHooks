import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllReviews } from '../../actions/review_actions';
import ReviewItem from './review_item';

const ReviewsIndex = (props) => {

    const {reviews} = props;

    let mapped = Object.values({...reviews}).map((rev, i) => {
        return (
            <ReviewItem review={rev} key={`review-${i}`}/>
        )
    })
    
    return mapped;
};

export default ReviewsIndex;