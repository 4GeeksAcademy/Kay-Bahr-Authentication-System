import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = props => {
    const { store, actions } = useContext(Context);
	const params = useParams();
    
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <Link to="/">
                        <span className="navbar-brand mb-0 h1">Authentication System</span>
                    </Link>
                    <div className="ml-auto">
                        <Link to="/">
                            <button className="btn btn-primary">Logout</button>
                        </Link>
                    </div>
                </div>
            </nav>

            <h1>This is the Private Page of {store.demo[params.theid].title}</h1>

            <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
        </div>
    )
}

Private.propTypes = {
	match: PropTypes.object
};
