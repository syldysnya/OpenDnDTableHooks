import React from 'react';

const PastReservations = (props) => {
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
                        <div className='btn-group'>
                            <div className="status-canceled">Cancelled</div>
                            <div className="numplayers-inf">{`Table for ${playersNum} people`}</div>
                            <div className="save-fav">
                                <i class="far fa-bookmark"></i>
                                <div>Save this restaurant</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    return mapped
};

export default PastReservations;