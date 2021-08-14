// webpack config

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PORT = process.env.PORT || 8802;
const cwd = process.cwd();

module.exports = {
  mode: "development",
  entry: {
    index: ["./demo/index"],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  output: {
    path: path.resolve(cwd, "./demo"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              context: cwd,
              configFile: path.resolve(cwd, "./config/tsconfig.webpack.json"),
            },
          },
          "eslint-loader",
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  devtool: false, // use SourceMapDevToolPlugin
  devServer: {
    historyApiFallback: false,
    port: PORT,
    hot: true,
    host: "0.0.0.0",
    open: true,
    openPage: `http://127.0.0.1:${PORT}`,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(cwd, "./demo/index.tpl"),
    }),
    new webpack.SourceMapDevToolPlugin({}),
  ],
};
