import React from 'react';

class ReservationsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const mapped = this.props.reservations.map((res, i) => {
            <li id={`res-${i}`}>
                <p>{res.gameDate}</p>
                <p>{res.gameStart}</p>
                <p>{`Table for ${res.playersNum} people`}</p>
                <button>View</button>
                <button>Modify</button>
                <button>Cancel</button>
            </li>
        })

        return (
            <div>
                {mapped}
            </div>
        )
    }
};

export default ReservationsIndex;