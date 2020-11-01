/*
 * @Author: caoqiubin 
 * @Date: 2020-11-01 18:36:15 
 * @Last Modified by:   caoqiubin 
 * @Last Modified time: 2020-11-01 18:36:15 
 */
//axios模块，导出增强的axios
import axios from 'axios'

const instance=axios.create({
    baseURL:'/api'
})

instance.interceptors.request.use((config)=>{
    return config
}).catch(err=>{
    console.log(err)
})


instance.interceptors.response.use((response)=>{
    return response;
}).catch((err)=>{
    return Promise.reject(err)
})

export default instance