import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = (props) => {
  return (
    <div className="float-left w-full bg-gray-400">
        <Outlet />
    </div>
  );
};

export default AuthLayout;
