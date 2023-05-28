import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined) {
            actions.getMessage();
        }
    }, [store.token]);

    const email = store.email; // Assuming email is stored in the store

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <Link to="/">
                        <span className="navbar-brand mb-0 h1">Authentication System</span>
                    </Link>
                    <div className="ml-auto">
                        <Link to="/">
                            <button className="btn btn-primary" id="btn" onClick={() => actions.logout()}>
                                Logout
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="alert alert-info">
                {store.message || "Hello, " + email + "! This is your private page when logged in."}
            </div>

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button" id="btn">
                    Back home
                </span>
            </Link>
        </div>
    );
};

Private.propTypes = {
    match: PropTypes.object,
};
