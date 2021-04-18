const path = require('path');
const dev = process.env.NODE_ENV !== 'production';

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        main: './src/themes/main.js',
        light: {
            import: './src/themes/light.js',
            dependOn: 'main'
        },
        dark: {
            import: './src/themes/dark.js',
            dependOn: 'main'
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new FaviconsWebpackPlugin('./src/images/jordanjones-colored.svg'),

        new MiniCssExtractPlugin({
            filename: dev ? 'stylesheets/[name].css' : 'stylesheets/[name].[contenthash].css',
            chunkFilename: dev ? 'stylesheets/[id].css' : 'stylesheets/[id].[contenthash].css'
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.xml$/i,
                loader: 'xml-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '/images/[name].[ext]'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
                ],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.js$/,
                enforce: 'post',
                use: {
                    loader: WebpackObfuscator.loader,
                    options: {
                        rotateStringArray: true
                    }
                }
            }]
    },
    optimization: {
        usedExports: true,
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [
            '...',
            new CSSMinimizerPlugin()
        ]
    }
};