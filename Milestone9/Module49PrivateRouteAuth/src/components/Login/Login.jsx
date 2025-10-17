import React, { use } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../AuthContext/AuthContext'


const Login = () => {

    const { signInUser, signInWithGoogle } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    console.log(location);

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(" Email & Password -> ", email, password);
        
        signInUser(email, password)
        .then(result => {
            console.log(" Inside login -> ", result.user);
            event.target.reset();  // reset the form fields
            navigate(location?.state || '/');  // navigate to the previous page or home
        })
        .catch(error => {
            console.error(" Failed to login in login -> ", error);
        });

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(" Google sign in successful -> ", result.user);
            navigate(location?.state || '/');  // navigate to the previous page or home
        })
        .catch(error => {
            console.error(" Error in google sign in -> ", error);
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

        {/* sign in with google */}
        {/* Google */}
        <button onClick={handleGoogleSignIn} class="btn bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
        </button>


        <p>New to our website? Please <Link className=" text-blue-500 hover:text-blue-700" to="/register">Register</Link> </p>
    </div>
    </div>
    );
};

export default Login;