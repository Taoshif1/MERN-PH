import React from 'react'
import { use } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
    }

    const links = 
    <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allProducts">All Products</NavLink></li>
        {
            user && 
            <>
                <li><NavLink to="/myProducts">My Products</NavLink></li>
                <li><NavLink to="/myBids">My Bids</NavLink></li>
            </>
        }
    </>

  return (
    <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul tabindex="-1" 
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
            </div>
            <a class="btn btn-ghost text-xl font-bold">Smart<span className='text-primary'>Deals</span></a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                {links}
            </ul>
        </div>
        <div class="navbar-end">
            {
                user ? 
                <a onClick={handleSignOut} class="btn btn-primary">Logout</a> :  
                <Link to='/register'>Login</Link>         
            }
        </div>
    </div>
  )
}

export default Navbar