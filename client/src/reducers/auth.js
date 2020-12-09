import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
  isLoggedIn: false,
  user: null,
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
