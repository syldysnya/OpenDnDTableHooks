import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editReview } from '../../actions/review_actions';

const EditReview = (props) => {

    const {player, gamePlaceId, review} = props;
    const dispatch = useDispatch();
    const [errDescription, setErrDescription] = useState('');
    const [errService, setErrService] = useState('');
    const [errOrg, setErrOrg] = useState('');
    const [errCampaign, setErrCampaign] = useState('');
    const revErrors = useSelector(state => state.entities.reviews.errors);

    const [reviewNew, setReview] = useState('');

    // const {campaignRating, orgRating, serviceRating, description} = review;


    useEffect(() => {
        setReview({review})
    }, [])

    // useEffect(() => {
    //     revErrors.forEach(err => {
    //         if (err.includes('Description')) {
    //             setErrDescription(err)
    //         } else if (err.includes('Org')) {
    //             setErrOrg(err)
    //         } else if (err.includes('Service')) {
    //             setErrService(err)
    //         } else if (err.includes('Campaign')) {
    //             setErrCampaign(err)
    //         }
    //     })
    // }, [revErrors])

    // const updateInfo = (e) => {
    //     setReview({ ...review, [e.target.id]: e.target.value });
    //     setErrDescription('');
    // };

    // const update = (e) => {
    //     setReview({ ...review, [e.currentTarget.id]: e.currentTarget.value,
    //         overallRating: ((parseInt(serviceRating) + parseInt(orgRating) + parseInt(campaignRating)) / 3)
    //     })
    //     setErrCampaign('');
    //     setErrOrg('');
    //     setErrService('');
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     dispatch(editReview(review))
    // }

    return (
        <div className='review-create-box'>
            {/* <form onSubmit={handleSubmit}>
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
                    {/* <textarea onChange={updateInfo}
                        id='description'
                        value={description}
                        cols="40" rows="5" />
                    {errDescription && (
                        <div className="err-item">
                            Can't sudmit empty review
                        </div>
                    )}
                    <button type="submit">
                        Edit review
                    </button>
                </div>
            </form> */}
        </div>
    );
};

export default EditReview;