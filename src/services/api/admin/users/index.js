import axios from "../../axiosConfig";

const actionUser = (body) => {
  return axios.post(`/account/user`, body);
};

export default {
  actionUser,
};
