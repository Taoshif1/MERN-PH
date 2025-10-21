import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {signIn} = use(AuthContext);
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email, password});
        signIn(email, password)
            .then(result=>{
                const user = result.user;
                console.log(user);
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode,errorMessage);
            })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                
                <h2 className='font-semibold text-2xl text-center pt-8 '>Login to your account</h2>
                
                <form onSubmit={handleLogin} class="card-body">
                    <fieldset class="fieldset">

                        {/* email */}
                        <label class="label">Email</label>
                        <input name="email" type="email" class="input" placeholder="Email" />

                        {/* password */}
                        <label class="label">Password</label>
                        <input name="password" type="password" class="input" placeholder="Password" />
                        <div><a class="link link-hover">Forgot password?</a></div>
                        
                        {/* button */}
                        <button type='submit' class="btn btn-neutral mt-4">
                            Login
                        </button>

                        <p className='font-semibold text-center pt-5'>
                            Don't Have An Account ?   
                                <Link to="/auth/register" className='text-secondary pl-1'> 
                                        Register
                                </Link>
                        </p>
                    </fieldset>
                </form>

            </div>
        </div>
    );
};

export default Login;