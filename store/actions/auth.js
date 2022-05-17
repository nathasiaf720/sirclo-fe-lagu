import { removeCookie, setCookie } from "helpers/utils";
import { AUTHENTICATE, DEAUTHENTICATE } from "store/types";

export const authenticate = (token) => (dispatch) => {
  setCookie("token", token);
  dispatch({ type: AUTHENTICATE, payload: token });
};

export const reauthenticate = (token) => (dispatch) => {
  dispatch({ type: AUTHENTICATE, payload: token });
};

export const deauthenticate = () => (dispatch) => {
  removeCookie("token");
  dispatch({ type: DEAUTHENTICATE });
};
