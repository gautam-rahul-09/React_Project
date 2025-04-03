
import React from "react";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <div>
      <nav className="mt-10 flex justify-center gap-20">
        <NavLink
          style={(e) => ({
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          })}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          style={(e) => ({
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          })}
          to="/services"
        >
          Services
        </NavLink>

        <NavLink
          style={(e) => ({
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          })}
          to="/blog"
        >
          Bag
        </NavLink>

        <NavLink
          style={(e) => ({
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          })}
          to="/dashboard"
        >
          Dashboard
        </NavLink>

        <NavLink
          style={(e) => ({
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          })}
          to="/login"
        >
          Login
        </NavLink>

        <NavLink
          style={(e) => ({
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          })}
          to="/signup"
        >
          Sign Up
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
