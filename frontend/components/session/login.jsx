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

    handleErrors(field) {
        return this.props.errors.filter(error => error.includes(field))
    }

    componentWillUnmount() {
        this.props.removeErrors();
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
        this.props.login(this.state).then((payload) => {
            this.props.hideModal();
            this.props.removeErrors()
        })
    }

    render() {
        return (
            <div id='login-modal-background'>
                <div className='row'>
                    <div className='first-message-column-modal'>
                        <h1>Please sign in</h1>
                    </div>
                </div>
                <div className='row'>
                    <form className='user-form'>
                        <label htmlFor="email-login">
                            <input
                                className='modal-input'
                                type="text"
                                id="email-login"
                                placeholder='Email'
                                onChange={this.handleInput('email')}
                            />
                            <li className='auth-error' key='fname-error'>
                                {this.handleErrors('Wrong')}
                            </li>
                        </label>
                        <label htmlFor="password-login">
                            <input
                                className='modal-input'
                                type="password"
                                id="password-login"
                                placeholder='Password'
                                onChange={this.handleInput('password')}
                            />
                            <li className='auth-error' key='fname-error'>
                                {this.handleErrors('Wrong')}
                            </li>
                        </label>
                        <button type='submit'
                            className='auth-button'
                            onClick={this.handleSubmit}>
                                Sign In
                        </button>
                    </form>
                    <div className='break-auth'></div>
                    <div className='demouser-form'>
                        <div>Don't want to complete the form?</div>
                        <button
                            className='auth-button demouser-button'
                            onClick={this.demoSubmit}>
                            Continue with <span>DemoUser</span>
                        </button>
                    </div>
                    <div>
                        <span id='span-for-new'>New to OpenTable?</span>
                        <div className='btn-sign-in-login'
                            onClick={() => this.props.openModal('Sign Up')}> 
                            Create an account
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;