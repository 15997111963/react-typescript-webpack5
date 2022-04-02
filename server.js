const webpack = require("webpack")
const derServerConfig = require("./webpack-config/devserver")
const middleware = require("webpack-dev-middleware")

const compiler = webpack({
    ...require("./webpack-config/webpack.config")
})

const express = require("express")
const app = express()

app.use(middleware(compiler, {
    // webpack-dev-middleware options
}))

app.listen(derServerConfig.port, () => {
    console.log(app, `Example app listening on port ${derServerConfig.port}!`)
})