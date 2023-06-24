import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

export function Login() {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    console.log("This is your token: ", store.token);
    
    const handleClick = () => {
        actions.login(email, password);
    }

    if (store.token && store.token !== "" && store.token !== undefined) {
        navigate("/private");
    }

    return (
        <div id="endPointBody">
            {(store.token && store.token !== "" && store.token !== undefined) ?
                ("You are logged in with this token" + store.token) : (
                <form>
                    <h1 className="text-center" id='loginH1'>
                        Log In
                    </h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" id="btn" onClick={handleClick}>Login</button>
                </form>
                )
            }

            <Link to="/">
                <button className="btn btn-primary" id="btn">Back home</button>
            </Link>
        </div>
    );
}
