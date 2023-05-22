import React from "react";
import { Link } from "react-router-dom";

export function Login() {

    return (
        <div id="endPointBody">
            <form>
                <h1 class="text-center" id='loginH1'>
                    Login
                </h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Show Password</label>
                </div>
                <Link to="/private/">
			        <button className="btn btn-primary" id="btn">Login</button>
			    </Link>
            </form>

            <Link to="/">
				<button className="btn btn-primary" id="btn">Back home</button>
			</Link>
        </div>
    )
}