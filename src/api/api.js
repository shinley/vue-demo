import http from '../util/http'

export const requestLogin = params => { return http.post(`activiti/login`, params).then(res => res.data); };

export const requestLogout = params => { return http.post(`activiti/logout`, params).then(res => res.data); };

export const getDeploymentList = params => { return http.get(`activiti/deployment/list`, params).then(res=>res.data); };

export const deployZip = params => {return http.upload(`activiti/deployment/deploy`, params).then(res=>res.data);};

export const removeDelopyment = params => { return http.delete(`activiti/deployment/delete`,  params ).then(res=>res.data); };

export const getProcessDefinitionList = params => { return http.get(`activiti/prodefinition/list`, params).then(res=>res.data); };

export const removeProcessDefinition = params => { return http.delete(`activiti/prodefinition/delete`,  params ).then(res=>res.data); };

export const preditionLuoNiu = params => { return http.get(`activiti/stock/prediction`,  params ).then(res=>res.data); };

export const selfPrediction = params => { return http.post(`activiti/stock/selfPrediction`, params).then(res => res.data); };