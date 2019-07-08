const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = function(env) {
    return {
        mode: env.mode,
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: "vue-loader"
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin()
        ],
        output: {
            library: "main"
        }
    };
}
