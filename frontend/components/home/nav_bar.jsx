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
                    <div className='home-nav-right'>
                        <div className='dropdown-page-navbar'>
                            <DropdownProfile
                                player={this.props.player} 
                                logout={this.props.logout}/>
                        </div>
                        <i className="far fa-calendar"></i>
                        <i className="far fa-bell"></i>
                        <div className='search-logo'>
                            <i className="fas fa-search"></i>
                        </div>
                    </div >
                )
            };

        const notLoggedIn = () => {
            return (
                <div className='home-nav-right'>
                    <div className='auth_button'>
                        <button
                            className='btn btn-signup'
                            onClick={this.handleClick}>
                            Sign Up
                        </button>
                        <button
                            className='btn btn-login'
                            onClick={this.handleClick}>
                            Sign In
                        </button>
                    </div>
                </div>
            )
        };
        return (
            <div className='home-nav'>
                <div className='home-nav-left' onClick={() => this.props.history.push('/')}>
                    <img src='https://app-opendndtable-seed.s3.amazonaws.com/openDnDtable.png' />
                    <div className='clone-name'>OpenDnDTable</div>
                </div>
                {currentPlayer ? ifLoggedIn() : notLoggedIn()}
            </div>
        )

    }
};

export default NavBar;

