import axios from "axios";
const API_URL = "http://localhost:3000";

const register = (email, password, confirmPassword, handle) => {
  return axios
    .post(API_URL + "/signup", {
      email,
      password,
      confirmPassword,
      handle,
    })
    .then(res => {
      return res.data;
    });
};

export default { register };
