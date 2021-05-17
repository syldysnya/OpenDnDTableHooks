import React from 'react';
import { NavLink } from 'react-router-dom';

class GamePlacesIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllGamePlaces()
    }

    render() {
        
        if (!this.props) return null;

        let mapped = this.props.gamePlaces.map((gPlace, i) => {
            
            return (
                <li id={`game-place-${i}`}>
                    <div className='avatar'>
                        <img src={gPlace.avatarUrl}/>
                    </div>
                    <NavLink to={`/gameplaces/${gPlace.id}`}>
                        {gPlace.name}
                    </NavLink>
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    <p>[number of reviews</p>
                    <span>[dnd campaign title]</span>
                    <span>{gPlace.cityId}</span>
                </li>
            )
        })

        return (
            <div className='list-of-gps'>
                List of places
                <div className='gp-list'>
                    {mapped}
                </div>
            </div>
        )
    }
};

export default GamePlacesIndex;

