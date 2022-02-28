const path = require("path")

module.exports = (_, process) => ({
    devtool: process.mode === "development" ? "source-map" : "cheap-module-source-map",
    entry: require("./entry").entry,
    output: {
        filename: "./js/[name].[hash].js",
        path: path.resolve(__dirname, "../production"),
        clean: true
    },
    module: require("./module.js"),
    plugins: require("./plugins.js"),
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".less"],
        alias: {
            "@": path.resolve(__dirname, "../src"),
            "@/assets": path.resolve(__dirname, "../src/assets")
        }
    },
    devServer: process.mode === "development" ? require("./devserver.js") : {}
})