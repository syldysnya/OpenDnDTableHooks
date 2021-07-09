import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const GamePlaceMap = () => {

    const gamePlace = useSelector(state => state.entities.gamePlaces.gamePlace)
    const mapRef = useRef();
    let map;
    
    useEffect(() => {
        
        if (gamePlace.id) {
            const mapOptions = {
                center: { lat: parseFloat(gamePlace.latitude), lng: parseFloat(gamePlace.longitude) },
                zoom: 10
            };
            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            const gamePlacePos = { lat: parseFloat(gamePlace.latitude), lng: parseFloat(gamePlace.longitude) };
            const marker = new google.maps.Marker({
                position: gamePlacePos,
                map: map,
            });
        }
    }, [gamePlace.id])

    const openMap = e => {
        window.open(`https://maps.google.com?q=${gamePlace.latitude},${gamePlace.longitude}`)
    }

    return (
            <div ref={mapRef} className='map' id='map' onClick={openMap}>
                Map
            </div>
    );
};

export default GamePlaceMap;