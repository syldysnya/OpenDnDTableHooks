import React from 'react';

const ReservationViewDetails = (props) => {
    const {confirmationNum, gameDate, gameStart, playersNum} = props.reservation;
    const {avatarUrl, name} = props.gamePlace;
    
    return (
        <div className='confirmation-box'>
            <div className='green-bos-confirmation'>
                <span className='thanks'>Thanks! Your reservation is confirmed.</span>
                <span>Confirmation # {confirmationNum}</span>
            </div>
            <div className='res-details'>
                <div>
                    <img src={avatarUrl}/>
                </div>
                <div>
                    <span className='gp-name-span'>
                        {name}</span>
                    <div>
                        <span>{gameDate}</span>
                        <span>{gameStart}</span>
                    </div>
                    <span>{playersNum} people</span>
                </div>
            </div>
        </div>
    );
};

export default ReservationViewDetails;