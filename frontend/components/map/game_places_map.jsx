import React from 'react';
import MarkerManager from '../../util/marker_manager';

class GamePlacesMap extends React.Component {

    componentDidMount() {
        //...
        this.map = new google.maps.Map(mapDOMNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
    }

    render() {
        return (
            <div ref={map => this.mapNode = map}></div>
        )
    }
};

export default GamePlacesMap;