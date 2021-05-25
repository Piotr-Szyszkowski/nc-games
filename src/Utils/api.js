import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: `https://piotrs-games.herokuapp.com/api`,
});

export const getCategories = async () => {
  const { data } = await ncGamesApi.get(`/categories`);
  return data.categories;
};

export const getReviews = async (category) => {
  if (category === `all`) {
    const { data } = await ncGamesApi.get(`/reviews`);
    return data.reviews;
  } else {
    const { data } = await ncGamesApi.get(`/reviews`, {
      params: { category: category },
    });
    return data.reviews;
  }
};
