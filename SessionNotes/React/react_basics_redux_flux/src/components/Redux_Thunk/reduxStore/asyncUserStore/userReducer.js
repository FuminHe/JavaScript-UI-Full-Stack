import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    default:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

export default userReducer;
