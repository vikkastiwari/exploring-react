const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  mode: 'none',
  optimization: {
    usedExports: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    minimize:true,
  },
};