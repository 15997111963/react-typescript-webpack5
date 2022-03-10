/**
 * @author Mr Ke
 * @filename plugins.js
 */

const path = require("path")
const WebpackBar = require("webpackbar")
const Webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const glob = require("glob")
const entrys = require("./entry.js").entrys

let plugins = [
    new WebpackBar(),
    new Webpack.HotModuleReplacementPlugin({}),
    new Webpack.ProvidePlugin({
		log: path.resolve(__dirname, "../src/utils/chalk.ts")
	})
]

new glob.Glob("!(_)*", {
    cwd: entrys,
    sync: true
}).found.forEach(page => {
    let _entrys = require(path.resolve(entrys, `${page}/entry.js`)).entry,
        entry = []

    for (let i = 0; i < _entrys.length; i++) {
        entry.push(`${page}/${_entrys[i]}`)
    }

    plugins.push(new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: path.resolve(entrys, `${page}/index.html`),
        hash: true,
        chunks: entry,
        // 如果需要页面title上的图标 需加入此行 并在index.html同级放入favicon.ico图标 不然会报错
        // favicon: path.resolve(entrys, `${page}/favicon.ico`)
    }))
})

module.exports = plugins