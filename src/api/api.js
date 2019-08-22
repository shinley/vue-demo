import http from '../util/http'

export const requestLogin = params => { return http.post(`login`, params).then(res => res.data); };

export const getDeploymentList = params => { return http.get(`activiti/deployment/list`, { params: params }).then(res=>res.data); };

export const deployZip = params => {return http.upload(`activiti/deployment/deploy`, params).then(res=>res.data);};

export const removeUser = params => { return http.get(`user/remove`, { params: params }); };

export const batchRemoveUser = params => { return http.get(`user/batchremove`, { params: params }); };

export const editUser = params => { return http.get(`user/edit`, { params: params }); };

export const addUser = params => { return http.get(`user/add`, { params: params }); };