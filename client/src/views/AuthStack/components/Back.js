import { Link } from "react-router-dom";

function Buttons() {
	return (
		<div className="md-auth__container md-auth__buttons-container">
			<Link className="md-auth__button" to="/">
				Back
			</Link>
		</div>
	);
}

export default Buttons;