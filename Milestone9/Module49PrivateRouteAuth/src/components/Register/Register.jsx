// import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";
// import { auth } from "../../Firebase/Firebase.init";
import { use } from "react";




const Register = () => {


    // Form submit handler
    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;

    //     console.log(" email & pass -> ", email, password);

    //     // Call the createUserWithEmailAndPassword function from Firebase Auth
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             console.log(" user created successfully-> ", result.user);
    //         }).catch(error => {
    //             console.error("Failed!! error from create user -> ", error);
    //         })

    // };

    const { createUser } = use(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUser(email, password)
        .then(result => {
            console.log(" Inside register2 -> ", result.user)
        })
        .catch(error => {
            console.error(" Failed to create user in register 2 -> ", error)
        })
    }

return (
    <div class="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div class="card-body">
        <h1 class="text-4xl font-bold">Please Register!</h1>
        <form onSubmit={handleRegister}>
        <fieldset class="fieldset">

            {/* Name Field */}
            <label class="label">Name</label>
            <input name="name" type="text" class="input" placeholder="Name" />

            {/* Email Field */}
            <label class="label">Email</label>
            <input name="email" type="email" class="input" placeholder="Email" />

            {/* Password Field */}
            <label class="label">Password</label>
            <input name="password" type="password" class="input" placeholder="Password" />

            <div>
                {/* <a class="link link-hover">Forgot password?</a> */}
            </div>

            <button class="btn btn-neutral mt-4">Register</button>

        </fieldset>
        </form>
        <p>Already have an account? Please <Link className=" text-blue-500 hover:text-blue-700" to="/login">Login</Link> </p>
    </div>
    </div>
    );
};

export default Register;
