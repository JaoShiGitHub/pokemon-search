const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 2024;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hey Baby!");
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
