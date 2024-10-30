import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useParams = () => {
  const { query } = useRouter();
  return query;
};

function PokemonDetails() {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const findPokemon = async () => {
      try {
        const res = await axios(`http://localhost:2024/pokemon/${query.name}`);
        setPokemonData(res.data);
        console.log(pokemonData);
      } catch (err) {
        setError("Pokemon not found");
        console.log(error);
      }
    };

    findPokemon();
  }, [name]);

  return <div>{pokemonData.name}</div>;
}

export default PokemonDetails;
