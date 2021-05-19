import React from 'react';

class ReservationsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllReservations();
    }

    render() {

        if (!this.props.reservations) return null;
        
        const mapped = this.props.reservations.map((res, i) => {
            return (
                    <li id={`res-${i}`}>
                        <p>{res.gameDate}</p>
                        <p>{res.gameStart}</p>
                        <p>{`Table for ${res.playersNum} people`}</p>
                        <button>View</button>
                        <button>Modify</button>
                        <button>Cancel</button>
                    </li>
            )
        })
        
        return (
            <div className='profile-page'>
                <div>
                    
                </div>
                <div>
                    {mapped}
                </div>
            </div>
        )
    }
};

export default ReservationsIndex;