const path = require("path");

const port = process.env.PORT || 8081

module.exports = {
    output : {
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test:/\/(js|jsx)$/,
                excludes: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devserver:{
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
}