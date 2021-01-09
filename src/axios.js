/*
 * @Author: caoqiubin
 * @Date: 2020-11-01 18:36:15
 * @Last Modified by:   caoqiubin
 * @Last Modified time: 2020-11-01 18:36:15
 */
//axios模块，导出增强的axios
import axios from "axios";

const request = axios.create({
  // baseURL: "http://localhost:8088/api",
  baseURL: "http://localhost:8083/aokimall_admin/backAdmin",
  timeout: 20000
});

request.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    console.log("请求失败");
    console.log(err);
  }
);

request.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    console.log("请求失败");
    return Promise.reject(err);
  }
);

export default request;
