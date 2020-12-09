import axios from "axios";
const API_URL = "http://localhost:3000";

const register = (email, password) => {
  return axios
    .post(API_URL + "/signup", {
      email,
      password,
    })
    .then(res => {
      return res.data;
    });
};

export default { register };
