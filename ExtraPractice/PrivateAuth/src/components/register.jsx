import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-router';
import { auth } from '../firebase/firebase';

const Register = () => {

  const handleRegister = (e) => {
    e.preventDefault();
    // Registration logic goes here
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result)
    })
    .catch(e =>{
      console.log("Error -> ", e);
    })

    console.log("Register Details -> ", name, email, password);
  }

    return (
    <div className='mx-auto m-10 w-96'>
      <form onSubmit={handleRegister}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Register</legend>

          <label className="label">Name</label>
          <input name="name" type="name" className="input" placeholder="Name" />

          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />

          <button  className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
      <p>Already Have an Account? <NavLink className="link link-primary" to='/login'>Login</NavLink> </p>
    </div>
    );
};

export default Register;