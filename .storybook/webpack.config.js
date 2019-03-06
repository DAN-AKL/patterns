const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ config, mode }) => {

  // Make whatever fine-grained changes you need
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

  // Return the altered config
  return config;
};





// module.exports = {
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: '[name].[contenthash].css'
//     })
//   ],
//   module: {
//     rules: [{
//       test: /\.svg$/,
//       use: [{
//         loader: '@svgr/webpack'
//       }],
//     },
//     {
//       test: /\.scss$/,
//       use: [{
//         loader: MiniCssExtractPlugin.loader
//       },
//       {
//         loader: 'css-loader',
//         options: {
//           importLoaders: 2,
//           sourceMap: true,
//         },
//       },
//       {
//         loader: 'sass-loader',
//         options: {
//           sourceMap: true,
//         },
//       }
//     ]
//   }],
// },
// };
