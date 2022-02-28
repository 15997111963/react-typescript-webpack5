module.exports = {
    rules: [
        {
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"),
            options: {
                plugins: [
                    ["import", { "libraryName": "antd", "style": true }]
                ]
            }
        },
        {
            test: /\.(png|gif|jpe?g|svg)$/,
            type: "asset/resource",
            generator: {
                filename: "images/[hash][ext][query]"
            }
        },
        {
            test: /\.(woff|woff2|eot|ttf)\??.*$/,
            type: "asset/resource",
            generator: {
                filename: "fonts/[hash][ext][query]"
            }
        },
        {
            test: /\.(css|less)$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true,
                        sourceMap: true
                    }
                }
            ],
        },
        {
            test: /\.(mp3)(\?.*)?$/,
            type: "asset/resource",
            generator: {
                filename: "audios/[hash][ext][query]"
            }
        }
    ]
}