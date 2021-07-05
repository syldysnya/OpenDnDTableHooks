import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TimePickButtons from '../reservations/create_forms/time_pick_buttons';
import StarsShow from '../stars/stars_show';

const SearchResults = (props) => {
    const gamePlaces = useSelector(state => Object.values({...state.entities.gamePlaces.gamePlacesAll}));
    const cities = useSelector(state => Object.values({...state.entities.cities.citiesAll}));
    const {reservation} = props;

    let mapped = gamePlaces.map((gp, i) => {
        return (
            <div className='result-item'
                key={`filtered-gplaces-${i}`}>
                <div className='avatar'>
                    <img src={gp.avatarUrl}/>
                </div>
                <div className="result-item-info">
                    <div className='link-place'>
                        <NavLink to={{
                            pathname: `/gameplaces/${gp.id}`
                            }}
                            style={{ textDecoration: 'none', color: '#247f9e' }}>
                            {gp.name}
                        </NavLink>
                    </div>
                    <div className='rating'>
                        <StarsShow stars={gp.rating} lengthRat={gp.lengthRat} />
                    </div>
                    <div className='city-results'>{cities.map(city => {
                        if (city.id === gp.cityId) {
                            return city.name
                            }
                        })}
                    </div>
                    <div className="booked-icon">
                        <i className="fas fa-chart-line"></i>
                        {gp.reservations.length === 1 ? (<div className='booked' >Booked 1 time today</div>) : (<div className='booked'>Booked {gp.reservations.length} times today</div>)}
                    </div>
                    <div className="time-pick-buttons">
                        <TimePickButtons key={`picks-${i}`} reservation={reservation} gamePlace={gp} formType='SearchPage'/>
                    </div>
                </div>
            </div>
        )}
    )

    return (
        <div className="search-results-list">
            <div className="number-of-places">
                {mapped.length} game places available
            </div>
            <div className="list-places">
                {mapped}
            </div>
        </div>
    );
};

export default SearchResults;