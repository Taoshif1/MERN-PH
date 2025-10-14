import React from 'react';

const Login = () => {
    return (
        <div class="hero bg-base-200 min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-8xl font-bold">Login Now!</h1>
                    
                </div>
                <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div class="card-body">
                        <fieldset class="fieldset">
                            <label class="label">Email</label>
                            <input type="email" class="input" placeholder="Email" />
                            <label class="label">Password</label>
                            <input type="password" class="input" placeholder="Password" />
                                <div>
                                    <a class="link link-hover">Forgot password?</a>
                                </div>
                            <button class="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;