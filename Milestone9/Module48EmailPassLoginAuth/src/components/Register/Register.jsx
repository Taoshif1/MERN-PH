import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const Register = () => {

    const [user, setUser] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = (e) =>{

        e.preventDefault();  // Prevents default form submission/stops reloading
        // register logic here
        const email = e.target.email.value;    //get value by name from FORM
        const password = e.target.password.value;  //get value by name from FORM
        console.log("Register button clicked, ", email, password);
        
        // reset error message
        setError('');  //by default empty

        //setUser(false); //by default false
        setUser(false);

        // validation
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log("after creation - ", result.user)
                setUser(true);
                e.target.reset(); // reset form after submission
            })
            .catch(error => {
                console.log('Error during registration:', error);
                setError(error.message);
            })
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
                            {
                                user && <p class="text-green-600 mt-4">User Created Successfully!</p>
                            }
                            {
                                error && <p class="text-red-600 mt-4">{error}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Register;