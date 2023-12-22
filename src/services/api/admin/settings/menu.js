import axios from "../../axiosConfig";

const actionMenu = (body) => {
  return axios.post(`/settings/menuPermissionManagement`, body);
};

export default {
  actionMenu,
};
