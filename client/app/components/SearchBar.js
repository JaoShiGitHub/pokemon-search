"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";

function SearchBar() {
  const [pokemonKeyword, setPokemonKeyword] = useState("");

  const handleInputSearch = (e) => {
    setPokemonKeyword(e.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <section className="w-full flex flex-col items-center">
        <img alt="Pokémon" src="pokemon-group-pic.png" className="w-2/4" />
        <h1 className="text-white font-bold text-4xl">Pokémon Search</h1>
        <div className="bg-[#1E1E1E] flex justify-center items-center">
          <input
            className="bg-[#1E1E1E] w-full h-7"
            type="text"
            value={pokemonKeyword}
            placeholder="Search for Pokémon Name or ID"
            onChange={handleInputSearch}
          />
          <Link
            href={{ pathname: "/pokemon", query: { name: pokemonKeyword } }}
          >
            See Pokemon
          </Link>
        </div>
      </section>
      <footer className="text-white font-thin">Created by JaoShi</footer>
    </div>
  );
}

export default SearchBar;
