import axios from "../../axiosConfig";

const actionHoliday = () => {
  return axios.get(`/holiday-management`);
};
const postHoliday = (body) => {
  return axios.post(`/holiday-management`, body);
};

export default {
  actionHoliday,
  postHoliday,
};
