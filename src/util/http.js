/**
 * 封装 Axios 常见几种请求方式
 * 需求及实现：
 * 1.基础鉴权
 * 2.统一捕获接口报错
 * 3.弹窗提示
 * 4.报错重定向
 * 5.Loading
 * 6.全局公共配置(跨域，超时...)
 * 7.拒绝重复请求
 * 请求流程：
 *    发起请求--> request拦截 --> response拦截 --> checkCode --> 处理正确请求
 */

import axios from 'axios'
import { Message, Loading } from 'element-ui'
import config from '../config/app.config'

// 设置默认请求头
axios.defaults.headers = {
  'Content-Type': 'application/json;charset=UTF-8;',
  'X-Requested-With': 'XMLHttpRequest'
}

// axios 拦截请求
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  let status = response.status
  if (status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
})

function checkLogin (resp) {
  if (resp) {
    if ((resp.data && `${resp.data.code}` === '401') ||
      `${resp.status}` === '401') {
      let currentLocation = window.location.href
      setTimeout(function () {
        // 重定向到登录页面
        window.location = `/user/login?redirect_url=${currentLocation}`
      }, 0)
      return false
    }
    if (resp.data && resp.data.code === '403') {
      Message.error(resp.data.msg)
      return false
    }
    return true
  }
}

function checkCode (res) {
  if (res && (res.status === 200)) {
    return true
  }
  return false
}

var loadingIntance = null
var loading = false

function createLoading () {
  if (!loading) {
    loadingIntance = Loading.service({
      'text': '数据加载中...'
    })
    loading = true
  }
}

function closeLoading () {
  if (loadingIntance) {
    loadingIntance.close()
    setTimeout(function () {
      loading = false
    }, 200)
  }
}

let http = {
  get (url, params) {
    url = /^(((http|https):\/\/)|(\/\/))/.test(url) ? url : (config.baseURL + url);
    createLoading()
    return axios({
      method: 'get',
      url: url,
      params, // get 请求时带的参数
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (res) => {
        if (checkLogin(res)) {
          closeLoading()
          if (checkCode(res)) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        }
      }
    ).then(
      (res) => {
        if (checkLogin(res)) {
          closeLoading()
          if (checkCode(res)) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        }
      }
    )
  },
  post (url, data) {
    url = /^(((http|https):\/\/)|(\/\/))/.test(url) ? url : (config.baseURL + url);
    console.log(config)
    createLoading()
    return axios({
      method: 'post',
      url: url,
      data: data,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (res) => {
        if (checkLogin(res)) {
          closeLoading()
          if (checkCode(res)) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        }
      }
    ).then(
      (res) => {
        if (checkLogin(res)) {
          closeLoading()
          if (checkCode(res)) {
            return Promise.resolve(res)
          } else {
            return Promise.reject(res)
          }
        }
      }
    )
  },
  upload (url, params) {
    url = /^(((http|https):\/\/)|(\/\/))/.test(url) ? url : (config.baseURL + url);
    console.log(params)
    createLoading()
    return axios({
      method: 'post',
      url: url,
      data: params,
      // headers: {
      //   'Content-Type':'multipart/form-data'
      // }
    }).then(
        (res) => {
          if (checkLogin(res)) {
            closeLoading()
            if (checkCode(res)) {
              return Promise.resolve(res)
            } else {
              return Promise.reject(res)
            }
          }
        }
    ).then(
        (res) => {
          if (checkLogin(res)) {
            closeLoading()
            if (checkCode(res)) {
              return Promise.resolve(res)
            } else {
              return Promise.reject(res)
            }
          }
        }
    )
  },
  put (url, data) {
    createLoading()
    url = /^(((http|https):\/\/)|(\/\/))/.test(url) ? url : (config.baseURL + url);
    return axios({
      method: 'put',
      url: url,
      data
    }).then(
      (res) => {
        closeLoading()
        if (checkCode(res)) {
          return Promise.resolve(res)
        } else {
          return Promise.reject(res)
        }
      }
    )
  },
  patch (url, data) {
    createLoading()
    url = /^(((http|https):\/\/)|(\/\/))/.test(url) ? url : (config.baseURL + url);
    return axios({
      method: 'patch',
      url: url,
      data
    }).then(
      (res) => {
        closeLoading()
        if (checkCode(res)) {
          return Promise.resolve(res)
        } else {
          return Promise.reject(res)
        }
      }
    )
  },
  delete (url, data) {
    console.log(data);
    createLoading();
    url = /^(((http|https):\/\/)|(\/\/))/.test(url) ? url : (config.baseURL + url);
    return axios({
      method: 'delete',
      url: url,
      params: data
    }).then(
      (res) => {
        closeLoading()
        if (checkCode(res)) {
          return Promise.resolve(res)
        } else {
          return Promise.reject(res)
        }
      }
    )
  }
}

export default http
