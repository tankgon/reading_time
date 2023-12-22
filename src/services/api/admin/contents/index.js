import axios from "../../axiosConfig";

const actionBook = (body) => {
  return axios.post(`/curriculumBookRelationships`, body);
};
const actionContents = (body) => {
  return axios.post(`/curriculumContents`, body);
};
const actionBookContents = (body) => {
  return axios.post(`/bookContents`, body);
};

export default {
  actionBook,
  actionContents,
  actionBookContents,
};
