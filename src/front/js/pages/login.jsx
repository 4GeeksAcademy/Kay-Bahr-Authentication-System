import React from "react";

export function Login() {

    return (
        <div>
            <h1>
                Username: 
            </h1>
            <h1>
                Password: 
            </h1>
            <button>
                <Link to="/private">
					<button className="btn btn-primary">Login</button>
				</Link>
            </button>
        </div>
    )
}