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

  const pokemonTypes = pokemonData.types;
  if (isLoading) return <p>Loading...</p>;
  console.log(isLoading);

  console.log(pokemonData);
  console.log("Sprites :", pokemonData.sprites?.front_default);

  console.log(isLoading);

  return (
    <div className="bg-[#2C2C2C] h-screen">
      <section className="bg-[#1E1E1E] text-white">
        <img alt={pokemonData.name} src={pokemonData.sprites?.front_default} />
        <h1 className="uppercase">
          #{pokemonData.id} {pokemonData.name}
        </h1>
        <div>
          {pokemonTypes ? (
            pokemonTypes.map((type, index) => {
              return <span key={index}>{type.name}</span>;
            })
          ) : (
            <h1>nooo</h1>
          )}
        </div>
        <div>
          <span>Weight: {pokemonData.weight}</span>
          <span>Height: {pokemonData.height}</span>
        </div>
        <div>
          {/*  <span>HP: {pokemonData.stats[0]?.base_stat}</span>
         <span>Attack: {pokemonData.stats[1]?.base_stat}</span>
          <span>Defense: {pokemonData.stats[2]?.base_stat}</span>
          <span>Sp.Attack: {pokemonData.stats[3]?.base_stat}</span>
          <span>Sp.Defense: {pokemonData.stats[4]?.base_stat}</span>
          <span>Speed: {pokemonData.stats[5]?.base_stat}</span> */}
          <span>HP: 45</span>
          <span>Attack: 49</span>
          <span>Defense: 49</span>
          <span>Sp.Attack: 65</span>
          <span>Sp.Defense: 65</span>
          <span>Speed: 45</span>
        </div>
      </section>

      <footer className="text-white font-thin">Created by JaoShi</footer>
    </div>
  );
}

export default PokemonDetails;
