const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// static server

app.use(express.static(path.join(__dirname, "dist")));

// route

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
