import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getCategories } from "../Utils/api";

const NavDropdownCategories = () => {
  const history = useHistory();
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategoriesList(categoriesFromApi);
    });
  }, []);

  const navSubmitHandle = (x) => {
    history.push(`/${x}`);
  };

  return (
    <form input="submit" className="Nav__Button--Categories">
      <label
        htmlFor="categories"
        className="Nav__Button Nav__Button--Categories"
      >
        CATEGORIES
      </label>
      <br />
      <select
        className="Nav__SelectCategory"
        name="categories"
        id="categories"
        onChange={(event) => {
          navSubmitHandle(event.target.value);
        }}
      >
        <option key="all" value="all">
          All...
        </option>
        {categoriesList.map((categoryObj) => {
          return (
            <option key={`${categoryObj.slug}`} value={`${categoryObj.slug}`}>
              {categoryObj.slug}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default NavDropdownCategories;

// const goVolvo = () => {
//   history.push("/volviacz");
// };
