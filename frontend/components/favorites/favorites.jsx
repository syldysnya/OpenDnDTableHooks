import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { createFav, deleteFav } from '../../actions/favorite_actions';
import { openModal } from '../../actions/modal_actions';

const Favorites = (props) => {
    const { fav, setFav, favRef } = props;
    const player = useSelector(state => state.session.currentPlayer);
    const params = useParams();
    const dispatch = useDispatch();

    const handleSave = e => {
        e.preventDefault();
        if (fav) {
            dispatch(deleteFav(fav.id)).then(() => setFav(''))
        } else if (!fav && !player) {
            dispatch(openModal('Sign In'))
        } else {
            let newFav = {
                gamePlaceId: params.gamePlaceId,
                playerId: player.id
            }
            dispatch(createFav(newFav)).then((res) => setFav(res.favorite))
        }
    }

    return (
        <div className='favorites-box'>
            <div className="fav-outer" onClick={handleSave}>
                <div className="fav-inner" ref={favRef}></div>
                {fav ? (<div className="fav-text">Place saved</div>) : (<div className="fav-text">Save this place</div>)}
            </div>
        </div>  
    );
};

export default Favorites;