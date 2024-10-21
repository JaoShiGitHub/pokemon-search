"use client";

import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [inputSearch, setInputSearch] = useState("");
  const [pokemon, setPokemon] = useState([])

  const handleInputSearch = (e) => setInputSearch(e.target.value);

  return (
    <div>
      <input
        type="text"
        value={inputSearch}
        placeholder="Search Pokemon"
        onChange={handleInputSearch}
      />
      <button>search</button>
    </div>
  );
}

export default SearchBar;
