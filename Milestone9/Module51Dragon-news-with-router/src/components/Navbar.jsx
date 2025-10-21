import React, { use } from "react";
import { NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  // user coming from authcontext
  const {user, logOut} = use(AuthContext);
  const handleLogOut = () => {
    console.log("user tryn to logout");
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("You Logged Out Successfully")
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="" />
        {user ? (
          <Link onClick={handleLogOut} className="btn btn-primary px-10 ">
            Log Out
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
