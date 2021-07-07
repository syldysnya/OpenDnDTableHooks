import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import StarsShow from '../../stars/stars_show';

const NewarkPlaces = (props) => {
    const gamePlaces = useSelector(state => state.entities.gamePlaces);
    const cities = useSelector(state => Object.values(state.entities.cities.citiesAll));
    const history = useHistory();
    let mapped;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            setVisible(true)
        } else {
            setVisible(false)
        }

        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
      
        window.addEventListener('resize', handleResize)
    }, [])

    mapped = newarkPlaces.map((gPlace, i) => {
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
                        {gPlace.reviews === 1 ? (<div>{gPlace.reviews} review</div>) : (<div>{gPlace.reviews} reviews</div>)}
                    </div>
                    <div className='city'>{cities.map(city => {
                        if (city.id === gPlace.cityId) {
                            return city.name
                        }
                    })}</div>
                    <div className="booked-icon">
                        <i className="fas fa-chart-line"></i>
                        {gPlace.reservations === 1 ? (<div className='booked' >Booked {gPlace.reservations} time today</div>) : (<div className='booked'>Booked {gPlace.reservations} times today</div>)}
                    </div>
                </div>
            </div>
        )
    })

    const scroll = e => {
        let listGP = document.getElementById('scroll-nw');
        listGP.scrollLeft += parseInt(e.target.id)
    }

    return (
        <>
            <div className='list-of-gps'>
                <span>Book a table in Newark</span>
                <div className='gp-list' id='scroll-nw'>
                    {mapped}
                </div>
            </div>
            {visible && (<div className='scroll-buttons'>
                <button className='scroll-left' onClick={scroll} id='-500'>❮
                </button>
                <button className='scroll-right' onClick={scroll} id='500'>❯
                </button> 
            </div>)}
        </>
    );
};

export default NewarkPlaces;