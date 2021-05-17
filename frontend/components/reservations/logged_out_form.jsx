import React from 'react';

class LoggedOutForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth(e) {
        e.preventDefault();
        let field = e.target.innerHTML;
        this.props.openModal(field)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleAuth} className='auth-button'>
                    Sign In
                </button>
                <button onClick={this.handleAuth} className='auth-button'>
                    Sign Up
                </button>
            </div>
        )
    }
};

export default LoggedOutForm;