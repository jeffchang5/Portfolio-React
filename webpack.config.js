const path = require('path');
module.exports = {

    entry:  path.resolve(__dirname, 'src/entry.js'),
    output: {
        path: path.resolve(__dirname, 'assets/scripts'),
        filename: "bundle.js"
    },
    module: {
  loaders: [
    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
  ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      contentBase: path.resolve(__dirname, '_site')
    }
}
