const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// static server

app.use(express.static(path.join(__dirname, "dist")));

// route

app.get("/", (req, res) => {
  res.sendFile(__dirname, "/dist/index.html");
});

if (process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config");
  const compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler));
  app.use(
    require("webpack-dev-middleware")(compiler, {
      // noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    })
  );
}
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
