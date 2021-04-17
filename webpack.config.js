const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
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
        new MiniCssExtractPlugin({
            filename: 'stylesheets/[name].css'
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '/images/[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            }]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CSSMinimizerPlugin()
        ]
    }
};