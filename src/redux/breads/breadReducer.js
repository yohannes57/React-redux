import { BUY_BREAD } from "./breadType";

const intialState = {
  numOfBread: 20,
};

const breadReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_BREAD:
      return {
        ...state,
        numOfBread: state.numOfBread - 2,
      };
    default:
      return state;
  }
};

export default breadReducer;
