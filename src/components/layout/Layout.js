import React from "react";
import { Outlet, NavLink } from "react-router-dom";
// import Sidebar from "../sidebar/sidebar";

const Layout = (props) => {
  return (
    <div className="w-full max-w-5xl mx-auto">
        <nav className="w-full float-left py-4 border-b">
          <ul className="flex items-center space-x-6 [&>li]:font-bold">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? ' text-red-400' : '')}>Home</NavLink></li>
            <li><NavLink to="/counter" className={({ isActive }) => (isActive ? ' text-red-400' : '')}>Counter</NavLink></li>
          </ul>
        </nav>
        <div className="w-full float-left py-6">
          <Outlet />
        </div>
    </div>
  );
};

export default Layout;
