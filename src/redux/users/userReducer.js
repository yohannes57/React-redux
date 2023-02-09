import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  laoding: true,
  user: [],
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        laoding: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        laoding: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: true,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
