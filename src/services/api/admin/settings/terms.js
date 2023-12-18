import axios from "../../axiosConfig";

const actionTerms = (body) => {
  return axios.post(`/settings/termsOfUse`, body);
};

const actionPrivacyPolicy = (body) => {
  return axios.post(`/settings/privacyPolicy`, body);
};

const actionPaymentAndRefundPolicy = (body) => {
  return axios.post(`/settings/paymentAndRefundPolicy`, body);
};

const actionPromotionTermsAndConditions = (body) => {
  return axios.post(`/settings/promotionTermsAndConditions`, body);
};

export default {
  actionTerms,
  actionPrivacyPolicy,
  actionPaymentAndRefundPolicy,
  actionPromotionTermsAndConditions,
};
