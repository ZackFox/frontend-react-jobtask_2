const initialState = {
  data: {},
  isFeatching: false,
  errors: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return state;
    default:
      return state;
  }
};

export default profileReducer;