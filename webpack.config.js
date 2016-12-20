const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  entry: './src/main.ts',
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'dist/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
		{
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  }
};
