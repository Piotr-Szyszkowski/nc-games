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

  console.log(categoriesList);

  const navSubmitHandle = (x) => {
    history.push(`/${x}`);
  };

  return (
    <form input="submit">
      <label htmlFor="categories" className="Nav__Button">
        CATEGORIES
      </label>
      <br />
      <select
        name="categories"
        id="categories"
        onChange={(event) => {
          console.log(event.target.value);
          console.log(event);
          navSubmitHandle(event.target.value);
        }}
      >
        <option value="volvo">Volvo</option>

        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </form>
  );
};

export default NavDropdownCategories;

// const goVolvo = () => {
//   history.push("/volviacz");
// };
