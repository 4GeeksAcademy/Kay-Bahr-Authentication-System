import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export function Login() {
    const {store, actions} = useContext(Context);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    console.log("This is your token: ", store.token);
    const handleClick = () => {
        actions.login(email, password)
    }

    if (store.token && store.token!="" && store.token!=undefined) history.push("/private/")

    return (
        <div id="endPointBody">
            {(store.token && store.token!="" && store.token!=undefined) ? "You are logged in with this token" + store.token:
            <form>
                <h1 class="text-center" id='loginH1'>
                    Login
                </h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" 
                    placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
			    <button className="btn btn-primary" id="btn" onClick={handleClick}>Login</button>
            </form>}

            <Link to="/">
				<button className="btn btn-primary" id="btn">Back home</button>
			</Link>
        </div>
    )
}