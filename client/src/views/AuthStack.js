import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from '../components/AuthStack/Login';
import Register from '../components/AuthStack/Register';
import Recover from '../components/AuthStack/Recover';

export default class AuthStack extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cookie: props.cookie
		};
	}

	render() {
		console.log(this.state.cookie)

		return (
			<Router>
			<div>
				<nav>
				<ul>
					<li>
					<Link to="/">Home</Link>
					</li>
					<li>
					<Link to="/recover">About</Link>
					</li>
					<li>
					<Link to="/users">Users</Link>
					</li>
				</ul>
				</nav>

				<Switch>
					<Route path="/users">
						<Register />
					</Route>
					<Route path="/recover">
						<Recover />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Login />
					</Route>
				</Switch>
			</div>
			</Router>
		);
	}

}