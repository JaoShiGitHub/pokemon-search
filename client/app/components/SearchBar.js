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
    <div>
      <input
        type="text"
        value={pokemonKeyword}
        placeholder="Search Pokemon"
        onChange={handleInputSearch}
      />
      <Link href={{ pathname: "/pokemon", query: { name: pokemonKeyword } }}>
        See Pokemon
      </Link>
    </div>
  );
}

export default SearchBar;
