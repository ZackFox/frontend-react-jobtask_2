import axios from "axios";
import {
  START_LOGIN_REQUEST,
  STOP_LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../constants/authTypes";

export const signIn = (credentials, cb) => dispatch => {
  dispatch({ type: START_LOGIN_REQUEST });
  axios
    .post(
      "https://mysterious-reef-29460.herokuapp.com/api/v1/validate",
      credentials,
    )
    .then(({ data }) => {
      if (data.status === "err") {
        switch (data.message) {
          case "wrong_email_or_password":
            const message = "Неверный Email или пароль";
            dispatch({ type: LOGIN_FAILURE, message });
            dispatch({ type: STOP_LOGIN_REQUEST });
            return;
          default:
            return;
        }
      }
      dispatch({ type: LOGIN_SUCCESS, user: data.data });
      dispatch({ type: STOP_LOGIN_REQUEST });
      cb();
    })
    .catch(err => {
      dispatch({ type: STOP_LOGIN_REQUEST });
      console.log(err);
    });
};

export const signOut = () => dispatch => {
  dispatch({ type: LOGOUT });
};
