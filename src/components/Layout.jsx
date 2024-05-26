import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8  ">
      <nav className="mb-2 flex justify-between items-center">
        <div>
          <h2 className=" lg:ml-8 font-semibold text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl">
            Stratex Movie App
          </h2>
        </div>
        <div className="flex">
          <Link
            to="/"
            className="mr-6 lg:mr-8 navlink text-center  font-semibold text-xl lg:text-2xl  "
          >
            Movies List
          </Link>
          <Link
            to="/favorites"
            className="lg:mr-8 navlink ext-white font-semibold text-center text-xl lg:text-2xl"
          >
            Favorite Movies
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
