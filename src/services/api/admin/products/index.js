import axios from "../../axiosConfig";

const actionRegularProduct = (body) => {
  return axios.post(`/regularProduct`, body);
};

const actionFreeTrialProduct = (body) => {
  return axios.post(`/freeTrialProduct`, body);
};



export default {
    actionRegularProduct,
    actionFreeTrialProduct,
};
