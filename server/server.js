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

const fetchPokemons = async () => {
  try {
    const response = await axios(
      "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"
    );
    const data = response.data;
    pokemonInfo = data.results;
    console.log("Fetched data:", pokemonInfo);
  } catch (error) {
    console.error("Error fetching data from external API: ", error);
  }
};

fetchPokemons();

app.get("/pokemon/:keyword", async (req, res) => {
  const { keyword } = req.params;
  const pokemon = pokemonInfo.find((pokemon) => {
    return (
      pokemon.name.toLowerCase() === keyword || `${pokemon.id}` === keyword
    );
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
