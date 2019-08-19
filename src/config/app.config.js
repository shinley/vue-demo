let config = {
    local: require('./local.config').default,
    dev: require('./dev.config').default,
    beta: require('./beta.config').default,
    prod: require('./prod.config').default,
};

export default  config[process.env.VUE_APP_ENV_TYPE || 'beta'];