import axios from "../../axiosConfig";
//web
const actionWebSetting = () => {
  return axios.get(`/web-settings`);
};
//mail
const actionMailSetting = () => {
  return axios.get(`/mail-settings`);
};
//admin
const actionAdminSetting = () => {
  return axios.get(`/admin-settings`);
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
};
