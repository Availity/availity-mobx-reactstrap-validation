var path = require('path');
var webpack = require('webpack');

var libraryName = 'AvailityMobxReactstrapValidation';

module.exports = function(env) {
  var outputFile;
  var plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ];

  if (env === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin(
      {
        minimize: true,
        compress: {
          warnings: false,
        },
        mangle: true,
      }
    ));
    outputFile = libraryName.toLowerCase() + '.min.js';
  } else {
    outputFile = libraryName.toLowerCase() + '.js';
  }

  var config = {
    devtool: 'source-map',
    entry: [__dirname + '/src/index.js'],
    output: {
      path: __dirname + '/dist',
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    resolve: {
      alias: {
        'availity-mobx-reactstrap-validation': 'src/index',
      },
      extensions: ['.js', '.jsx', '.json'],
      modules: [
        path.resolve('./src'),
      ],
    },
    plugins: plugins,
  };

  return config;
};
