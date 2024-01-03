import axios from "axios";
// import blockChainStorage from '~/utils/storage';

const instance = axios.create({
  baseURL: `http://192.168.1.12:8080`,

  headers: {
    "Content-Type": "application/json",
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
