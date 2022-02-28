const path = require("path")

module.exports = {
    host: process.env.HOST || "local-ip",
    port: 7777,
    static: {
        directory: path.join(__dirname, "../src/assets"),
    },
    historyApiFallback: true,
    compress: true,
    liveReload: false,
    open: true,
    proxy: {
        // "/": {
        //     target: "",
        //     pathRewrite: { "^/api": "" },
        //     changeOrigin: true
        // }
    }
}
