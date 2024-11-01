const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const PORT = 2024;

let pokemonInfo = [];

app.use(cors()); // Allow all origins for simplicity

app.get("/test-server", (req, res) => {
  const url = pokemonInfo.find((pokemon) => pokemon.name === "bulbasaur");
  res.send(url.url);
});

app.get("/pokemon/:keyword", async (req, res) => {
  const { keyword } = req.params;

  if (keyword) {
    try {
      const response = await axios(
        `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${keyword.toLowerCase()}`
      );
      const data = response.data;
      res.send(data);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      res.status(500).send("Error fetching Pokémon data");
    }
  } else {
    res.status(404).json({ error: "Pokemon not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
