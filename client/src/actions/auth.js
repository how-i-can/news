import { REGISTER_SUCCESS, REGISTER_FAIL, SET_MESSAGE } from "./types";

import AuthService from "../services/auth.service.js";

export const register = (email, password) => dispatch => {
  return AuthService.register(email, password).then(
    res => {
      dispatch({
        type: REGISTER_SUCCESS,
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
