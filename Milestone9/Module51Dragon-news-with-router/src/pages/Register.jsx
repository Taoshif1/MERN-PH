import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h2 className='font-semibold text-2xl text-center pt-8 '>Register your account</h2>
                <div class="card-body">
                    <fieldset class="fieldset">

                        <label class="label">Name</label>
                        <input type="text" class="input" placeholder="Name" />
                        
                        <label class="label">Photo URL</label>
                        <input type="email" class="input" placeholder="Photo URL" />
                        
                        <label class="label">Email</label>
                        <input type="email" class="input" placeholder="Email" />

                        <label class="label">Password</label>
                        <input type="password" class="input" placeholder="Password" />
                            
                        <button class="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>
                            Already Have An Account ?
                            <Link to="/auth/Login" className='text-secondary'> Login</Link>
                        </p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;