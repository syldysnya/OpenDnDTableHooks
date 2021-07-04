import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { editReservation } from '../../../actions/reservation_actions';

const CanceledReservationView = (props) => {

    const location = useLocation();
    const history = useHistory();

    if (!location.state) {
        history.push('/')
        window.location.reload()
    }

    const {gamePlace, reservation, canceled} = location.state;
    const player = useSelector(state => state.session.currentPlayer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(editReservation({...reservation, canceled: canceled}))
    }, [])

    return (
        <div className='canceled-box'>
            <div className='canceled-text'>
                {player.fname}, your reservation has been canceled
            </div>
            <div className='text-1'>
                You can still make a new reservation, and support {gamePlace.name}.
            </div>
        </div>
    );
};

export default CanceledReservationView;