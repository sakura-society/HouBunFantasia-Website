//对axios进行二次封装
import axios from "axios"
//引入进度条
import nprogress from "nprogress"
import 'nprogress/nprogress.css'

const requests = axios.create({
  baseURL: 'https://api.sakurakoi.top',
  timeout: 5000,
})

//请求拦截
requests.interceptors.request.use((config) => {
  nprogress.start()
  return config
}, (error) => {
  return Promise.reject(new Error('faile'))
});

//响应拦截
requests.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, (error) => {
  return Promise.reject(new Error('失败'))
})

export default requests;