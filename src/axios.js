/*
 * @Author: caoqiubin
 * @Date: 2020-11-01 18:36:15
 * @Last Modified by: caoqiubin
 * @Last Modified time: 2021-01-09 21:34:14
 */
//axios模块，导出增强的axios
import axios from "axios";
let url=process.env.NODE_ENV === 'production' ? 'http://120.79.1.207:8080/aokimall_admin/backAdmin' : 'http://localhost:8083/aokimall_admin/backAdmin'
const request = axios.create({
  // baseURL: "http://localhost:8088/api",
  baseURL: url,
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
