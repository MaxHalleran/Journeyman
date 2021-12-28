import { Link } from "react-router-dom";

function Buttons() {
	return (
		<div className="md-auth__container md-auth__buttons-container">
			{/* <Link className="md-auth__link" to="/login">
				<button className="md-auth__button">Login</button>
			</Link> */}
			<Link className="md-auth__button" to="/register">
				Sign Up
			</Link>
			<Link className="md-auth__text-link" to="/recover">
				<a href="/recover">Forgot your password?</a>
			</Link>
		</div>
	);
}

export default Buttons;