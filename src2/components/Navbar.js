import "./Navbar.css";
import { Link } from "react-router-dom";
import botImage from "./bot.png";

const Navbar = () => {
	return (
		<>
			<div className="navbar-container">
				<Link className="home-link" to="/">
				<img className="bot" src={botImage} />
				</Link>
				<div className="link-wrapper">
					<Link className="nav-link" to="/">
						<h2>Home</h2>
					</Link>
					<Link className="nav-link" to="/about">
						<h2>About</h2>
					</Link>
					<Link className="nav-link" to="/how-it-works">
						<h2>How It Works</h2>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
