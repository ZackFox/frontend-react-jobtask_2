import { combineReducers } from "redux";

import authReducer from "./authReducer";
import newsReducer from "./newsReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  authReducer,
  newsReducer,
  profileReducer,
});

export default rootReducer;
