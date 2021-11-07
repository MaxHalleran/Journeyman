import { Link } from "react-router-dom";

function Buttons() {
	return (
		<div className="md-auth__button-container">
			<Link className="md-auth__link" to="/">
				<button className="md-auth__button">Back</button>
			</Link>
		</div>
	);
}

export default Buttons;