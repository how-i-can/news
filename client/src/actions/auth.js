import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_MESSAGE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./types";

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

export const login = (email, password) => dispatch => {
  return AuthService.login(email, password).then(
    res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: res.user },
      });

      return res;
    },
    error => {
      dispatch({
        type: LOGIN_FAIL,
      });

      return Promise.reject();
    }
  );
};
