import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-4">
      <nav className="mb-4">
        <Link to="/" className="mr-4">
          Movie List
        </Link>
        <Link to="/favorites">Favorite Movies</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
