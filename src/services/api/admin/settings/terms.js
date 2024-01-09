import axios from "../../axiosConfig";
//terms
const actionTerms = () => {
  return axios.get(`/terms-of-use`);
};
const putTerms = (body) => {
  return axios.put(`/terms-of-use`, body);
};
//privacy
const actionPrivacyPolicy = () => {
  return axios.get(`/privacy-policy`);
};
const putPrivacyPolicy = (body) => {
  return axios.put(`/privacy-policy`, body);
};
//payment
const actionPaymentAndRefundPolicy = () => {
  return axios.get(`/payment-and-refund-policy`);
};
const putPaymentAndRefundPolicy = (body) => {
  return axios.put(`/payment-and-refund-policy`, body);
};
//promotion
const actionPromotionTermsAndConditions = () => {
  return axios.get(`/promotion-terms-and-conditions`);
};
const putPromotionTermsAndConditions = (body) => {
  return axios.put(`/promotion-terms-and-conditions`, body);
};

export default {
  actionTerms,
  putTerms,
  actionPrivacyPolicy,
  putPrivacyPolicy,
  actionPaymentAndRefundPolicy,
  putPaymentAndRefundPolicy,
  actionPromotionTermsAndConditions,
  putPromotionTermsAndConditions,
};
