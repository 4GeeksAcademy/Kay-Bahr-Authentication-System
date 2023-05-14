import React from "react";

export function Private() {
    
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <Link to="/">
                        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
                    </Link>
                    <div className="ml-auto">
                        <Link to="/">
                            <button className="btn btn-primary">Logout</button>
                        </Link>
                    </div>
                </div>
            </nav>
            <h1>This is the Private Page.</h1>
        </div>
    )
}