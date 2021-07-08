import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UpComMenu = () => {

    const player = useSelector(state => state.session.currentPlayer)
    const reservations = useSelector(state => state.entities.reservations.future)
    const [visible, setVisible] = useState(false);

    const handleDropdownMenu = e => {
        setVisible(!visible)
    }

    const hideMenu = e => {
        if (e.target.contains(e.relatedTarget)) {
            return null
        }
        setVisible(false)
    }

    return (
        <div className="upcom-profile-menu" tabIndex='0' onBlur={hideMenu}>
            <div className='upres-menu' onClick={handleDropdownMenu}>
                <i className="far fa-calendar"></i>
            </div>
            {visible && (<div className="upcom-menu-box">
                <div className="upcom-title">
                    Upcoming reservation
                </div>
                {reservations[0] ? (
                    <div className="upcome-box" onMouseLeave={hideMenu}>
                        <div className="upcom-icon">
                            <i className="fas fa-store-alt"></i>
                        </div>
                        <div className="upcome-info">
                            <span className='gp-name-span-up'>
                                {reservations[0].gpName}
                            </span>
                            <div className='gp-info-down-up'>
                                <div>
                                    <i className="far fa-calendar"></i>
                                    <span>{reservations[0].gameDate}</span>
                                </div>
                                <div>
                                    <i className="far fa-clock"></i>
                                    <span>{reservations[0].gameStart}</span>
                                </div>
                                <div>
                                    <i className="far fa-user"></i>
                                    <span>{reservations[0].playersNum} people</span>
                                </div>
                            </div>
                            <div className="crud-links">
                                <NavLink style={{ textDecoration: 'none' }} to={`/book/view/${reservations[0].id}`}>
                                    View
                                </NavLink>
                                <i className="fas fa-circle"></i>
                                <NavLink style={{ textDecoration: 'none' }} to={`/book/view/${reservations[0].id}`}>
                                    Modify
                                </NavLink>
                            </div>
                            <div className="cancel-up">
                                <NavLink style={{ textDecoration: 'none' }}
                                    to={{
                                        pathname: '/book/cancel',
                                        state: {
                                            reservation: reservations[0],
                                            gamePlaceId: reservations[0].gamePlaceId,
                                            currentPlayer: player
                                        }
                                    }}>
                                    Cancel
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="no-upcom">
                        No upcoming reservations
                    </div>
                )}
                <div className="upcome-all-res">
                    <NavLink to={'/my/profile'} style={{ textDecoration: 'none' }} onClick={handleDropdownMenu}>
                            View all reservations
                    </NavLink>
                </div>
            </div>)}
        </div>
    );
};

export default UpComMenu;