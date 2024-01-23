import axios from "../../axiosConfig";

const actionCountry = () => {
  return axios.get(`/countries`);
};
const actionRoleManagement = () => {
  return axios.get(`/role-management`);
};
const postRoleManagement = (body) => {
  return axios.post(`/role-management`, body);
};
const putRoleManagement = (body) => {
  return axios.put(`/role-management`, body);
};

export default {
  actionRoleManagement,
  putRoleManagement,
  actionCountry,
  postRoleManagement,
};
