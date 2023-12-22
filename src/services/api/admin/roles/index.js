import axios from "../../axiosConfig";

const actionRoleManagement = (body) => {
  return axios.post(`/roleManagement`, body);
};
const actionTeacher = (body) => {
  return axios.post(`/account/teacher`, body);
};
const actionCountry = (body) => {
  return axios.post(`/country`, body);
};
const actionAuthority = (body) => {
  return axios.post(`/admin/authority`, body);
};

export default {
  actionRoleManagement,
  actionTeacher,
  actionCountry,
  actionAuthority,
};
