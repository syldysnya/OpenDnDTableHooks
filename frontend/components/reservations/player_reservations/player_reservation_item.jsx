import React, { useEffect, useState } from 'react';
import CreateReviewForm from '../../reviews/create_review_form';

const PlayerReservationItem = (props) => {
    const {gpAvatar, gpName, gameDate, gameStart, playersNum, gamePlaceId} = props.res;
    const {i, currentPlayer} = props;   
    let noReviews;
    const [writeBox, setWriteBox] = useState(false);

    useEffect(() => {
        let rev = document.getElementById('write-review')

        if (writeBox) {
            rev.style.animation = 'writeBoxAnimation 1s forwards'
        } else {
            rev.style.animation = 'none'
        }
    }, [writeBox])

    const handleWrite = e => {
        setWriteBox(!writeBox)
    }

    return (
        <div className='res-box-info' key={`res-${i}`}>
            <div className='gp-logo'>
                <img src={gpAvatar} />
            </div>
            <div className='gp-name'>
                <div className="name-info-gp">
                    <span>{gpName}</span>
                    <span>{gameDate} at {gameStart}</span>
                    <div className='btn-group'>
                        <div className="status-canceled">Cancelled</div>
                        <div className="numplayers-inf">{`Table for ${playersNum} people`}</div>
                        <div className="red-text">
                            <div className="save-fav">
                                <i className="far fa-bookmark"></i>
                                <div>Save this restaurant</div>
                            </div>
                            <div className="write-review">
                                <i className="far fa-comment-alt"></i>
                                <h2 onClick={handleWrite}>
                                    Write a review
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="name-info-review" id='write-review'>
                    <div className="review-box-user">
                        {writeBox && (<CreateReviewForm player={currentPlayer} gamePlaceId={gamePlaceId} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerReservationItem;