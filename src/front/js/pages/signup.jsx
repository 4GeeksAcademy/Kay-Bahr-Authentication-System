import React from "react";

export function Signup() {

    return (
        <div>
            <h1>
                Email: 
            </h1>
            <h1>
                Password: 
            </h1>
            <Link to="/">
			    <button className="btn btn-primary">Submit</button>
			</Link>
        </div>
    )
}