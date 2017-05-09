var path = require("path");
module.exports = {
  entry: {
    app: ["./src/app.js"],
    styles: './src/scss/style.scss'
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/assets/",
    filename: "[name].js"
  },
  module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    },
  watch: true
};
