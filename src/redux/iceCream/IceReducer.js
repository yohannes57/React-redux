import { BUY_ICE_CREAME } from "./IceTypes";
const intialState = {
  numOfIceCreame: 30,
};

const iceReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAME:
      return {
        ...state,
        numOfIceCreame: state.numOfIceCreame - 1,
      };
    default:
      return state;
  }
};
export default iceReducer;
