const { getIfUtils } = require("webpack-config-utils");

module.exports = (env) => {
    const { ifProd, ifDev } = getIfUtils(env);

    const app = {
        // This must stay in application
    };
    return app;
};
