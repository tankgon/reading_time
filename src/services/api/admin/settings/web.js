import axios from "../../axiosConfig";

const actionWebSetting = (body) => {
  return axios.post(`/settings/webSettingManagement`, body);
};

const actionMailSetting = (body) => {
  return axios.post(`/settings/mailSettingManagement`, body);
};

const actionAdminSetting = (body) => {
  return axios.post(`/settings/adminSettingManagement`, body);
};

const actionSMSSetting = (body) => {
  return axios.post(`/settings/smsSettingManagement`, body);
};

const actionPGSetting = (body) => {
  return axios.post(`/settings/pgSettingManagement`, body);
};

export default {
  actionWebSetting,
  actionMailSetting,
  actionAdminSetting,
  actionSMSSetting,
  actionPGSetting,
};
