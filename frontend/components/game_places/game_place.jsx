import React from 'react';

class GamePlace extends React.Component {
    constructor(props) {
        super(props)
        debugger
    }

    componentDidMount() {
        this.props.fetchGamePlace(this.props.match.params.gamePlaceId)
        // this.props.fetchAllGamePlaces();
    }

    render() {
        debugger
        return(
            <div className='gp-body'>
               <div className='gp-header'>
                    [THIS A GP HEADER]
               </div>
               <div className='gp-info-box'>
                    <div className='gp-info-navbar'>
                        <span>Overview</span>
                        <span>Photos</span>
                        <span>DnD Campaigns</span>
                        <span>Reviews</span>
                    </div>
                    <p>Overview compionent here</p>
                    <p>Photos compionent here</p>
                    <p>DnD Campaigns compionent here</p>
                    <p>Reviews compionent here</p>
               </div>
            </div>
        )
    }
};

export default GamePlace;