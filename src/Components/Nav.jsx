import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import NavDropdownCategories from "./NavDropdownCategories";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="Nav">
      <Link to="/" className="Nav__Button Nav__Button--Home">
        <h1>NC-Games</h1>
      </Link>
      <NavDropdownCategories />
      <div className="Nav__User">
        <h3 className="Nav__User__Username">
          User:
          <br /> {user.name}
        </h3>
        <img className="Nav__User__Avatar" src={user.avatar_url} />
      </div>
    </section>
  );
};

export default Nav;
