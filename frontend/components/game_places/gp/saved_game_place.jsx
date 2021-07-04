import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Favorites from '../../favorites/favorites';
import StarsShow from '../../stars/stars_show';
import SavedItem from './saved_item';

const SavedGamePlaces = () => {
    const favorites = useSelector(state => Object.values({...state.entities.favorites.favoritesAll}));
    let mapped;

    mapped = favorites.map((favorite, i) => <SavedItem favorite={favorite} key={`fav-${i}`}/>)

    return mapped;
};

export default SavedGamePlaces;