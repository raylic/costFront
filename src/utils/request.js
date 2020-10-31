import axios from 'axios'
import { MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://123.57.111.195:18082',
  timeout: 5000 
})

// request interceptor
service.interceptors.request.use(
  config => {
    //将本地存储的token加入到http报文中
    if (store.getters.token) {
      config.headers['Authorization'] = `Bearer ${getToken()}`
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  
  response => {
    const res = response.data

    if (res.code !== 0) {
      
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    const err = error.response.data
    console.log(err)
    //当token失效的时候
    if (err.code == -2){
      MessageBox.confirm('当前登录状态已经重置，请重新登录', '请重新登录', {
        confirmButtonText: '确认登出',
        showCancelButton: false,
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      })
    }
    return Promise.reject(err.msg)
  }
)

export default service