import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: `https://piotrs-games.herokuapp.com/api`,
});

export const getCategories = async () => {
  const { data } = await ncGamesApi.get(`/categories`);
  return data.categories;
};
