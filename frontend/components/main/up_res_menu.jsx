import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { fetchAllReservations } from '../../actions/reservation_actions';
import { NavLink } from 'react-router-dom';
import { fetchGamePlace } from '../../actions/game_place_actions';

const UpComMenu = () => {

    const player = useSelector(state => state.session.currentPlayer)
    const [reservations, setReservations] = useState('');
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [listRes, setListRes] = useState();
    let list;

    useEffect(() => {
        dispatch(fetchAllReservations())
            .then(res => setReservations(res.reservations))
    }, [])

    const handleDropdownMenu = e => {
        if (e.target.contains(e.relatedTarget)) {
            return null;
        }

        setVisible(!visible)
    }

    useEffect(() => {
        if (reservations) {
            list = Object.values(reservations).filter(res => res.canceled === false)
            setListRes(list[0])
        }
    }, [visible])

    return (
        <div className="upcom-profile-menu" tabIndex='0'
            onClick={handleDropdownMenu}
            onBlur={handleDropdownMenu}>
            <div className='upres-menu' >
                <i className="far fa-calendar"></i>
            </div>
            {visible && (<div className="upcom-menu-box">
                <div className="upcom-title">
                    Upcoming reservations
                </div>
                <div className="upcome-box">
                        {listRes ? (
                            <>
                                <div className="upcom-icon">
                                    <i className="fas fa-store-alt"></i>
                                </div>
                                <div className="upcome-info">
                                    <span className='gp-name-span-up'>
                                        {listRes.gpName}
                                    </span>
                                    <div className='gp-info-down-up'>
                                        <div>
                                            <i className="far fa-calendar"></i>
                                            <span>{listRes.gameDate}</span>
                                        </div>
                                        <div>
                                            <i className="far fa-clock"></i>
                                            <span>{listRes.gameStart}</span>
                                        </div>
                                        <div>
                                            <i className="far fa-user"></i>
                                            <span>{listRes.playersNum} people</span>
                                        </div>
                                    </div>
                                    <div className="crud-links">
                                        <NavLink style={{ textDecoration: 'none' }} to={`/book/view/${listRes.id}`}>
                                            View
                                        </NavLink>
                                        <i className="fas fa-circle"></i>
                                        <NavLink style={{ textDecoration: 'none' }} to={`/book/view/${listRes.id}`}>
                                            Modify
                                        </NavLink>
                                    </div>
                                    <div className="cancel-up">
                                        <NavLink style={{ textDecoration: 'none' }}
                                            to={{
                                                pathname: '/book/cancel',
                                                state: {
                                                    reservation: listRes,
                                                    gamePlaceId: listRes.gamePlaceId,
                                                    currentPlayer: player
                                                }
                                            }}>
                                            Cancel
                                        </NavLink>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="no-upcom">
                                No upcoming reservations
                            </div>
                        )}
                </div>
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