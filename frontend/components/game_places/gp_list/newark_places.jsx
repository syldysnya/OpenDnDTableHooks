import React from 'react';
import { NavLink } from 'react-router-dom';

const NewarkPlaces = (props) => {
    const {gamePlaces, cities} = props;

    let newark = cities.filter(city => city.name === 'Newark');
    let newarkPlaces = Object.values(gamePlaces.gamePlacesAll).filter(gp => gp.cityId === newark[0].id);

    let mapped = newarkPlaces.map((gPlace, i) => {
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
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <div># of reviews</div>
                    <div>Campaign title</div>
                    <div>{cities.map(city => {
                        if (city.id === gPlace.cityId) {
                            return city.name
                        }
                    })}</div>
                </div>
            </div>
        )
    })

    return (
        <div className='list-of-gps'>
            <span>Book a table in Newark</span>
            <div className='gp-list'>
                {mapped}
            </div>
        </div>
    );
};

export default NewarkPlaces;