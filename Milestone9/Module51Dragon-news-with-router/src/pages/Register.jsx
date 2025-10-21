import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser, setUser} = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photourl, email, password});
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch((error)=>{
            const errorCode = error.code;  
            const errorMessage = error.message;  
            alert(errorMessage);
        })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h2 className='font-semibold text-2xl text-center pt-8 '>Register your account</h2>
                
                <form onSubmit={handleRegister} class="card-body">
                    <fieldset class="fieldset">

                        <label class="label">Name</label>
                        <input name='name' type="text" class="input" placeholder="Name" required />
                        
                        <label class="label">Photo URL</label>
                        <input name='photourl' type="email" class="input" placeholder="Photo URL required" />
                        
                        <label class="label">Email</label>
                        <input name='email' type="email" class="input" placeholder="Email" required />

                        <label class="label">Password</label>
                        <input name='password' type="password" class="input" placeholder="Password" required />
                            
                        <button type='submit' class="btn btn-neutral mt-4">Register</button>
                        
                        <p className='font-semibold text-center pt-5'>
                            Already Have An Account ?
                            <Link to="/auth/Login" className='text-secondary'> Login</Link>
                        </p>
                    </fieldset>
                </form>

            </div>
        </div>
    );
};

export default Register;