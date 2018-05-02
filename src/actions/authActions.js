import axios from "axios";
import types from "../constants/actionTypes";

export const logOut = () => dispatch => {
  cookies.remove("token");
  dispatch({ type: types.LOGOUT });
};
