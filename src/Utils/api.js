import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: `https://piotrs-games.herokuapp.com/api`,
});

export const getCategories = async () => {
  const { data } = await ncGamesApi.get(`/categories`);
  return data.categories;
};

export const getReviews = async (category, stateOfSortBy) => {
  const ref = {
    "Created at": "created_at",
    Votes: "votes",
    Comments: "comment_count",
  };
  const apiSortBy = ref[stateOfSortBy];

  if (category === `all`) {
    const { data } = await ncGamesApi.get(`/reviews`, {
      params: { sort_by: apiSortBy },
    });
    return data.reviews;
  } else {
    const { data } = await ncGamesApi.get(`/reviews`, {
      params: { category: category, sort_by: apiSortBy },
    });
    return data.reviews;
  }
};

export const getSingleReview = async (reviewId) => {
  const { data } = await ncGamesApi.get(`/reviews/${reviewId}`);
  return data.review;
};

export const setVotesInApi = (reviewId) => {
  return ncGamesApi.patch(`/reviews/${reviewId}`, { inc_votes: 1 });
};

export const getCommentsForId = (reviewId) => {
  return ncGamesApi.get(`/reviews/${reviewId}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const postComment = (commentDetails) => {
  const commentObj = {
    username: commentDetails.username,
    comment_body: commentDetails.commentTxt,
  };
  return ncGamesApi
    .post(`/reviews/${commentDetails.review_id}/comments`, commentObj)
    .then((response) => {
      return response.data.comment;
    });
};
