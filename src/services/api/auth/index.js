import axios from "../axiosConfig";

const actionAuth = (body) => {
  return axios.post(`/authentication/login`, body);
};

export default {
  actionAuth,
};
