import React from 'react';

const Register = () => {

    const handleRegister = (e) =>{
        e.preventDefault();  // Prevents default form submission/stops reloading
        // register logic here
        const email = e.target.email.value;    //get value by name from FORM
        const password = e.target.password.value;  //get value by name from FORM
        console.log("Register button clicked, ", email, password);

    }

    return (
        <div class="hero bg-base-200 min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-8xl font-bold">Register Now!</h1>
                </div>
                <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div class="card-body">
                        <form action="" onSubmit={handleRegister}>
                            <fieldset class="fieldset">
                                <label class="label">Email</label>
                                <input type="email" class="input" placeholder="Email" name="email"/>

                                <label class="label">Password</label>
                                <input type="password" class="input" placeholder="Password" name="password"/>
                                <div>
                                    <p class="text-lg">
                                    Already Have an Account?
                                        <a class="link link-hover text-blue-600 font-bold ml-1 text-xl">
                                            Login
                                        </a>
                                    </p>
                                </div>
                                <button class="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;