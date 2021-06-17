import React, { useEffect, useRef, useState } from 'react';

const GamePlaceMap = (props) => {

    const {gamePlace} = props;
    const mapRef = useRef();
    let map;
    
    useEffect(() => {

        if (!Array.isArray(gamePlace)) {
            const mapOptions = {
                center: { lat: parseInt(gamePlace.latitude), lng: parseInt(gamePlace.longitude) },
                zoom: 13
            };

            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            const gamePlacePos = { lat: parseInt(gamePlace.latitude), lng: parseInt(gamePlace.longitude) };
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