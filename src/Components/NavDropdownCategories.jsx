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

  const navSubmitHandle = (category) => {
    history.push(`/reviews/categories/${category}`);
  };

  return (
    <form
      id="catForm"
      className="font-squada-one text-2xl md:absolute md:right-0 md:top-0 md:mt-2 md:mr-3"
    >
      <label
        htmlFor="categories"
        className="Nav__Button--Categories text-white"
      >
        CATEGORIES
      </label>
      <br />
      <select
        className=" bg-gray-200 p-1 font-inconsolata text-base rounded-sm"
        name="categories"
        id="categories"
        onChange={(event) => {
          const chosenCategory = event.target.value;
          navSubmitHandle(chosenCategory);
        }}
      >
        <option key="..." hidden>
          choose category
        </option>
        <option key="all" value="all">
          all...
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
