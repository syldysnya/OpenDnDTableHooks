import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import StarsShow from '../../stars/stars_show';

const NewYorkPlaces = (props) => {

    const {gamePlaces, cities} = props;
    const history = useHistory();

    let newyork = cities.filter(city => city.name === 'New York');
    let newyorkPlaces = Object.values(gamePlaces.gamePlacesAll).filter(gp => gp.cityId === newyork[0].id);

    let mapped = newyorkPlaces.map((gPlace, i) => {
        let rating = gPlace.rating;
        
        return (
            <div className='game-place-i' key={`game-place-${i}`}>
                <div className='avatar'>
                    <img onClick={() => history.push(`/gameplaces/${gPlace.id}`)} src={gPlace.avatarUrl}/>
                </div>
                <div className='info-box'>
                    <div className='title'>
                        <NavLink to={{
                            pathname: `/gameplaces/${gPlace.id}`
                            }}
                            style={{ textDecoration: 'none' }}>
                            {gPlace.name}
                        </NavLink>
                    </div>
                    <div className='rating'>
                        <StarsShow stars={rating} lengthRat={gPlace.lengthRat}/>
                        {gPlace.reviews.length === 1 ? (<div>{gPlace.reviews.length} review</div>) : (<div>{gPlace.reviews.length} reviews</div>)}
                    </div>
                    <div className='city'>{cities.map(city => {
                        if (city.id === gPlace.cityId) {
                            return city.name
                        }
                    })}</div>
                    <div className="booked-icon">
                        <i class="fas fa-chart-line"></i>
                        {gPlace.reservations.length === 1 ? (<div className='booked' >Booked {gPlace.reservations.length} time today</div>) : (<div className='booked'>Booked {gPlace.reservations.length} times today</div>)}
                    </div>
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