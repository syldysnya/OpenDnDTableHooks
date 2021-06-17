import React from 'react';

function MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(gamePlaces) {
    const gamePlacesObj = {};
    gamePlaces.forEach(gamePlace => gamePlacesObj[gamePlace.id] = gamePlace);

    gamePlaces
      .filter(gamePlace => !this.markers[gamePlace.id])
      .forEach(newGamePlace => this.createMarkerFromGamePlace(newGamePlace, this.handleClick))

    Object.keys(this.markers)
      .filter(gamePlaceId => !gamePlacesObj[gamePlaceId])
      .forEach(gamePlaceId => this.removeMarker(this.markers[gamePlaceId]))
  }

  createMarkerFromGamePlace(gamePlace) {
    const position = new google.maps.LatLng(parseInt(gamePlace.lat), parseInt(gamePlace.lng));
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      gamePlaceId: gamePlace.id
    });

    marker.addListener('click', () => this.handleClick(gamePlace));
    this.markers[marker.gamePlaceId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.gamePlaceId].setMap(null);
    delete this.markers[marker.gamePlaceId];
  }
}

export default MarkerManager;
