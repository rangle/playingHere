const webpack = require('./webpack.config.js');

module.exports = function (config) {

  config.set({
    frameworks: [
      'source-map-support',
      'jasmine',
      'sinon'
    ],

    files: ['./src/tests/test-loader.js'],
    preprocessors: {
      './src/tests/test-loader.js': ['webpack', 'sourcemap']
    },

    browsers: ['ChromeCanary'],

    plugins: [
      'karma-sinon',
      'karma-webpack',
      'karma-coverage',
      'karma-jasmine',
      'karma-source-map-support',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-chrome-launcher',
      'karma-remap-istanbul'
    ],

    webpack: {
      externals: {
        jsdom: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.json$/,
            loader: 'json'
          },
          {
            test: /\.jsx$/, loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true //no spam
    }

  });
};

