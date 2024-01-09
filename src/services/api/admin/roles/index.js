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

// const actionTeacher = () => {
//   return axios.get(`/account/teacher`);
// };

// const actionAuthority = (body) => {
//   return axios.post(`/admin/authority`, body);
// };

export default {
  actionRoleManagement,
  // actionTeacher,
  actionCountry,
  postRoleManagement,
  // actionAuthority,
};
