import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

const GamePlaceMap = (props) => {

    const {gamePlace} = props;
    const mapRef = useRef();
    const history = useHistory();
    let map;
    
    useEffect(() => {

        if (!Array.isArray(gamePlace)) {
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
    })

    return (
            <div ref={mapRef} className='map' id='map'>
                Map
            </div>
    );
};

export default GamePlaceMap;