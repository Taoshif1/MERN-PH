import React, { use } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../AuthContext/AuthContext'


const Login = () => {

    const { signInUser } = use(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(" Email & Password -> ", email, password);
        signInUser(email, password)
        .then(result => {
            console.log(" Inside login -> ", result.user)
        })
        .catch(error => {
            console.error(" Failed to login in login -> ", error)
        });

    }

    return (
            <div class="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div class="card-body">
        <h1 class="text-4xl font-bold">Please Login!</h1>
        <form onSubmit={handleLogin}>
        <fieldset class="fieldset">

            {/* Email Field */}
            <label class="label">Email</label>
            <input name="email" type="email" class="input" placeholder="Email" />

            {/* Password Field */}
            <label class="label">Password</label>
            <input name="password" type="password" class="input" placeholder="Password" />

            <div>
                <a class="link link-hover">Forgot password?</a>
            </div>

            <button class="btn btn-neutral mt-4">Login</button>

        </fieldset>
        </form>
        <p>New to our website? Please <Link className=" text-blue-500 hover:text-blue-700" to="/register">Register</Link> </p>
    </div>
    </div>
    );
};

export default Login;