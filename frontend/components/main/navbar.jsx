import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as ModalActions from '../../actions/modal_actions';
import { fetchAllReservations } from '../../actions/reservation_actions';
import DropdownMenu from './dropdown_menu';
import NotificationMenu from './notification';
import UpComMenu from './up_res_menu';

const NavBar = () => {
    const currentPlayer = useSelector(state => state.session.currentPlayer);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchAllReservations())
    }, [])

    const handleClick = e => {
        const { value } = e.target;

        dispatch(ModalActions.openModal(value))
    }

    const handleModal = (e) => {
        e.preventDefault();
        dispatch(ModalActions.openModal('Search'))
    }

    return (
        <div className='home-nav' >
        <div className='home-nav-left' onClick={() => history.push('/')}>
            <img src='https://app-opendndtable-seed.s3.amazonaws.com/openDnDtable.png' />
            <div className='clone-name'>OpenDnDTable</div>
        </div>
        {currentPlayer ? (
        <div className='home-nav-right'>
            <div className='dropdown-page-navbar'>
                <DropdownMenu />
            </div>
            <div className="upcom-page-navbar">
                <UpComMenu />
            </div>
            <div className="notif-page-navbar">
                <NotificationMenu />
            </div>
            <div className='search-logo' onClick={handleModal}>
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