import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFavs } from '../../../actions/favorite_actions';
import { deleteReview, fetchAllReviews } from '../../../actions/review_actions';
import Favorites from '../../favorites/favorites';
import CreateReviewForm from '../../reviews/create_review_form';
import EditReview from '../../reviews/edit_review';
import StarsShow from '../../stars/stars_show';

const PlayerReservationItem = (props) => {
    const {res} = props;   
    const currentPlayer = useSelector(state => state.session.currentPlayer);
    const reviews = useSelector(state => state.entities.reviews.reviewsAll);
    const favs = useSelector(state => state.entities.favorites.favoritesAll);
    const dispatch = useDispatch();
    const {gpAvatar, gpName, gameDate, gameStart, playersNum, gamePlaceId, canceled} = res;
    const [writeBox, setWriteBox] = useState(false);
    const [openWriteBox, setOpenWriteBox] = useState(false);
    const [openEditBox, setOpenEditBox] = useState(false);
    const favRef = useRef(null);
    const [fav, setFav] = useState('');
    const [review, setReview] = useState('');

    useEffect(() => {
        let favArr = Object.values({...favs}).filter(fav => fav.gamePlaceId === parseInt(gamePlaceId));
        setFav(favArr[0])
    }, [favs])  

    useEffect(() => {
        let revArr = Object.values({...reviews}).filter(rev => rev.gamePlaceId === gamePlaceId);
        setReview(revArr[0])
    }, [reviews])

    useEffect(() => {
        let rev = document.getElementById('write-review')

        if (writeBox) {
            rev.style.animation = 'writeBoxAnimation 1s forwards'
        } else {
            rev.style.animation = 'none'
        }
    }, [writeBox])

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
        dispatch(deleteReview(review.id))
            .then(() => dispatch(fetchAllReviews()))
    }

    return (
        <div className='res-box-info'>
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
                                {!review && !canceled && (<div className="write-text">
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
                        </div>
                        {review && !canceled && (
                            <article className="show-review">
                                <div className="description-box">
                                    <p>You wrote:</p>
                                    <div className="description">
                                        <p className='desc-p'>
                                            {review.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="rating-box-rate">
                                    <div className="rate">
                                        <p>OVERALL</p>
                                        <StarsShow />
                                    </div>
                                    <div className="rate">
                                        <p>CAMPAIGN</p>
                                        <StarsShow />   
                                    </div>
                                    <div className="rate">
                                        <p>SERVICE</p>
                                        <StarsShow />
                                    </div>
                                    <div className="rate">
                                        <p>PLANNING</p>
                                        <StarsShow />
                                    </div>
                                </div>
                            </article>
                        )}
                    </div>
                </div>
                <div className="name-info-review" id='write-review'>
                    <div className="review-box-user">
                        {openWriteBox && <CreateReviewForm player={currentPlayer} gamePlaceId={gamePlaceId} res={res} setOpenWriteBox={setOpenWriteBox}/>}
                        {openEditBox && <EditReview review={review} setOpenEditBox={setOpenEditBox}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerReservationItem;