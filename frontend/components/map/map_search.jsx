import React from 'react';
import GamePlacesIndex from '../game_places/game_places_index';
import GamePlacesMap from './game_places_map';

class MapSearch extends React.Component {

    render() {
        return (
            <div>
                <GamePlacesIndex gamePlaces={this.props.gamePlaces}/>
                <GamePlacesMap gamePlaces={this.props.gamePlaces}/>
            </div>
        )
    }
};

export default MapSearch;