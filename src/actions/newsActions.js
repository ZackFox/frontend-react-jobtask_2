import axios from "axios";
import {
  START_FETCHING_ALLNEWS,
  STOP_FETCHING_ALLNEWS,
  FETCHING_ALLNEWS_SUCCESS,
  FETCHING_ALLNEWS_FAILURE,
} from "../constants/newsTypes";

export const getAllNews = () => dispatch => {
  dispatch({ type: START_FETCHING_ALLNEWS });
  axios
    .get("https://mysterious-reef-29460.herokuapp.com/api/v1/news")
    .then(({ data }) => {
      dispatch({ type: FETCHING_ALLNEWS_SUCCESS, news: data.data });
      dispatch({ type: STOP_FETCHING_ALLNEWS });
    })
    .catch(err => {
      dispatch({ type: FETCHING_ALLNEWS_FAILURE, err });
      dispatch({ type: STOP_FETCHING_ALLNEWS });
    });
};
