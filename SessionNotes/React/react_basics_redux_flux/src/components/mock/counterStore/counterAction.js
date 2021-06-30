import { INCREASE_COUNT, DECREASE_COUNT } from "./counterType";

export const increaseCount = () => {
  return {
    type: INCREASE_COUNT,
  };
};

export const decreaseCount = () => {
  return {
    type: DECREASE_COUNT,
  };
};
