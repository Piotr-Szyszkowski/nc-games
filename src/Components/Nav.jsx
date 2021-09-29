import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import NavDropdownCategories from "./NavDropdownCategories";

const Nav = () => {
  const { user } = useContext(UserContext);

  const catResetFunc = () => {
    document.getElementById("catForm").reset();
  };

  return (
    <section className="Nav m-1 p-1">
      <Link
        to="/"
        className="Nav__Button Nav__Button--Home"
        onClick={() => {
          catResetFunc();
        }}
      >
        <h1 className="font-odibee-sans text-4xl">NC-Games</h1>
      </Link>
      <NavDropdownCategories />
      <div className="flex flex-row-reverse justify-center">
        <h3 className="Nav__User__Username">
          User:
          <br /> {user.username}
        </h3>
        <img
          className="Nav__User__Avatar"
          src={user.avatar_url}
          alt="user's avatar"
        />
      </div>
    </section>
  );
};

export default Nav;
