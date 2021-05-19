import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles.scss";

export default function NavBar() {
  return (
    <header>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/Portfolio">Portfolio</NavLink>
        <NavLink to="/About">About us</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
      </nav>
    </header>
  );
}
