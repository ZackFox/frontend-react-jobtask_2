const initialState = {
  user: {},
  isFeatching: false,
  isLoggedIn: false,
  errors: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return state;
    default:
      return state;
  }
};

export default authReducer;
