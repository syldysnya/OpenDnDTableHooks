import React from 'react';
import { NavLink } from 'react-router-dom';

class GamePlacesIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllGamePlaces()
        this.props.fetchCities()
    }

    render() {
        
        if (!this.props) return null;
        if (!this.props.cities) return null;

        let cities = this.props.cities;
        debugger
        let mapped = this.props.gamePlaces.map((gPlace, i) => {
            
            return (
                <div className='game-place-i'>
                    <div className='avatar'>
                        <img src={gPlace.avatarUrl}/>
                    </div>
                    <div className='info-box'>
                        <div>
                            <NavLink to={`/gameplaces/${gPlace.id}`}
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
                <span>Book for a game today</span>
                <div className='gp-list'>
                    {mapped}
                </div>
            </div>
        )
    }
};

export default GamePlacesIndex;

