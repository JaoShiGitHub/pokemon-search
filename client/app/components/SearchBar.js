"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const handleInputSearch = (e) => setInputSearch(e.target.value);

  const handleOnClickSearchBtn = async () => {
    const response = await axios(
      `http://localhost:2024/pokemon/${inputSearch}`
    );
    setPokemon(data);
    const data = response.data;
    router.push(`/pokemon/${response.results.name}`);
    console.log(pokemon);
  };

  return (
    <div>
      <input
        type="text"
        value={inputSearch}
        placeholder="Search Pokemon"
        onChange={handleInputSearch}
      />
      <button onClick={handleOnClickSearchBtn}>search</button>
    </div>
  );
}

export default SearchBar;
