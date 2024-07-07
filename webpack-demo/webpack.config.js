const path = require("path");
const port = process.env.PORT || 8081
const webpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // entry: {       // multiple entry points
    //     main: './src/index.js',
    //     vendor: './src'
    // },
    output : {          //Specifies where the bundled output should be placed
        path: path.join(__dirname, '/dist'),
        filename: 'main.[fullhash].js',
        chunkFilename: '[name].bundle.[fullhash].js'
    },
    module: {     //Defines how files should be transformed by loaders before they are added to the bundle
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    // 'style-loader', 
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },{
                test: /\.(jpg|jpeg|svg|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),
        new CssMinimizerPlugin(),
        new MiniCssExtractPlugin({filename: '[name].[fullhash].css'}),
        new CopyPlugin({
            patterns: [
                {from : 'public', to: 'images'}
            ]
        })
    ],
    devServer:{      //Configures the development server options for Webpack.
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
}