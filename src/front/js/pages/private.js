import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined) {
            actions.getMessage();
        }
    }, [store.token]);

    return (
        <div>
            <div className="alert alert-info">
                {store.message || "Hello! This is your private page when logged in."}
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
