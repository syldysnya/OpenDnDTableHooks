import React, { useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import StarsShow from '../../stars/stars_show';

const AllGamePlaces = (props) => {

    const {gamePlaces, cities} = props;
    const history = useHistory();
    const refLeft = useRef();
    const refRight = useRef();
    const [scrolled, setScrolled] = useState();

    const scrollToLeft = () => {
        refLeft.current.scrollLeft = 200;
        setScrolled(true)
    }

    const scrollToRight = () => {
        ref.current.scrollLeft += scrollOffset;
    }

    let mapped = Object.values(gamePlaces.gamePlacesAll).map((gPlace, i) => {
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
                        <i className="fas fa-chart-line"></i>
                        {gPlace.reservations.length === 1 ? (<div className='booked' >Booked {gPlace.reservations.length} time today</div>) : (<div className='booked'>Booked {gPlace.reservations.length} times today</div>)}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='list-of-gps'>
            <span>Book for a game today</span>
            <button onClick={scrollToLeft} ref={refLeft} className='scroll-right'>
                <i className="fas fa-chevron-left"></i>
            </button> 
            <div className='gp-list'>
                {mapped}
            </div>
            <button onClick={scrollToRight} ref={refRight} className='scroll-left'>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default AllGamePlaces;