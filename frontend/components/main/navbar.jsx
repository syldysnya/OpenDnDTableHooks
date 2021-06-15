import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as ModalActions from '../../actions/modal_actions';
import DropdownMenu from './dropdown_menu';

const NavBar = () => {
    const currentPlayer = useSelector(state => state.session.currentPlayer);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = e => {
        const { value } = e.target;

        dispatch(ModalActions.openModal(value))
    }

    return (
        <div className='home-nav'>
        <div className='home-nav-left' onClick={() => history.push('/')}>
            <img src='https://app-opendndtable-seed.s3.amazonaws.com/openDnDtable.png' />
            <div className='clone-name'>OpenDnDTable</div>
        </div>
        {currentPlayer ? (
        <div className='home-nav-right'>
            <div className='dropdown-page-navbar'>
                <DropdownMenu />
            </div>
            <i className="far fa-calendar"></i>
            <i className="far fa-bell"></i>
            <div className='search-logo'>
                <i className="fas fa-search"></i>
            </div>
        </div >
    ) : (
        <div className='home-nav-right'>
            <div className='auth_button'>
                <button
                    className='btn btn-signup'
                    value='Sign Up'
                    onClick={handleClick}>
                    Sign Up
                </button>
                <button
                    className='btn btn-login'
                    value='Sign In'
                    onClick={handleClick}>
                    Sign In
                </button>
            </div>
        </div>
    )}
    </div>
    );
};

export default NavBar;