import { BUY_CAKE, MAKE_CAKE } from "./cakeTypes";

export const buyCake = (cakeNum = 1) => {
  return {
    type: BUY_CAKE,
    payload: cakeNum,
  };
};

export const makeCake = () => {
  return {
    type: MAKE_CAKE,
  };
};
