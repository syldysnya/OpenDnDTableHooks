import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Favorites from '../../favorites/favorites';
import StarsShow from '../../stars/stars_show';

const SavedItem = (props) => {
    
    const {favorite} = props;
    const [fav, setFav] = useState(favorite);
    const favRef = useRef(null);
    const history = useHistory();

    useEffect(() => {
        if (fav) {
            favRef.current.style.width = '100%'
        } else {
            favRef.current.style.width = '0%';
        }
    }, [fav])

    return (
        <div className="saved-box-favs">
            <div className="left-saved">
                <img src={favorite.gpAvatar}/>
            </div>
            <div className="right-saved">
                <div className="name-saved">
                    {favorite.gamePlace.name}
                </div>
                <div className='rating'>
                    <StarsShow stars={favorite.gpRating} lengthRat={favorite.gpLengthRat} />
                </div>
                <Favorites gamePlaceId={favorite.gamePlaceId} playerId={favorite.playerId} fav={favorite} setFav={setFav} favRef={favRef}/>
                <div className="city-saved">
                    {favorite.city}
                </div>
            </div>
            <button className='auth-button' onClick={() => history.push(`/gameplaces/${favorite.gamePlaceId}`)}>
                Reserve now
            </button>
        </div>
    )
};

export default SavedItem;