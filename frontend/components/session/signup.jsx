import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
    }

    demoSubmit(e) {
        e.preventDefault();
        this.props.loginDemo().then(this.props.hideModal);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(this.props.hideModal);
    }

    render() {
        return (
            <div id='signup-modal-background'>
                <div className='row'>
                    <div className='column'>
                        <h1>Welcome to OpenTable!</h1>
                    </div>
                    <div className='row'>
                        <form className='user-form'>
                            <label htmlFor="fname-login">
                                <input
                                    type="text"
                                    id="fname-login"
                                    placeholder='First Name *'
                                    onChange={this.handleInput('fname')}
                                />
                            </label>
                            <label htmlFor="lname-login">
                                <input
                                    type="text"
                                    id="lname-login"
                                    placeholder='Last Name *'
                                    onChange={this.handleInput('lname')}
                                />
                            </label>
                            <label htmlFor="email-login">
                                <input
                                    type="text"
                                    id="email-login"
                                    placeholder='Enter Email *'
                                    onChange={this.handleInput('email')}
                                />
                            </label>
                            <label htmlFor="password-login">
                                <input
                                    type="password"
                                    id="password-login"
                                    placeholder='Enter password *'
                                    onChange={this.handleInput('password')}
                                />
                            </label>
                            <label htmlFor="password-login">
                                <input
                                    type="password"
                                    id="password-login"
                                    placeholder='Re-enter password *'
                                    onChange={this.handleInput('password')}
                                />
                            </label>
                            <button onClick={this.handleSubmit}>Create Account</button>
                        </form>
                        <div className='demouser-form'>
                            <h2>Don't want to complete the form?</h2>
                            <button
                                className='demouser-button'
                                onClick={this.demoSubmit}>
                                Continue with DemoUser
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Signup;