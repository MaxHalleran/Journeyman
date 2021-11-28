import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    
    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('/api/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status === 200) {
                console.log("Props: ", this);
                console.log( "Response: ", res );

                // this.props.history.push('/');
            } else {
            const error = new Error(res.error);
            throw error;
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error logging in please try again');
        });
    }

    render () {
        return (
            <div>
                <p className="md-auth-title__subheader">Log in to your account</p>
                <form className="md-auth-form__container" onSubmit={this.onSubmit}>
                    <label className="md-auth-form__label" htmlFor="email">Email</label>
                    <input
                        className="md-auth-form__input"
                        type="email"
                        name="email"
                        // placeholder="Email"
                        autoComplete="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <label className="md-auth-form__label" htmlFor="password">Password</label>
                    <input
                        className="md-auth-form__input"
                        type="password"
                        name="password"
                        // placeholder="Password"
                        autoComplete="current-password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input
                        className="md-auth-form__submit md-auth__button"
                        type="submit"
                        value="Log In"
                    />
                </form>
            </div>
        );
    }
};