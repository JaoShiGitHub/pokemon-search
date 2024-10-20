"use client";

import { useState } from "react";

function SearchBar() {
  const [inputSearch, setInputSearch] = useState("");

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
