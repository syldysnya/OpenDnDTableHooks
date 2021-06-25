import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateReviewForm from '../../reviews/create_review_form';
import EditReview from '../../reviews/edit_review';

const PlayerReservationItem = (props) => {
    const {i, currentPlayer, review, res} = props;   
    const {gpAvatar, gpName, gameDate, gameStart, playersNum, gamePlaceId} = res;
    const [writeBox, setWriteBox] = useState(false);
    const [editBox, setEditBox] = useState(false);

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

    const handleEdit = e => {
        setEditBox(!editBox)
    }

    const handleDelete = e => {
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
                                {!review && (<div className="write-text">
                                    <i className="far fa-comment-alt"></i>
                                    <h2 onClick={handleWrite}>
                                        Write a review
                                    </h2>
                                </div>)}
                                {review && (<div className="edit-text">
                                    <i className="far fa-comment-alt"></i>
                                    <h2  onClick={handleEdit}>
                                        Edit a review
                                    </h2>
                                </div>)}
                                {review && (<div className="delete-text">
                                    <i className="far fa-comment-alt"></i>
                                    <h2  onClick={handleDelete}>
                                        Delete a review
                                    </h2>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="name-info-review" id='write-review'>
                    <div className="review-box-user">
                        {writeBox && <CreateReviewForm player={currentPlayer} gamePlaceId={gamePlaceId} res={res}/>}
                        {editBox && <EditReview player={currentPlayer} gamePlaceId={gamePlaceId} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerReservationItem;