import {
  START_FETCHING_PROFILE,
  STOP_FETCHING_PROFILE,
  FETCHING_PROFILE_SUCCESS,
  FETCHING_PROFILE_FAILURE,
} from "../constants/profileTypes";

const initialState = {
  profile: null,
  isFetching: false,
  errors: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_PROFILE:
      return { ...state, isFetching: true };
    case STOP_FETCHING_PROFILE:
      return { ...state, isFetching: false };
    case FETCHING_PROFILE_SUCCESS:
      return { ...state, profile: action.profile };
    case FETCHING_PROFILE_FAILURE:
      return state;
    default:
      return state;
  }
};

export default profileReducer;
