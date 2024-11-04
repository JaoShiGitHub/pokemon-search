"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

function PokemonDetails() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const pkmName = searchParams.get("name");

  useEffect(() => {
    setIsLoading(!isLoading);
    const findPokemon = async () => {
      try {
        const res = await axios(`http://localhost:2024/pokemon/${pkmName}`);
        setPokemonData(res.data);
      } catch (err) {
        setError("Pokemon not found");
        setIsLoading(false);
        console.log(error);
      }
      setIsLoading(false);
    };

    findPokemon();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  console.log(pokemonData);

  return <div>{pokemonData.name}</div>;
}

export default PokemonDetails;
