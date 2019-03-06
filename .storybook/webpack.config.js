const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ config, mode }) => {

  config.module.rules.push({
    test: /\.scss$/,
    loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  });

  config.module.rules.unshift({
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false
          }
        }
      }
    }],
  })

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  )

  return config;
};
