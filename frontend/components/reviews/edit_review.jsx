import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editReview } from '../../actions/review_actions';
import StarsForm from '../stars/stars_form';

const EditReview = (props) => {

    const {review, setOpenEditBox} = props;
    const dispatch = useDispatch();
    const [errDescription, setErrDescription] = useState('');
    const [errService, setErrService] = useState('');
    const [errOrg, setErrOrg] = useState('');
    const [errCampaign, setErrCampaign] = useState('');
    const revErrors = useSelector(state => state.entities.reviews.errors);
    const [reviewNew, setReview] = useState(review);
    const {campaignRating, orgRating, serviceRating, description} = reviewNew;

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
        setReview({ ...reviewNew, [e.target.id]: e.target.value });
        setErrDescription('');
    };

    const update = (e) => {
        setReview({ ...reviewNew, [e.currentTarget.id]: e.currentTarget.value})
        setErrCampaign('');
        setErrOrg('');
        setErrService('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let overall = ((parseInt(serviceRating) + parseInt(orgRating) + parseInt(campaignRating)) / 3);
        
        dispatch(editReview({...reviewNew, overallRating: overall}))
            .then(() => setOpenEditBox(false))
    }

    return (
        <div className='review-edit-box-profile'>
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
                    <div>Planning</div>
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
        </div>
    );
};

export default EditReview;