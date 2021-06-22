import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { NavLink } from 'react-router-dom';

const DropdownMenu = () => {

    const currentPlayer = useSelector(state => state.session.currentPlayer);
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const handleDropdownMenu = e => {
        if (e.target.contains(e.relatedTarget)) {
            return null;
        }

        setVisible(!visible)
    }

    const handleClick = e => {
        dispatch(logout())
    }

    const handleLink = e => {
        setVisible(!visible)
    }

    return (
        <div className='dropdown-profile-content'>
            <div className='button-profile' tabIndex='0'
                onClick={handleDropdownMenu}
                onBlur={handleDropdownMenu}>
                <i className="fas fa-dice-d20"></i>
                { visible ? (
                <div className='dropdown-profile-open'
                    onClick={e => e.stopPropagation()}>
                    <p>Hello, {currentPlayer.lname}!</p>
                    <div className='break-auth'></div>
                    <NavLink className='menu-links' to='/my/profile' onClick={handleLink}>My Profile</NavLink>
                    <NavLink className='menu-links' to='/my/profile' onClick={handleLink}>My Dining History</NavLink>
                    <NavLink className='menu-links' to='/my/favorites' onClick={handleLink}>My Saved Game Places</NavLink>
                    <div className='signout-div'
                        onClick={handleClick}>
                        Sign out
                    </div>
                </div>
                ) : null}
            </div>
        </div>
    );
};

export default DropdownMenu;