import http from '../util/http'

export const requestLogin = params => { return http.post(`login`, params).then(res => res.data); };

export const getUserList = params => { return http.get(`user/list`, { params: params }); };

export const getUserListPage = params => { return http.get(`user/listpage`, { params: params }); };

export const removeUser = params => { return http.get(`user/remove`, { params: params }); };

export const batchRemoveUser = params => { return http.get(`user/batchremove`, { params: params }); };

export const editUser = params => { return http.get(`user/edit`, { params: params }); };

export const addUser = params => { return http.get(`user/add`, { params: params }); };