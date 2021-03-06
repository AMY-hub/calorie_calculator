const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        babelpolyfill: '@babel/polyfill',
        index: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'build')
        }
    },
    plugins: [ new HTMLWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }) ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              },
            },
          },
          {
            test: /\.(scss|css)$/,
            // use: ['style-loader', 'css-loader', 'sass-loader']
            use : [
                {
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader',
                  options: {
                      sourceMap: true
                  }
              },
              {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                          "autoprefixer"
                      ],
                    }
                  }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ],
      },

}