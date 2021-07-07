import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import StarsShow from '../../stars/stars_show';

const RatedPage = () => {

    const gamePlaces = useSelector(state => state.entities.gamePlaces);
    const cities = useSelector(state => Object.values(state.entities.cities.citiesAll));
    const history = useHistory();
    let mapped;

    if (gamePlaces.rating) {
        mapped = Object.values(gamePlaces.rating).map((gPlace, i) => {
            const { rating, id, avatarUrl, name, lengthRat, reviews, cityId, reservations } = gPlace;
            
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
                        {reviews === 1 ? (<div>{reviews} review</div>) : (<div>{reviews} reviews</div>)}
                    </div>
                    <div className='city'>{cities.map(city => {
                        if (city.id === cityId) {
                            return city.name
                        }
                    })}</div>
                    <div className="booked-icon">
                        <i className="fas fa-chart-line"></i>
                        {reservations === 1 ? (<div className='booked' >Booked {reservations} time today</div>) : (<div className='booked'>Booked {reservations} times today</div>)}
                    </div>
                </div>
            </div>
        )})
    }

    const scroll = e => {
        let listGP = document.getElementById('scroll-ny');
        listGP.scrollLeft += parseInt(e.target.id)
    }

    return (
        <>
            <div className='list-of-gps'>
                <span>Best rated game places</span>
                <div className='gp-list' id='scroll-ny'>
                    {mapped}
                </div>
            </div>
            <div className='scroll-buttons'>
                <button className='scroll-left' onClick={scroll} id='-500'>❮
                </button>
                <button className='scroll-right' onClick={scroll} id='500'>❯
                </button> 
            </div>
        </>
    );
};

export default RatedPage;