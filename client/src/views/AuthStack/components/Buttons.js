import { Link } from "react-router-dom";

function Buttons() {
	return (
		<div className="md-auth__button-container">
			<Link className="md-auth__link" to="/register">
				<button className="md-auth__button">Sign Up</button>
			</Link>
			<Link className="md-auth__link" to="/recover">
				<a className="md-auth__link-text" href="/recover">Forgot your password?</a>
			</Link>
		</div>
	);
}

export default Buttons;
