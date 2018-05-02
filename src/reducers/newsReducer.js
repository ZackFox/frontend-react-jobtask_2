import {
  START_FETCHING_ALLNEWS,
  STOP_FETCHING_ALLNEWS,
  FETCHING_ALLNEWS_SUCCESS,
  FETCHING_ALLNEWS_FAILURE,
} from "../constants/newsTypes";

const initialState = {
  news: [],
  isFetching: false,
  errors: "",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_ALLNEWS:
      return { ...state, isFetching: true };
    case STOP_FETCHING_ALLNEWS:
      return { ...state, isFetching: false };
    case FETCHING_ALLNEWS_SUCCESS:
      return { ...state, news: action.news };
    case FETCHING_ALLNEWS_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export default newsReducer;
