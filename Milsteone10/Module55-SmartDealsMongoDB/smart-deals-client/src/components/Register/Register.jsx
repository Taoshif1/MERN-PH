import React from "react";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {

    const { signInWithGoogle} = use(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }

                // create user in database
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then( res => res.json())
                    .then( data =>{
                        console.log('Data after user save => ', data)
                    })
                    .catch()
            })
            .catch(error => {
                console.log(error);
            })

    }

  return (
    <div class="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <h1 class="text-5xl font-bold">Register now!</h1>
      <div class="card-body">
        <fieldset class="fieldset">
            
        {/* name */}
          <label class="label">Name</label>
          <input type="text" class="input" placeholder="Name"/>

        {/* Email */}
          <label class="label">Email</label>
          <input type="email" class="input" placeholder="Email"/>

        {/* Photo   */}
          {/* <label class="label">Photo</label>
          <input type="url" class="input" placeholder="Photo URL"/> */}

        {/* password */}
          <label class="label">Password</label>
          <input type="password" class="input" placeholder="Password"/>
          
          {/* forget password btn */}
          <div>
            <a class="link link-hover">Forgot password?</a>
          </div>

          {/* login btn */}
          <button class="btn btn-neutral mt-4">Register</button>
        </fieldset>

        {/* <!-- Google --> */}
        <button 
        onClick={handleGoogleSignIn}
        class="btn bg-white text-black border-[#e5e5e5]">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
