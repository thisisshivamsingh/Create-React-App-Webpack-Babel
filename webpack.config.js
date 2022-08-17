const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/test.jsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ["babel-loader"], exclude: /node-modules/ },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
        exclude: /node-modules/,
      },
      { test: /\.(jpg|png|jpeg)$/, use: ["file-loader"] },
      { test: /\.(html)$/, use: ["html-loader"] },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/test.html",
      filename: "index.html",
    }),
  ],
};
