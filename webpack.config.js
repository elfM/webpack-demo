const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    port: '8080',
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    },
    static: {
      directory: path.resolve(__dirname, 'public')
    }  
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: miniCssExtractPlugin.loader
        },
        'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({ filename: '[name].css'})
  ]
};
