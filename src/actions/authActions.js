import axios from "axios";
import {
  START_LOGIN_REQUEST,
  STOP_LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../constants/authTypes";

export const signIn = credentials => dispatch => {
  dispatch({ type: START_LOGIN_REQUEST });
  axios
    .post(
      "https://mysterious-reef-29460.herokuapp.com/api/v1/validate",
      // { email: "max@test.com", password: "12345" },
      credentials,
    )
    .then(({ data }) => {
      switch (data.status) {
        case "ok":
          dispatch({ type: LOGIN_SUCCESS, user: data.data });
          dispatch({ type: STOP_LOGIN_REQUEST });
          return;
        case "err":
          dispatch({ type: LOGIN_FAILURE, message: data.message });
          dispatch({ type: STOP_LOGIN_REQUEST });
          return;
        default:
          return;
      }
    })
    .catch(err => {
      dispatch({ type: STOP_LOGIN_REQUEST });
      console.log(err);
    });
};

export const signOut = () => dispatch => {
  dispatch({ type: LOGOUT });
};
