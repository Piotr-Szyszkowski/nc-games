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
    <section className="bg-gray-900 m-1 p-1 text-center rounded-md md:pt-4 md:pb-4">
      <Link
        to="/"
        className="Nav__Button--Home"
        onClick={() => {
          catResetFunc();
        }}
      >
        <h1 className="font-odibee-sans text-4xl text-red-600 md:text-5xl">
          NC-Games
        </h1>
      </Link>
      <NavDropdownCategories />
      <div className="flex flex-row-reverse justify-end ml-1 pb-1 md:absolute top-0">
        <h3 className="text-gray-200 text-left ml-1 pt-5">
          User:
          <br /> @{user.username}
        </h3>
        <img
          className="h-14 mt-3 rounded-full"
          src={user.avatar_url}
          alt="user's avatar"
        />
      </div>
    </section>
  );
};

export default Nav;
