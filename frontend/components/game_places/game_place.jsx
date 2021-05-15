import React from 'react';
import ReservationCreateFormContainer from '../reservations/reservation_create_form_container'

class GamePlace extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchGamePlace(this.props.match.params.gamePlaceId);
    }

    loremIpsumText() {
        return (
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        )
    }

    render() {

        if (!this.props.gamePlace) return null;

        const { gamePlace }  = this.props
        return(
            <div className='gp-body'>
               <div className='gp-header'>
                    [THIS IS A GP HEADER]
               </div>
               <div className='gp-page-box'>
                    <div className='gp-info-navbar'>
                        <li key='overview'>Overview</li>
                        <li key='photos'>Photos</li>
                        <li key='campaigns'>DnD Campaigns</li>
                        <li key='reviews'>Reviews</li>
                    </div>
                    <div className='gp-info-box' ref={this.myRef}>
                        <h1>{gamePlace.name}</h1>
                        <p>{this.loremIpsumText()}</p>
                    </div>
                    <p># of Photos</p>
                    <div className='dnd-campaigns-list'>
                        <li key='1'>Dnd campaign 1</li>
                        <li key='2'>Dnd campaign 2</li>
                        <li key='3'>Dnd campaign 3</li>
                    </div>
                    <div className='revies-list'>
                        <ul>
                            <p key='1'>Review 1</p>
                            <p key='2'>Review 1</p>
                            <p key='3'>Review 1</p>
                            <p key='4'>Review 1</p>
                            <p key='5'>Review 1</p>
                            <p key='6'>Review 1</p>
                            <p key='7'>Review 1</p>
                            <p key='8'>Review 1</p>
                        </ul>
                    </div>
               </div>
               <div className='right-bar-gp-info'>
                    <div className='gp-map'>
                        [THIS IS A MAP]
                        <p>{gamePlace.address}</p>
                    </div>
                    <div className='hours-info'>
                        <ul>
                            <p>{gamePlace.openHour}</p>
                            <p>{gamePlace.closeHour}</p>
                        </ul>
                    </div>
                    <div className='dnd-campaign-title-list'>
                        <i class="fab fa-d-and-d"></i>
                        <span> dnd titles</span>
                        <p>dndtitle1, dndtitle2, dndtitle3</p>
                        
                    </div>
                    <div className='additional-info-right-bar'>
                        <i class="fas fa-hat-wizard"></i>
                        <span> Dress Code</span>
                        <p>Casual Dress</p>
                    </div>
               </div>
               <div className='reservation-box'>
                   <ReservationCreateFormContainer />
               </div>
            </div>
        )
    }
};

export default GamePlace;