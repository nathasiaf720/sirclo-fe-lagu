import { AUTHENTICATE, DEAUTHENTICATE } from "store/types";

const initialState = { token: null };

const authReducer = (state = { token: null }, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, token: action.payload };
    case DEAUTHENTICATE:
      return { token: null };
    default:
      return state;
  }
};

export default authReducer;
