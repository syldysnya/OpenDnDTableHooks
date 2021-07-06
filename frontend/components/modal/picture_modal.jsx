import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const PictureModal = (props) => {

    const gamePlace = useSelector(state => state.entities.gamePlaces.gamePlace);
    const {path} = props;
    const [idx, setIdx] = useState('');
    const [newPath, setNewPath] = useState('');
    const dispatch = useDispatch();
    let galleryObj = {};
    gamePlace.pictureUrls.map((pic, i) => galleryObj[i] = pic);

    useEffect(() => {
        let index = Object.keys(galleryObj).find(key => galleryObj[key] === path)
        setIdx(index)
    }, [])

    const handleScroll = e => {
        e.preventDefault();

        const id = parseInt(e.currentTarget.id);
        let newIndex = parseInt(idx) + id
        let newPathlink = galleryObj[newIndex];
        setIdx(newIndex)
        setNewPath(newPathlink)
        dispatch(openModal(`Gallery:${newPathlink}`))
    }

    return (
        <div className='gallery-modal'>
            {idx !== 0 && (<div className="arrow-scroll" id='-1' onClick={handleScroll}>
                <i className="fas fa-chevron-left"></i>
            </div>)}
            <img src={path}/>
            {idx !== 8 && (<div className="arrow-scroll" id='1' onClick={handleScroll}>
                <i className="fas fa-chevron-right"></i>
            </div>)}
        </div>
    );
};

export default PictureModal;