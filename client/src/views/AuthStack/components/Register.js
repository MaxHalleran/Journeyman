import React from 'react';

export default class Register extends React.Component {
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
        fetch('/api/v1/auth/register', {
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

                // this.props.changeView('login');

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
            <form className="md-auth__container" onSubmit={this.onSubmit}>
                <h2 className="md-auth-title__subheader">Sign Up</h2>
                <label className="md-auth-form__label" htmlFor="email">Email</label>
                <input
                    className="md-auth-form__input"
                    type="email"
                    name="email"
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
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    className="md-auth-form__submit md-auth__button"
                    type="submit"
                    value="Submit"
                />
            </form>
        );
    }
};