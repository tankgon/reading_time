import axios from "../../axiosConfig";

const actionHoliday = (body) => {
  return axios.post(`/settings/holidayManagement`, body);
};

export default {
  actionHoliday,
};
