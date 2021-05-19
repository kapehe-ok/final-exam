import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles.scss";

export default function NavBar() {
  return (
    <header>
      <nav class="main-nav">
        <div class="main-nav__list">
          <NavLink class="main-nav__item" to="/" exact>
            Home
          </NavLink>
          <NavLink class="main-nav__item" to="/Portfolio">
            Portfolio
          </NavLink>
          <NavLink class="main-nav__item" to="/About">
            About us
          </NavLink>
          <NavLink class="main-nav__item" to="/Contact">
            Contact
          </NavLink>
          <NavLink class="main-nav__item" to="/Blog">
            Blog
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
