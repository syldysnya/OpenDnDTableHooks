import React from 'react';

const ReservationViewDetails = (props) => {
    const {confirmationNum, gameDate, gameStart, playersNum} = props.reservation;
    const {avatarUrl, name} = props.gamePlace;
    
    return (
        <div className='confirmation-box'>
            <div className='green-bos-confirmation'>
                <i className="fas fa-check-circle"></i>
                <div>
                    <span className='thanks'>Thanks! Your reservation is confirmed.</span>
                    <span>Confirmation # {confirmationNum}</span>
                </div>
            </div>
            <div className='res-details'>
                <div>
                    <img src={avatarUrl}/>
                </div>
                <div className='gp-info-res'>
                    <span className='gp-name-span'>
                        {name}</span>
                    <div className='gp-info-down'>
                        <i className="far fa-calendar"></i>
                        <span>{gameDate}</span>
                        <i className="far fa-clock"></i>
                        <span>{gameStart}</span>
                        <i className="far fa-user"></i>
                        <span>{playersNum} people</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationViewDetails;