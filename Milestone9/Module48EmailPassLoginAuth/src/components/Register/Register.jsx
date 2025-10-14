import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { Link } from 'react-router';


import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {

    const [user, setUser] = useState(false);  //for success message when user is created
    const [error, setError] = useState('');  //for error message
    const [showPassword, setShowPassword] = useState(false); //for show/hide password

    const handleRegister = (e) =>{
        e.preventDefault(); // Prevents default form submission/stops reloading
      // register logic here
        const email = e.target.email.value; //get value by name from FORM
        const password = e.target.password.value; //get value by name from FORM
        const terms = e.target.terms.checked; //get checkbox value by name from FORM
        console.log("Register button clicked, ", email, password, terms);

      // password validation using REGULAR EXPRESSION (regex)
        const passwordLengthPattern = /^.{6,}$/; // validation 1 - minimum 6 characters
        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/; // validation 2 - at least 1 upper & 1 lower
        const specialCharPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/; // validation 3 - at least 1 special character
        // const allPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/; // all in one


      //validation 1 - length
        if (!passwordLengthPattern.test(password)) {
            setError("Error: Password must be at least 6 characters long");
            console.log("pass didnt matched");
        return;
    }
        //validation 2 - case
        else if (!casePattern.test(password)) {
            setError(
            "Error: Password must contain at least one uppercase and one lowercase letter"
            );
        return;
    }

    else if (!specialCharPattern.test(password)) {
            setError("Error: Password must contain at least one special character (e.g. ! @ # $ % ^ & *)");
        return;
    }

      // reset error message
      setError(""); //by default empty

      //setUser(false); //by default false
    setUser(false);

    // terms and conditions validation
    if(!terms){
            setError("Please accept our terms and conditions");
        return;
    }

      // validation
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log("after creation - ", result.user);
            setUser(true);
            e.target.reset(); // reset form after submission

            // send verification email
            sendEmailVerification(result.user)
                .then(() => {
                    alert("Verification email sent. Please check your inbox.");
            });
        })
        .catch((error) => {
            console.log("Error during registration:", error);
            setError(error.message);
        });
    }

    const handleTogglePassShow = (e) =>{
        e.preventDefault();
        setShowPassword(!showPassword);
    }


    return (
        <div class="hero bg-base-200 min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse ">
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
                                <div className='relative'>
                                    <input type={showPassword ? "text" : "password"} class="input" placeholder="Password" name="password"/>
                                    <button 
                                    onClick={handleTogglePassShow}
                                    class="btn btn-xs absolute -ml-11 mt-1.5 ">
                                        {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                                    </button>
                                </div>

                                <div>
                                    <label class="label">
                                    <input type="checkbox" name='terms'
                                    class="checkbox" />
                                    Accept Our Terms & Conditions
                                    </label>
                                </div>

                                <div>
                                    <p class="text-lg">
                                    Already Have an Account? Please
                                        {/* <a  class="link link-hover text-blue-600 font-bold ml-1 text-xl">
                                            Login
                                        </a> */}
                                        <Link to="/login" class="link link-hover text-blue-600 font-bold ml-1 text-xl">
                                            Login
                                        </Link>
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