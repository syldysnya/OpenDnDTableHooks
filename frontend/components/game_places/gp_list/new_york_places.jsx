import React from 'react';
import { NavLink } from 'react-router-dom';
import StarsShow from '../../stars/stars_show';

const NewYorkPlaces = (props) => {

    const {gamePlaces, cities} = props;

    let newyork = cities.filter(city => city.name === 'New York');
    let newyorkPlaces = Object.values(gamePlaces.gamePlacesAll).filter(gp => gp.cityId === newyork[0].id);

    let mapped = newyorkPlaces.map((gPlace, i) => {
        let rating = gPlace.rating;
        
        return (
            <div className='game-place-i' key={`game-place-${i}`}>
                <div className='avatar'>
                    <img src={gPlace.avatarUrl}/>
                </div>
                <div className='info-box'>
                    <div>
                        <NavLink to={{
                            pathname: `/gameplaces/${gPlace.id}`
                            }}
                            style={{ textDecoration: 'none' }}>
                            {gPlace.name}
                        </NavLink>
                    </div>
                    <div>
                        <StarsShow stars={rating} lengthRat={gPlace.lengthRat}/>
                    </div>
                    {gPlace.reviews.length === 1 ? (<div>{gPlace.reviews.length} review</div>) : (<div>{gPlace.reviews.length} reviews</div>)}
                    <div>{cities.map(city => {
                        if (city.id === gPlace.cityId) {
                            return city.name
                        }
                    })}</div>
                    {gPlace.reservations.length === 1 ? (<div>Booked {gPlace.reservations.length} time today</div>) : (<div>Booked {gPlace.reservations.length} times today</div>)}
                </div>
            </div>
        )
    })

    return (
        <div className='list-of-gps'>
            <span>Book a table in New York</span>
            <div className='gp-list'>
                {mapped}
            </div>
        </div>
    );
};

export default NewYorkPlaces;