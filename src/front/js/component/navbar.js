import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Authentication System</span>
				</Link>
				{!store.token ? (
					<div className="ml-auto">
						<Link to="/login">
							<button className="btn btn-primary" id="btn">Login</button>
						</Link>
						<Link to="/signup">
							<button className="btn btn-primary" id="btn">Signup</button>
						</Link>
					</div>
				) : (
					<div className="ml-auto">
						<Link 
						onClick={() => actions.logout()}
						to="/">
							<button className="btn btn-primary" id="btn" onClick={() => actions.logout()}>
								Logout
							</button>
						</Link>
					</div>
				)
			}
			</div>
		</nav>
	);
};
