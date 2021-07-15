// Copyright (c) 2017 PlanGrid, Inc.

const path = require('path');
const autoprefixer = require('autoprefixer');

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './src');

const config = {
  mode: 'production',
  entry: `${APP_DIR}/components`,
  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    library: ['FileViewer'],
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [
        path.join(__dirname, 'node_modules')
    ],
    alias: {
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
      "react/jsx-runtime": "react/jsx-runtime.js"
    },
    fallback: {
      "util": require.resolve('util'),
      "path": false,
      "stream": require.resolve('stream-browserify')
    }
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // if file <=10kb
        },
      },
    ],
  },
};

module.exports = config;
