"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState("");

  const handleInputSearch = (e) => setInputSearch(e.target.value);

  const handleOnClickSearchBtn = async () => {
    const keyword = inputSearch;
    router.push(`/results/${keyword}`);
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
