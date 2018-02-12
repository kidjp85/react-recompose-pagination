const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      filename: './lib/react-recompose-pagination.js',
      libraryTarget: 'umd',
      library: 'ReactRecomposePagination',
      auxiliaryComment: ''
    },
    resolve: {
      extensions: ['.js'],
      modules: ['./src', 'node_modules']
    },
    resolveLoader: {
      moduleExtensions: ['-loader']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel',
          include: [path.join(__dirname, 'src')]
        }
      ]
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  {
    entry: './src/index.js',
    output: {
      filename: './lib/react-recompose-pagination.min.js',
      libraryTarget: 'umd',
      library: 'ReactRecomposePagination'
    },
    resolve: {
      extensions: ['.js'],
      modules: ['./src', 'node_modules']
    },
    resolveLoader: {
      moduleExtensions: ['-loader']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel',
          include: [path.join(__dirname, 'src')]
        }
      ]
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      })
    ]
  }
];
