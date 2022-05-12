const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const publicPath = "/";
module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
    chunkFilename: "main.chunk.js",
    library: "okra",
    libraryTarget: "umd",
    publicPath: publicPath,
    libraryExport: "default",
  },

  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // use: "babel-loader",
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)?$/,
        use: "file-loader?name=./images/[name].[ext]",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
