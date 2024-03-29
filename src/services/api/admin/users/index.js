import axios from "../../axiosConfig";

const actionUser = () => {
  return axios.get(`/account-user`);
};

const postUser = (body) => {
  return axios.post(`/account-user/register`, body);
};

const putUser = (body) => {
  return axios.put(`/account-user/update`, body);
};

export default {
  actionUser,
  postUser,
  putUser,
};
