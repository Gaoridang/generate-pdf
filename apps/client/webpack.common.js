const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.ts",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "이력서 to PDF",
      template: "./index.html",
      meta: {
        author: "gaoridang",
        Keyowrds: "이력서 PDF",
        keywords: "이력서, pdf, 개발자이력서",
        description: "이력서를 원하는 형태의 PDF로 바꿔보세요.",
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
