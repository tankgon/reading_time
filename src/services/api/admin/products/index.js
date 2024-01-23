import axios from "../../axiosConfig";

const actionRegularProduct = () => {
  return axios.get(`/regular-product`);
};
const postRegularProduct = (body) => {
  return axios.post(`/regular-product`, body);
};
const putRegularProduct = (body) => {
  return axios.put(`/regular-product`, body);
};

const actionFreeTrialProduct = (body) => {
  return axios.post(`/freeTrialProduct`, body);
};

export default {
  actionRegularProduct,
  postRegularProduct,
  putRegularProduct,
  actionFreeTrialProduct,
};
