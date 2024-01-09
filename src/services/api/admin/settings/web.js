import axios from "../../axiosConfig";
//web
const actionWebSetting = () => {
  return axios.get(`/web-settings`);
};
const putWebSetting = (body) => {
  return axios.put(`/web-settings`, body);
};
//mail
const actionMailSetting = () => {
  return axios.get(`/mail-settings`);
};
const putMailSetting = (body) => {
  return axios.put(`/mail-settings`, body);
};
//admin
const actionAdminSetting = () => {
  return axios.get(`/admin-settings`);
};
const putAdminSetting = (body) => {
  return axios.put(`/admin-settings`, body);
};
const actionMenuPC = () => {
  return axios.get(`/main-menu-pc`);
};
const actionMenuMB = () => {
  return axios.get(`/main-menu-mobile`);
};
const actionService = () => {
  return axios.get(`/main-page-product-mobile`);
};
//sms
const actionSMSSetting = (body) => {
  return axios.get(`/settings/smsSettingManagement`, body);
};
const actionPGSetting = (body) => {
  return axios.get(`/settings/pgSettingManagement`, body);
};

export default {
  actionWebSetting,
  actionMailSetting,
  actionAdminSetting,
  actionMenuPC,
  actionMenuMB,
  actionService,
  actionSMSSetting,
  actionPGSetting,
  putAdminSetting,
  putMailSetting,
  putWebSetting,
};
