import axios from "axios";
import { getToken } from "./auth";
import { Toast } from "vant";

const instance = axios.create({
  timeout: 5000,
});

// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers.authorization = `Bearer ${getToken()}`;
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function(error) {
    if (error && error.response && error.response.status === 401) {
      Toast("未登录");
      // setTimeout(() => {
      //   window.location.href = "/#/login";
      // }, 1000);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

/**
 * get
 * @param {*} url
 * @param {*} params
 */
export function get(url, params) {
  return instance.get(url, { params });
}

/**
 * post
 * @param {*} url
 * @param {*} data
 */
export function post(url, data) {
  return instance.post(url, data);
}

export function deleteData(url) {
  return instance.delete(url);
}
