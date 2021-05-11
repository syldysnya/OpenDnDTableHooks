import React from 'react';
import { openModal } from '../../actions/modal_actions';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        debugger
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        let field = e.target.innerHTML
        this.props.openModal(field)
    }

    render() {
        const { currentPlayer } = this.props

        const ifLoggedIn = () => {
            return (
                <div className='main-page-navbar'>
                    <p>You are logged in</p>
                </div>
            )
        };

        const notLoggedIn = () => {
            return (
                <div className='auth_button'>
                    <button
                        className='button-login'
                        onClick={this.handleClick}>
                        Sign In
                </button>
                    <button
                        className='button-signup'
                        onClick={this.handleClick}>
                        Sign Up
                </button>
                </div>
            )
        };

        return currentPlayer ? ifLoggedIn() : notLoggedIn();

    }
};

export default NavBar;

