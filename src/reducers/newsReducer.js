const initialState = {
  data: {},
  isFeatching: false,
  errors: "",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return state;
    default:
      return state;
  }
};

export default newsReducer;
