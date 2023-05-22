import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick = () => {

        const opts = {
            method: 'POST',
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }

        fetch('https://kaybahr-urban-guacamole-r95q7vxgr4w3x7xq-3001.preview.app.github.dev/api/token', opts)
            .then(resp => {
                if(resp.status === 200) return resp.json();
                else alert('There has been an error')
            })
            .then()
            .catch(error => (
                console.error('There was an error', error)
            ))

    }

    return (
        <div id="endPointBody">
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
                    placeholder="Password" value={password} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <Link to="/private/">
			        <button className="btn btn-primary" id="btn" onClick={handleClick}>Login</button>
			    </Link>
            </form>

            <Link to="/">
				<button className="btn btn-primary" id="btn">Back home</button>
			</Link>
        </div>
    )
}