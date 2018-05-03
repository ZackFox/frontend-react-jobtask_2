import axios from "axios";
import {
  START_FETCHING_PROFILE,
  STOP_FETCHING_PROFILE,
  FETCHING_PROFILE_SUCCESS,
  FETCHING_PROFILE_FAILURE,
} from "../constants/profileTypes";

export const getProfile = id => dispatch => {
  dispatch({ type: START_FETCHING_PROFILE });
  axios
    .get(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`)
    .then(({ data }) => {
      const link = data.data.social[2];
      const filtered = data.data.social.filter(item => item.label !== "web");

      const profile = {
        ...data.data,
        social: [link, ...filtered],
      };

      dispatch({ type: FETCHING_PROFILE_SUCCESS, profile });
      dispatch({ type: STOP_FETCHING_PROFILE });
    })
    .catch(err => {
      dispatch({ type: FETCHING_PROFILE_FAILURE, err });
      dispatch({ type: STOP_FETCHING_PROFILE });
    });
};
