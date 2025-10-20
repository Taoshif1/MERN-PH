import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h2 className='font-semibold text-2xl text-center pt-8 '>Login to your account</h2>
                <div class="card-body">
                    <fieldset class="fieldset">
                        <label class="label">Email</label>
                        <input type="email" class="input" placeholder="Email" />
                        <label class="label">Password</label>
                        <input type="password" class="input" placeholder="Password" />
                        <div><a class="link link-hover">Forgot password?</a></div>
                        <button class="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>
                            Don't Have An Account ?
                            <Link to="/auth/register" className='text-secondary'> Register</Link>
                        </p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;