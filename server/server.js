const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const PORT = 2024;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hey Baby!");
});

app.get("/pokemon/:name", async (req, res) => {
  const pokemonName = req.params.name.toLowerCase();
  try {
    const response = await axios.get(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(404).json({ error: "Not found pokemon" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
