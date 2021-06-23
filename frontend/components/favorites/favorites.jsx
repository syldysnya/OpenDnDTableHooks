import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createFav, deleteFav } from '../../actions/favorite_actions';

const Favorites = (props) => {
    const { player, gamePlace } = props;
    const favRef = useRef(null);
    const [saved, setSaved] = useState(false);
    const [favId, setFavId] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        let gp = gamePlace.favorites;
        let pl = player.favorites

        if (gp && pl) {
            for (let i = 0; i < gp.length; i++) {
                if (pl.includes(gp[i])) {
                    debugger
                    setFavId(gp[i])
                    setSaved(true)
                }
            }
        }

    }, [player, gamePlace])

    useEffect(() => {
        console.log(saved)
        if (saved) {
            favRef.current.style.width = '100%';
        } else {
            favRef.current.style.width = '0%';
        }
    })

    const handleSave = e => {
        e.preventDefault();

        if (saved) {
            dispatch(deleteFav(favId)).then(() => setSaved(false))
        } else {
            let fav = {
                gamePlaceId: gamePlace.id,
                playerId: player.id
            }
            dispatch(createFav(fav)).then(() => setSaved(true))
        }
    }

    return (
        <div className='favorites-box'>
            <div className="fav-outer" onClick={handleSave}>
                <div className="fav-inner" ref={favRef}></div>
                {saved ? (<div className="fav-text">Place saved</div>) : (<div className="fav-text">Save this place</div>)}
            </div>
        </div>  
    );
};

export default Favorites;