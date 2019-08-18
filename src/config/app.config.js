let config = {
    local: require('./config/local.config').default,
    dev: require('./config/dev.config').default,
    beta: require('./config/beta.config').default,
    prod: require('./config/prod.config').default,
};

export default  config[process.env.VUE_APP_ENV_TYPE || 'beta'];