import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview, fetchAllReviews } from '../../actions/review_actions';
import StarsForm from '../stars/stars_form';

const CreateReviewForm = (props) => {

    const {player, gamePlaceId, res} = props;
    const dispatch = useDispatch();
    const [errDescription, setErrDescription] = useState('');
    const [errService, setErrService] = useState('');
    const [errOrg, setErrOrg] = useState('');
    const [errCampaign, setErrCampaign] = useState('');
    const revErrors = useSelector(state => state.entities.reviews.errors);

    const [review, setReview] = useState({
        description: '',
        campaignRating: '',
        serviceRating: '',
        orgRating: '',
        overallRating: '',
        dndCampaign_id: '',
        gamePlaceId: gamePlaceId,
        playerId: player.id,
        reservationId: res.id
    });

    const {campaignRating, orgRating, serviceRating, description} = review;

    useEffect(() => {
        setReview({ ...review, gamePlaceId: gamePlaceId })
    }, [])

    useEffect(() => {
        revErrors.forEach(err => {
            if (err.includes('Description')) {
                setErrDescription(err)
            } else if (err.includes('Org')) {
                setErrOrg(err)
            } else if (err.includes('Service')) {
                setErrService(err)
            } else if (err.includes('Campaign')) {
                setErrCampaign(err)
            }
        })
    }, [revErrors])

    const updateInfo = (e) => {
        setReview({ ...review, [e.target.id]: e.target.value });
        setErrDescription('');
    };

    const update = (e) => {
        setReview({ ...review, [e.currentTarget.id]: e.currentTarget.value,
            overallRating: ((parseInt(serviceRating) + parseInt(orgRating) + parseInt(campaignRating)) / 3)
        })
        setErrCampaign('');
        setErrOrg('');
        setErrService('');
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
            }))
    }

    return (
        <div className='review-create-box-profile'>
            {/* <form onSubmit={handleSubmit}> */}
                <div className='rating-box-profile'>
                    <div>Campaign</div>
                    <StarsForm rating={campaignRating}
                            ratingType='campaignRating'
                            update={update}/>
                    {errCampaign && (
                        <div className="err-item">
                            Please, rate
                        </div>
                    )}
                    <div>Service</div>
                    <StarsForm rating={serviceRating}
                            ratingType='serviceRating'
                            update={update}/>
                    {errService && (
                        <div className="err-item">
                            Please, rate
                        </div>
                    )}
                    <div>Organization</div>
                    <StarsForm rating={orgRating}
                            ratingType='orgRating'
                            update={update}/>
                    {errOrg && (
                        <div className="err-item">
                            Please, rate
                        </div>
                    )}
                </div>
                <div className='submit-textarea'>
                    {/* {created && (
                        <div className="success-text-review">
                            Thank you for your review!
                        </div>
                    )} */}
                    <textarea onChange={updateInfo}
                        id='description'
                        value={description}
                        cols="35" rows="5" />
                    {errDescription && (
                        <div className="err-item">
                            Can't sudmit empty review
                        </div>
                    )}
                    <button className='auth-button' type="button" onClick={handleSubmit}>
                        Submit review
                    </button>
                </div>
            {/* </form> */}
        </div>
    );
};

export default CreateReviewForm;