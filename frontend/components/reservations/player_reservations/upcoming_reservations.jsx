import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UpcomingReservations = () => {

    const reservations = useSelector(state => state.entities.reservations.future);
    const player = useSelector(state => state.session.currentPlayer);
    
    let mapped = reservations.map((res, i) => {
                const {gpAvatar, gpName, gameDate, gameStart, playersNum, gamePlaceId} = res;
                const gamePlace = {
                    avatarUrl: gpAvatar,
                    name: gpName,
                    id: gamePlaceId
                }
                
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
                                <NavLink style={{ textDecoration: 'none' }} to={`/book/view/${res.id}`}>View</NavLink>
                                <NavLink style={{ textDecoration: 'none' }} to={`/book/view/${res.id}`}>Modify</NavLink>
                                <NavLink style={{ textDecoration: 'none' }}
                                    to={{
                                        pathname: '/book/cancel',
                                        state: {
                                            reservation: res,
                                            gamePlace: gamePlace,
                                            currentPlayer: player
                                        }
                                    }}>
                                    Cancel
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )
            })
        
    return mapped
};

export default UpcomingReservations;