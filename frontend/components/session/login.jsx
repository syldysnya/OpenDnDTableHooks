import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    render() {
        return (
            <body id='login-modal-background'>
                <div className='row'>
                    <div className='column'>
                        <h1>Please sign in</h1>
                    </div>
                </div>
                <div className='row'>
                    <form>
                        <label htmlFor="email-login">
                            <input
                                type="text"
                                id="email-login"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <label htmlFor="password-login">
                            <input
                                type="password"
                                id="password-login"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>
                        <button onClick={this.handleSubmit}>Sign In</button>
                    </form>
                </div>
            </body>
        )
    }
};

export default Login;