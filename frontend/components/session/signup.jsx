import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
            city_id: '',
            confirmPassword: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
        this.handleInputCity = this.handleInputCity.bind(this)
    }

    handleErrors(field) {
        return this.props.errors.filter(error => error.includes(field))
    }

    componentDidMount() {
        this.props.fetchCities();
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    demoSubmit(e) {
        e.preventDefault();
        this.props.loginDemo().then(this.props.hideModal);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleInputCity(e) {
        
        const idx = parseInt(e.target.value);
        this.setState({ city_id: this.props.city_indices[idx] })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(this.props.hideModal);
    }

    render() {
        return (
            <div id='signup-modal-background'>
                <div className='row'>
                    <div className='first-message-column-modal'>
                        <h1>Welcome to OpenTable!</h1>
                    </div>
                    <div className='row'>
                        <form className='user-form'>
                            <label htmlFor="fname-login">
                                <input
                                    className='modal-input'
                                    type="text"
                                    id="fname-login"
                                    placeholder='First Name *'
                                    onChange={this.handleInput('fname')}
                                />
                                <li className='auth-error' key='fname-error'>
                                    {this.handleErrors('Fname')}
                                </li>
                            </label>
                            <label htmlFor="lname-login">
                                <input
                                    className='modal-input'
                                    type="text"
                                    id="lname-login"
                                    placeholder='Last Name *'
                                    onChange={this.handleInput('lname')}
                                />
                                <li className='auth-error' key='lname-error'>
                                    {this.handleErrors('Lname')}
                                </li>
                            </label>
                            <label htmlFor="email-login">
                                <input
                                    className='modal-input'
                                    type="text"
                                    id="email-login"
                                    placeholder='Enter Email *'
                                    onChange={this.handleInput('email')}
                                />
                                <li className='auth-error' key='email-error'>
                                    {this.handleErrors('Email')}
                                </li>
                            </label>
                            <label htmlFor="password-login">
                                <input
                                    className='modal-input'
                                    type="password"
                                    id="password-login"
                                    placeholder='Enter password *'
                                    onChange={this.handleInput('password')}
                                />
                                <li className='auth-error' key='password-error'>
                                    {this.handleErrors('Password')}
                                </li>
                            </label>
                            <label htmlFor="password-login2">
                                <input
                                    className='modal-input'
                                    type="password"
                                    id="password-login2"
                                    placeholder='Re-enter password *'
                                    onChange={this.handleInput('confirmPassword')}
                                />
                                <li className='auth-error' key='password-error'>
                                    {this.handleErrors('Password')}
                                </li>
                            </label>
                            <label htmlFor="city-login">
                                <select onChange={this.handleInputCity}
                                    className='modal-input'>
                                    <option disabled defaultValue='Primary city'>Primary city*</option>
                                    {this.props.cities.map((city, i) => (
                                        <option key={`city-${i}`} value={i}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <li className='auth-error' key='city-error'>
                                {this.handleErrors('City')}
                            </li>
                            <button
                                className='auth-button'
                                onClick={this.handleSubmit}>
                                    Create Account
                            </button>
                        </form>
                        <div className='demouser-form'>
                            <div>Don't want to complete the form?</div>
                            <button
                                className='auth-button demouser-button'
                                onClick={this.demoSubmit}>
                                Continue with <span>DemoUser</span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Signup;