const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
  });

  config.module.rules = [
    {
      test: /(\.jsx|\.js)$/,
      loader: "babel-loader",
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 2,
            sourceMap: true
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    },
    {
      test: /\.svg$/,
      include: /src\/images/,
      exclude: /src\/fonts/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false
              }
            }
          }
        }
      ]
    },
    {
      test: /\.(svg|eot|otf|webp|ttf|woff|woff2)$/,
      include: /src\/fonts/,
      exclude: /src\/images/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif)$/,
      include: /src\/images/,
      exclude: /src\/fonts/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    }
  ];

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  );

  return config;
};
