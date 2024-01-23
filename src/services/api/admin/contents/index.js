import axios from "../../axiosConfig";

const actionBook = () => {
  return axios.get(`/book`);
};
const postBook = (body) => {
  return axios.post(`/book`, body);
};
const putBook = (body) => {
  return axios.put(`/book`, body);
};

const actionCurriculum = () => {
  return axios.get(`/curriculum`);
};
const postCurriculum = (body) => {
  return axios.post(`/curriculum`, body);
};
const putCurriculum = (body) => {
  return axios.put(`/curriculum`, body);
};

export default {
  actionBook,
  postBook,
  putBook,
  actionCurriculum,
  postCurriculum,
  putCurriculum,
};
