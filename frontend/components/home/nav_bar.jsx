import React from 'react';
import { openModal } from '../../actions/modal_actions';

class NavBar extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        let field = e.target.innerHTML
        this.props.openModal(field)
    }

    render() {
        
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
    }
};

export default NavBar;

