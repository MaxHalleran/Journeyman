import React from 'react';
import { BrowserRouter as Router, Switch, Route, /* Link */ } from "react-router-dom";

import Back from './components/Back';
import Buttons from './components/Buttons';
import Login from './components/Login';
import Register from './components/Register';
import Recover from './components/Recover';

export default class AuthStack extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cookie: props.cookie
		};
	}

	componentDidMount() {
		console.log(this.state.cookie);

		console.log("Cookies!")
	}

	render() {

		return (
			// Main container
			<main className="md-container md-auth__page">

				{/* Title / Container */}
				<div className="md-auth--title__container">
					<h1 className="md-auth-title__title">Journeyman</h1>
				</div>
				
				<Router>
					<Switch>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/recover">
							<Recover />
						</Route>
						<Route path="/">
							<Login />
						</Route>
					</Switch>

					<Switch>
						<Route exact path="/">
							<Buttons />
						</Route>
						<Route path="/*">
							<Back />
						</Route>
					</Switch>
				</Router>
			</main>
		);
	}

}
