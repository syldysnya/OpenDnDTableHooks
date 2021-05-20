import React from 'react';

class ReservationsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showed: false }

    }
    
    componentDidMount() {
        this.props.fetchAllReservations();
    }



    render() {

        if (!this.props.reservations) return null;

        let player = this.props.players[this.props.currentPlayer];

        const mapped = this.props.reservations.map((res, i) => {
            debugger
            return (
                    <div className='res-box-info' key={`res-${i}`}>
                        <div className='gp-logo'>
                            <img src={res.gpAvatar} />
                        </div>
                        <div className='gp-name'>
                            <span>{res.gpName}</span>
                            <span>{res.gameDate} at {res.gameStart}</span>
                            <span>{`Table for ${res.playersNum} people`}</span>
                            <div className='btn-group'>
                                <button>View</button>
                                <button>Modify</button>
                                <button>Cancel</button>
                            </div>
                        </div>
                    </div>
                )
            })
        
        return (
            <div className='profile-page'>
                <div className='profile-bar'>
                    {player.lname} {player.fname}
                    <span>0 points</span>
                </div>
                <div className='profile-left-bar'>
                    <div>Reservations</div>
                    <div>Saved Places</div>
                    <div>Account Details</div>
                </div>
                <div className='upcoming-reses'>
                    <div className='text-up'>Upcoming reservations</div>
                    <div className='res-index'>
                        {mapped}
                    </div>
                </div>
            </div>
        )
    }
};

export default ReservationsIndex;