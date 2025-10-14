import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.init';
import { useState } from 'react';
import { useRef } from 'react';

const Login = () => {

    const [error, setError] = useState("");
    const emailRef = useRef();

    const handleLogin = e => {
        e.preventDefault();
        
        const email = e.target.email.value; //get value by name from FORM
        const password = e.target.password.value; //get value by name from FORM

        // console.log("mail & pass- ", email, password);
        setError("");

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            // Signed in
            const user = result.user;
            console.log('Logged in user: ', user);
            if(!user.emailVerified){
                alert("Please verify your email.");
            }
        })
        .catch(error => {
            console.error(error.message);
            setError(error.message);
        });
    }

    const handleForgetPassword = () => {
        
        const email = emailRef.current.value;
        console.log("Forget Password clicked, ", email);

        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent.");
        }).catch(error => {
            console.error(error);
            setError(error.message);
        });
    }


    return (
                <div class="card bg-base-100 w-full m-auto max-w-sm shrink-0 shadow-2xl">
                    <div class="card-body">
                    <h1 class="text-6xl font-bold mb-6">Login Now!</h1>
                        <form onSubmit={handleLogin}>
                            <fieldset class="fieldset">
                                <label class="label">Email</label>
                                <input type="email" class="input" name="email" 
                                ref={emailRef} placeholder="Email" />
                            
                                <label class="label">Password</label>
                                <input type="password" class="input" name="password" placeholder="Password" />
                                    <div>
                                        <a onClick={handleForgetPassword} class="link link-hover">Forgot password?</a>
                                    </div>
                                <button class="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        {
                            error && <p className='text-red-600'>{error}</p>
                        }
                        <p class="text-lg">
                            New to Our Website? Please
                            <Link to="/register" class="link link-hover text-blue-600 font-bold ml-1 text-xl">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>

    );
};

export default Login;