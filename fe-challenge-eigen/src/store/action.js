import { FETCH_NEWS, IS_LOADING } from "./type";

const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8e6d0e245c544ae2b66b9e7503de4115`;

export const fetchNews = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: IS_LOADING, payload: true });
      const response = await fetch(endpoint);
      if (response.ok) {
        const result = await response.json();
        dispatch({ type: FETCH_NEWS, payload: result.articles });
      } else {
        throw new Error("Fetch News Failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
};
export const fetchNewsByCountry = (country) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: IS_LOADING, payload: true });
      const response = await fetch( `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=8e6d0e245c544ae2b66b9e7503de4115`);
      if (response.ok) {
        const result = await response.json();
        dispatch({ type: FETCH_NEWS, payload: result.articles });
      } else {
        throw new Error("Fetch News Failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
};
