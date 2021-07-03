import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { NavLink, useHistory } from 'react-router-dom';

const DropdownMenu = () => {

    const currentPlayer = useSelector(state => state.session.currentPlayer);
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const handleDropdownMenu = e => {
        setVisible(!visible)
    }

    const handleClick = e => {
        dispatch(logout())
    }

    const handleLink = e => {
        setVisible(!visible)
    }

    const hideMenu = e => {
        setVisible(false)
    }

    return (
        <div className='dropdown-profile-content'>
            <div className='button-profile' tabIndex='0'
                onClick={handleDropdownMenu}
                >
                <i className="fas fa-dice-d20"></i>
                { visible ? (
                <div className='dropdown-profile-open' onBlur={hideMenu}
                    onClick={e => e.stopPropagation()}>
                    <p>Hello, {currentPlayer.fname}!</p>
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