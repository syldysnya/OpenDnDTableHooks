import React from 'react';

const UpcomingReservations = (props) => {

    const {reservations} = props;

    const mapped = reservations.map((res, i) => {
        const {gpAvatar, gpName, gameDate, gameStart, playersNum} = res;
        return (
                <div className='res-box-info' key={`res-${i}`}>
                    <div className='gp-logo'>
                        <img src={gpAvatar} />
                    </div>
                    <div className='gp-name'>
                        <span>{gpName}</span>
                        <span>{gameDate} at {gameStart}</span>
                        <span className='table'>{`Table for ${playersNum} people`}</span>
                        <div className='btn-group'>
                            <button>View</button>
                            <button>Modify</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
            )
        })

    return mapped
};

export default UpcomingReservations;