import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReview, fetchAllReviews } from '../../actions/review_actions';
import StarsForm from './stars_form';

const CreateReviewForm = (props) => {

    const {player, gamePlace, created, setCreated} = props;
    const dispatch = useDispatch();

    const [review, setReview] = useState({
        description: '',
        campaignRating: 0,
        serviceRating: 0,
        orgRating: 0,
        overallRating: 0,
        dndCampaign_id: '',
        gamePlaceId: '',
        playerId: player.id
    });

    const {campaignRating, orgRating, overallRating, serviceRating, description} = review;

    const updateInfo = (e) => {
        setReview({ ...review, [e.target.id]: e.target.value, gamePlaceId: gamePlace.id })
    };

    const update = (e) => {
        setReview({ ...review, [e.currentTarget.id]: e.currentTarget.value,
            overallRating: ((parseInt(serviceRating) + parseInt(orgRating) + parseInt(campaignRating)) / 3)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createReview(review))
            .then(setReview({
                description: '',
                campaignRating: 0,
                serviceRating: 0,
                orgRating: 0,
                overallRating: 0,
            }),
            setCreated(!created))
    }

    return (
        <div className='review-create-box'>
            <div className='create-a-review'>
                Leave a review
            </div>
            <form onSubmit={handleSubmit}>
                <div className='rating-box'>
                    <div>Campaign</div>
                    <StarsForm rating={campaignRating}
                            ratingType='campaignRating'
                            update={update}/>
                    <div>Service</div>
                    <StarsForm rating={serviceRating}
                            ratingType='serviceRating'
                            update={update}/>
                    <div>Organization</div>
                    <StarsForm rating={orgRating}
                            ratingType='orgRating'
                            update={update}/>
                </div>
                <div className='submit-textarea'>
                    <textarea onChange={updateInfo}
                        id='description'
                        value={description}
                        cols="40" rows="5" />
                    <button type="submit">
                        Submit review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateReviewForm;