import React from 'react';

import Login from './AuthStack/Login';
import Register from './AuthStack/Register';
import Recover from './AuthStack/Recover';

export default class AuthStack extends React.Component {
	constructor(props) {
		super(props);

		this.changeView = this.changeView.bind(this);

		this.state = {
			currentView: 'login',
		};
	}

	changeView(view) {
		this.setState({ currentView: view });
	};

	render() {
		if ( this.state.currentView === 'register') {

			return ( <Register changeView={this.changeView} /> );

		} else if ( this.state.currentView === 'recover' ) {

			return ( <Recover changeView={this.changeView} /> );

		} else {

			return ( <Login changeView={this.changeView} /> );

		}
	}

}