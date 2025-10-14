import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="p-5">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
