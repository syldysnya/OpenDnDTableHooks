import React from 'react';

class PastReservationItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.location.aboutProps.reservation.id,
            gameDate: props.location.aboutProps.reservation.gameDate,
            gameStart: props.location.aboutProps.reservation.gameStart,
            playersNum: props.location.aboutProps.reservation.playersNum,
            dndCampaignId: props.location.aboutProps.reservation.dndCampaignId,
            gamePlaceId: props.location.aboutProps.reservation.gamePlaceId,
            playerId: props.location.aboutProps.reservation.playerId,
            confirmation_num: props.location.aboutProps.reservation.confirmation_num,
            addInfo: props.location.aboutProps.reservation.addInfo,
            canceled: props.location.aboutProps.reservation.canceled
        }

        // this.editRes = this.editRes.bind(this)
    }

    // editRes() {
    //     this.props.location.aboutProps.editReservation(this.state)
    // }

    render() {
        
        
        const { player, gamePlace } = this.props.location.aboutProps
        return (
            <div>
                <div className='canceld-text'>
                    your reservation has already been canceled
                </div>
                <div className='text-1'>
                    You can still make a new reservation, and support {gamePlace.name}.
                </div>
                {/* { this.state.canceled ? this.editRes : null } */}
            </div>
        )
    }
};

export default PastReservationItem;