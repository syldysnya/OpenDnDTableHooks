import React from 'react';

class GamePlace extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchGamePlace(this.props.match.params.gamePlaceId)
    }

    render() {
        debugger
        return(
            <div>
                Game Place Page!
            </div>
        )
    }
};

export default GamePlace;