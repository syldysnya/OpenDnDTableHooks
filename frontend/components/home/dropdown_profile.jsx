import React from 'react';
import { Link } from 'react-router-dom'

class DropdownProfile extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }

    render() {
        return (
            <div className='dropdown-profile'>
                <p>Hello, {this.props.player.lname}!</p>
                <Link to='my/profile/info'>My Profile</Link>
                <Link to='my/profile/info'>My Dining History</Link>
                <Link to='my/favorites'>My Saved Game Places</Link>
                <button
                    className='signout-button'
                    onClick={this.handleClick}>
                    Sign out
                </button>
            </div>
        )
    }
};

export default DropdownProfile;