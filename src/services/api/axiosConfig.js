import axios from "axios";
// import blockChainStorage from '~/utils/storage';

const instance = axios.create({
  baseURL: `http://192.168.1.16:8080/api`,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    withCredentials: true,
  },
});

instance.interceptors.request.use(
  function (config) {
    // const TOKEN = blockChainStorage.getInfoClient()
    // config.headers.Authorization = TOKEN ? `Bearer ${TOKEN.data.token}` : ''
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
