import React from "react";
import { Link } from "react-router-dom";
import NavDropdownCategories from "./NavDropdownCategories";

const Nav = () => {
  return (
    <section className="Nav">
      <Link to="/" className="Nav__Button Nav__Button--Home">
        <h1>NC-Games</h1>
      </Link>
      <NavDropdownCategories />
    </section>
  );
};

export default Nav;
