import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Favorites from '../../favorites/favorites';
import StarsShow from '../../stars/stars_show';

const SavedGamePlaces = () => {
    const favorites = useSelector(state => Object.values({...state.entities.favorites.favoritesAll}));
    const [fav, setFav] = useState('');
    const favRef = useRef(null);
    let mapped;

    mapped = favorites.map((favorite, i) => {
        return (
            <div className="saved-box-favs" key={`saved-${i}`}>
                <div className="left-saved">
                    <img src={favorite.gpAvatar}/>
                </div>
                <div className="right-saved">
                    {favorite.gamePlace.name}
                    <StarsShow key={`stars=${i}`} />
                    <Favorites key={`fav=${i}`} gamePlaceId={favorite.gamePlaceId} playerId={favorite.playerId} fav={favorite} setFav={setFav} favRef={favRef}/>
                    {favorite.city}
                </div>
                <button className='auth-button'>
                    Reserve now
                </button>
            </div>
        )
    })

    return mapped;
};

export default SavedGamePlaces;