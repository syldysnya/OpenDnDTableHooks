import React from 'react';
import { Link } from 'react-router-dom'

class DropdownProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.hide = this.hide.bind(this);
        this.handleDropdownProfile = this.handleDropdownProfile.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }

    handleDropdownProfile(e) {
        e.preventDefault();
        this.setState({
            visible: !this.state.visible
        })
        debugger
    }

    hide(e) {
        debugger
    }

    render() {

        if (this.state.visible) {
            return (
                <div className='dropdown-profile-open'
                    onClick={e => e.stopPropagation()}>
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
        };

        return (
            <div className='dropdown-profile-content'>
                <button
                    onClick={this.handleDropdownProfile}
                    onBlur={this.hide}>
                    Profile_icon
                </button>
            </div>
        )
    }
};

export default DropdownProfile;