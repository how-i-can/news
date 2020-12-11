import { REGISTER_SUCCESS, REGISTER_FAIL, SET_MESSAGE } from "./types";

import AuthService from "../services/auth.service.js";

export const register = (
  email,
  password,
  confirmPassword,
  handle
) => dispatch => {
  return AuthService.register(email, password, confirmPassword, handle).then(
    res => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: res.message,
      });

      return res;
    },
    error => {
      dispatch({
        type: REGISTER_FAIL,
      });

      return Promise.reject();
    }
  );
};
