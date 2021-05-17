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
        // this.handleLink = this.handleLink.bind(this);
        this.handleDropdownProfile = this.handleDropdownProfile.bind(this)
    }

    // handleLink(e) {
    //     e.preventDefault();
    //     
    //     if (e.currentTarget.innerHTML === 'My Profile') {
    //         <Redirect to='my/profile/info' />
    //     }
    // }

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
        e.preventDefault();
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {

        return (
            <div className='dropdown-profile-content'>
                <div
                    className='button-profile'
                    onClick={this.handleDropdownProfile}
                    onBlur={this.handleDropdownProfile}>
                    <i class="fas fa-dice-d20">
                    { this.state.visible ? (
                    <div className='dropdown-profile-open'
                        onClick={e => e.stopPropagation()}>
                        <p>Hello, {this.props.player.lname}!</p>
                        <div className='break-auth'></div>
                            {/* <button onClick={this.handleLink}></button> */}
                            <Link className='menu-links' to='/my/profile/info'>My Profile</Link>
                            <Link className='menu-links' to='/my/profile/info'>My Dining History</Link>
                            <Link className='menu-links' to='/my/favorites'>My Saved Game Places</Link>
                        <div className='signout-div'
                            onClick={this.handleClick}>
                            Sign out
                        </div>
                    </div>
                    ) : null}
                    </i>
                </div>
            </div>
        )
    }
};

export default DropdownProfile;