import {
  START_LOGIN_REQUEST,
  STOP_LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../constants/authTypes";

const initialState = {
  user: null,
  isLoggedIn: false,
  isFetching: false,
  message: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN_REQUEST:
      return { ...state, isFetching: true };
    case STOP_LOGIN_REQUEST:
      return { ...state, isFetching: false };
    case LOGIN_SUCCESS:
      return { ...state, user: action.user, isLoggedIn: true };
    case LOGOUT:
      return { ...state, user: null, isLoggedIn: false };
    case LOGIN_FAILURE:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default authReducer;
