import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import StarsShow from '../../stars/stars_show';

const AllGamePlaces = (props) => {

    const {gamePlaces, cities} = props;
    const history = useHistory();

    let mapped = Object.values({...gamePlaces.gamePlacesAll}).map((gPlace, i) => {
        const {rating, id, avatarUrl, name, reviews, lengthRat, reservations} = gPlace;

        return (
            <div className='game-place-i' key={`game-place-${i}`}>
                <div className='avatar'>
                    <img onClick={() => history.push(`/gameplaces/${id}`)} src={avatarUrl}/>
                </div>
                <div className='info-box'>
                    <div className='title'>
                        <NavLink to={{
                            pathname: `/gameplaces/${id}`
                            }}
                            style={{ textDecoration: 'none' }}>
                            {name}
                        </NavLink>
                    </div>
                    <div className='rating'>
                        <StarsShow stars={rating} lengthRat={lengthRat}/>
                        {reviews.length === 1 ? (<div>{reviews.length} review</div>) : (<div>{reviews.length} reviews</div>)}
                    </div>
                    <div className='city'>{cities.map(city => {
                        if (city.id === gPlace.cityId) {
                            return city.name
                        }
                    })}</div>
                    <div className="booked-icon">
                        <i className="fas fa-chart-line"></i>
                        {reservations.length === 1 ? (<div className='booked' >Booked {reservations.length} time today</div>) : (<div className='booked'>Booked {reservations.length} times today</div>)}
                    </div>
                </div>
            </div>
        )
    })

    const scroll = e => {
        let listGP = document.getElementById('scroll-all');
        listGP.scrollLeft += parseInt(e.target.id);
    }

    return (
        <>
            <div className='list-of-gps'>
                <span>Book for a game today</span>
                <div className='gp-list' id='scroll-all'>
                    {mapped}
                </div>
            </div>
            <div className='scroll-buttons'>
                <button className='scroll-left' onClick={scroll} id='-400'>❮
                </button>
                <button className='scroll-right' onClick={scroll} id='400'>❯
                </button> 
            </div>
        </>
    );
};

export default AllGamePlaces;