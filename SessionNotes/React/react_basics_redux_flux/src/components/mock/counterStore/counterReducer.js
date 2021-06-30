import { INCREASE_COUNT, DECREASE_COUNT } from "./counterType";

const initialState = {
  count: 100,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        count: state.count + 1,
      };
    case DECREASE_COUNT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
