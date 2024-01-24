import axios from "../axiosConfig";

const actionReadingRoom = (id) => {
  return axios.get(`/reading-room/${id}`);
};

export default {
  actionReadingRoom,
};
