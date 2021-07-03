import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllFavs } from '../../../actions/favorite_actions';
import Favorites from '../../favorites/favorites';
import CreateReviewForm from '../../reviews/create_review_form';
import EditReview from '../../reviews/edit_review';
import StarsShow from '../../stars/stars_show';

const PlayerReservationItem = (props) => {
    const {i, currentPlayer, review, res} = props;   
    const {gpAvatar, gpName, gameDate, gameStart, playersNum, gamePlaceId, canceled} = res;
    const [writeBox, setWriteBox] = useState(false);
    const [editBox, setEditBox] = useState(false);
    const [openWriteBox, setOpenWriteBox] = useState(false);
    const [openEditBox, setOpenEditBox] = useState(false);
    const dispatch = useDispatch();
    const favRef = useRef(null);
    const [fav, setFav] = useState('');

    useEffect(() => {
        dispatch(fetchAllFavs())
            .then(res => {
                let filtered = Object.values(res.favorites).filter(fav => fav.gamePlaceId === parseInt(gamePlaceId));
                setFav(filtered[0])
            })
    }, [])

    useEffect(() => {
        let rev = document.getElementById('write-review')

        if (writeBox) {
            rev.style.animation = 'writeBoxAnimation 1s forwards'
        } else {
            rev.style.animation = 'none'
        }
    }, [writeBox])

    // useEffect(() => {
    //     if (review) {
    //         setEditBox(true)
    //     } else {
    //         setWriteBox(true)
    //     }
    // }, [])

    useEffect(() => {
        if (fav) {
            favRef.current.style.width = '100%'
        } else {
            favRef.current.style.width = '0%';
        }
    }, [fav])

    const handleWrite = e => {
        setOpenWriteBox(!openWriteBox)
    }

    const handleEdit = e => {
        setOpenEditBox(!openEditBox)
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
                    <div className="info-past">
                        <div>{gpName}</div>
                        <div>{gameDate} at {gameStart}</div>
                    </div>
                    <div className='btn-group'>
                        {canceled && (<div className="status-canceled">Cancelled</div>)}
                        <div className="numplayers-inf">{`Table for ${playersNum} people`}</div>
                        <div className="red-text">
                            <div className="save-fav">
                                <Favorites gamePlaceId={gamePlaceId} playerId={currentPlayer.id} fav={fav} setFav={setFav} favRef={favRef}/>
                            </div>
                            <div className="write-review">
                                {!canceled && (<div className="write-text">
                                    <i className="far fa-comment-alt"></i>
                                    <h2 onClick={handleWrite}>
                                        Write a review
                                    </h2>
                                </div>)}
                                {review && !canceled && (<div className="edit-text">
                                    <i className="far fa-comment-alt"></i>
                                    <h2  onClick={handleEdit}>
                                        Edit a review
                                    </h2>
                                </div>)}
                                {review && !canceled && (<div className="delete-text">
                                    <i className="fas fa-trash-alt"></i>
                                    <h2  onClick={handleDelete}>
                                        Delete a review
                                    </h2>
                                </div>)}
                            </div>
                            {review && !canceled && (
                                <div className="show-review">
                                    <div className="description-box">
                                        <span>You wrote:</span>
                                        <div className="description">
                                            {review}
                                        </div>
                                    </div>
                                    <div className="rating-box">
                                        <div className="rate">
                                            <span>OVERALL</span>
                                            <StarsShow />
                                        </div>
                                        <div className="rate">
                                            <span>CAMPAIGN</span>
                                            <StarsShow />   
                                        </div>
                                        <div className="rate">
                                            <span>SERVICE</span>
                                            <StarsShow />
                                        </div>
                                        <div className="rate">
                                            <span>PLANNING</span>
                                            <StarsShow />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="name-info-review" id='write-review'>
                    <div className="review-box-user">
                        {openWriteBox && <CreateReviewForm player={currentPlayer} gamePlaceId={gamePlaceId} res={res}/>}
                        {openEditBox && <EditReview player={currentPlayer} gamePlaceId={gamePlaceId} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerReservationItem;