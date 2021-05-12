import React from 'react';
import DropdownProfile from './dropdown_profile';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let field = e.target.innerHTML;
        this.props.openModal(field)
    }

    render() {
        const { currentPlayer } = this.props;

        const ifLoggedIn = () => {
            return (
                <div className='dropdown-page-navbar'>
                    <DropdownProfile
                        player={this.props.player} 
                        logout={this.props.logout}/>
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

