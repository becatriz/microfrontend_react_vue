const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.mjs', '.jsx', '.css'],
    alias: {
      events: 'events'
    }
  },
  output: {
    publicPath: 'auto',
    chunkFilename: '[id].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'root',
      filename: 'remoteEntry.js',
      remotes: {
        postslist: 'postslist@http://localhost:3001/remoteEntry.js'
      },
      exposes: {
        './Root': './src/Root'
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom']
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
