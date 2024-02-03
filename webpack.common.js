const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.ts",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "가오리당 기술 블로그",
      template: "./index.html",
      meta: {
        author: "gaoridang",
        Keyowrds: "가오리당",
        keywords: "html, css, javascript, typescript",
        description:
          "웹 개발 기술 블로그입니다! 바닐라 자바스크립트로 개발 중입니다.",
        robots: "index, follow",
        Date: "2024-02-04T12:14:00+09:00",
      },
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
