import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFav, deleteFav, fecthFav, fetchAllFavs } from '../../actions/favorite_actions';

const Favorites = (props) => {
    const { player, gamePlace } = props;
    const favRef = useRef(null);
    const [saved, setSaved] = useState(false);
    const [favId, setFavId] = useState('');
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.entities.favorites.favoritesAll);
    const favorite = useSelector(state => state.entities.favorites.favorite);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {}, [favorites, favorite])

    useEffect(() => {
        if (player) {
            dispatch(fetchAllFavs())
            setFetched(true)
        }
    }, [])

    useEffect(() => {
        if (favId) {
            dispatch(fecthFav(favId.id))
        }
    }, [favId])
    
    useEffect(() => {
        
        if (favId) {
            favRef.current.style.width = '100%'
        } else {
            favRef.current.style.width = '0%';
        }
    }, [favId])


    useEffect(() => {
        let gp = gamePlace.favorites;
        if (gp && favorites) {
            let list = Object.values(favorites).map(f => f.gamePlaceId)
            
            for (let i = 0; i < gp.length; i++) {
                if (list.includes(gp[i].game_place_id)) {
                    setFavId(gp[i])
                }
            }
        }

    }, [gamePlace, fetched, favId])

    const handleSave = e => {
        e.preventDefault();

        if (favId) {
            dispatch(deleteFav(favId.id)).then(() => setFavId(''))
        } else {
            
            let fav = {
                gamePlaceId: gamePlace.id,
                playerId: player.id
            }
            dispatch(createFav(fav)).then((res) => setFavId(res.favorite))
        }
    }

    return (
        <div className='favorites-box'>
            <div className="fav-outer" onClick={handleSave}>
                <div className="fav-inner" ref={favRef}></div>
                {favId ? (<div className="fav-text">Place saved</div>) : (<div className="fav-text">Save this place</div>)}
            </div>
        </div>  
    );
};

export default Favorites;