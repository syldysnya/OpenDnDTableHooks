import React from 'react';

class GamePlace extends React.Component {
    constructor(props) {
        super(props)
        debugger
    }

    componentDidMount() {
        this.props.fetchGamePlace(this.props.match.params.gamePlaceId)
    }

    render() {
        debugger
        return(
            <div>
                {this.props.gamePlace}
            </div>
        )
    }
};

export default GamePlace;