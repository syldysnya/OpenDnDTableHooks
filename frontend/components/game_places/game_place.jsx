import React from 'react';

class GamePlace extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchGamePlace(this.props.match.params.gamePlaceId);
    }

    render() {

        if (!this.props.gamePlace) return null;

        const { gamePlace }  = this.props
        // debugger
        return(
            <div className='gp-body'>
               <div className='gp-header'>
                    [THIS A GP HEADER]
               </div>
               <div className='gp-page-box'>
                    <div className='gp-info-navbar'>
                        <span>Overview</span>
                        <span>Photos</span>
                        <span>DnD Campaigns</span>
                        <span>Reviews</span>
                    </div>
                    <div className='gp-info-box'>
                        <h1>{gamePlace.name}</h1>
                        <p></p>
                    </div>
                    <p># of Photos</p>
                    <p>DnD Campaigns component here</p>
                    <p>Reviews component here</p>
               </div>
            </div>
        )
    }
};

export default GamePlace;