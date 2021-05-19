import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom'

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

    hide(e) {
        e.preventDefault();
        this.setState({
            visible: !this.state.visible
        })
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }

    handleDropdownProfile(e) {
        if (e.target.contains(e.relatedTarget)) {
            return null;
        }

        this.setState({
            visible: !this.state.visible
        })
    }

    render() {

        return (
            <div className='dropdown-profile-content'>
                <div className='button-profile' tabIndex='0'
                    onClick={this.handleDropdownProfile}
                    onBlur={this.handleDropdownProfile}>
                    <i className="fas fa-dice-d20"></i>
                    { this.state.visible ? (
                    <div className='dropdown-profile-open'
                        onClick={e => e.stopPropagation()}>
                        <p>Hello, {this.props.player.lname}!</p>
                        <div className='break-auth'></div>
                        <Link className='menu-links' to='/my/profile/info'>My Profile</Link>
                        <Link className='menu-links' to='/my/profile/info'>My Dining History</Link>
                        <Link className='menu-links' to='/my/favorites'>My Saved Game Places</Link>
                        <div className='signout-div'
                            onClick={this.handleClick}>
                            Sign out
                        </div>
                    </div>
                    ) : null}
                </div>
            </div>
        )
    }
};

export default DropdownProfile;