import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
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
        this.props.login(this.state).then(this.props.hideModal);
    }

    render() {
        return (
            <div id='login-modal-background'>
                <div className='row'>
                    <div className='column'>
                        <h1>Please sign in</h1>
                    </div>
                </div>
                <div className='row'>
                    <form className='user-form'>
                        <label htmlFor="email-login">
                            <input
                                type="text"
                                id="email-login"
                                placeholder='Email'
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <label htmlFor="password-login">
                            <input
                                type="password"
                                id="password-login"
                                placeholder='Password'
                                onChange={this.handleInput('password')}
                            />
                        </label>
                        <button onClick={this.handleSubmit}>Sign In</button>
                    </form>
                    <div className='demouser-form'>
                        <h2>Don't want to complete the form?</h2>
                        <button
                            className='demouser-button'
                            onClick={this.demoSubmit}>
                            Continue with DemoUser
                        </button>
                    </div>
                    <div>
                        <h2>New to OpenTable?</h2>
                        <button
                            onClick={() => this.props.openModal('Sign Up')}> 
                            Create an account
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;