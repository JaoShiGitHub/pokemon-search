const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const PORT = 2024;

let pokemonInfo = [];

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hey Baby!");
});

const fetchPokemons = async () => {
  try {
    const pokemons = await axios(
      "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"
    );
    pokemonInfo = pokemons.results;
  } catch (error) {
    console.error("Error fetching data from external API: ", error);
  }
};

fetchPokemons();

app.get("/pokemon/:name", async (req, res) => {
  const { path } = req.params;
  const pokemon = pokemonInfo.find((pokemon) => {
    pokemon.name === path || pokemon.id === path;
  });

  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).json({ error: "Pokemon not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
