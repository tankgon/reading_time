import axios from "../../axiosConfig";

const actionTeacher = () => {
  return axios.get(`/account-teacher`);
};
const postTeacher = (body) => {
  return axios.post(`/account-teacher`, body);
};

const actionVacationAndResignationManagement = (body) => {
  return axios.post(`/vacationAndResignationManagement`, body);
};

const actionWorkingHours = (body) => {
  return axios.post(`/workingHours`, body);
};

const actionPointAndPenaltyManagement = (body) => {
  return axios.post(`/workingHours`, body);
};

const actionPayment = (body) => {
  return axios.post(`/workingHours`, body);
};

const actionFeedback = (body) => {
  return axios.post(`/classFeedback`, body);
};

export default {
  actionTeacher,
  postTeacher,
  actionVacationAndResignationManagement,
  actionWorkingHours,
  actionPointAndPenaltyManagement,
  actionPayment,
  actionFeedback,
};
