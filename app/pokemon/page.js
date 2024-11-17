"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import NotFound from "../components/NotFound";

function PokemonDetails() {
  const [search, setSearch] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pokemonName = searchParams.get("name");

  useEffect(() => {
    if (!pokemonName) return;

    setPokemonData([]);
    setError(false);
    setIsLoading(!isLoading);
    const findPokemon = async () => {
      try {
        const res = await axios(
          `http://localhost:3000/api/pokemon/${pokemonName}`
        );
        console.log(res.data);
        setPokemonData(res.data);
      } catch (err) {
        setError("Pokemon not found");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    findPokemon();
  }, [pokemonName]);

  const pokemonTypes = pokemonData?.types?.map((types) => types.type.name);
  console.log("Pokemon data", pokemonData);

  const handleSearch = () => {
    if (search) {
      router.push(`/pokemon?name=${search}`, {});
    }
    setSearch("");
  };

  const handleInputSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="bg-[#2C2C2C] h-screen flex flex-col items-center ">
      <div className="bg-[#1E1E1E] hover:border-black hover:border-2 shadow-xl mt-20 mb-8 max-w-4xl w-full h-16 rounded-full flex justify-between px-10 py-5">
        <input
          className="w-full bg-[#1E1E1E] text-white mr-5 outline-none"
          placeholder="Search for Pokémon Name or ID"
          value={search}
          onChange={handleInputSearch}
        />
        <button onClick={handleSearch}> 🔍</button>
      </div>
      {isLoading ? (
        <NotFound resultMessage={"isLoading..."} />
      ) : (
        <div>
          {isLoading === false && pokemonData.length !== 0 ? (
            <section className="bg-[#1E1E1E] shadow-xl mb-40 py-12 rounded-[36px] text-white flex max-w-4xl w-full  justify-center items-center gap-14">
              <img
                className="w-[290px] "
                alt={pokemonData.name}
                src={pokemonData.sprites?.front_default}
              />
              <div className="mt-4">
                <div className="flex flex-col gap-3">
                  <h1 className="uppercase text-lg mb-2">
                    #{pokemonData.id} {pokemonData.name}
                  </h1>

                  <div className="uppercase flex gap-x-10">
                    {pokemonTypes.length ? (
                      pokemonTypes.map((type, index) => {
                        return <span key={index}>{type}</span>;
                      })
                    ) : (
                      <h1>nooo</h1>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <span>Weight: {pokemonData.weight}</span>
                    <span>Height: {pokemonData.height}</span>
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-3">
                  <span>HP: {pokemonData.stats[0]?.base_stat}</span>
                  <span>Attack: {pokemonData.stats[1]?.base_stat}</span>
                  <span>Defense: {pokemonData.stats[2]?.base_stat}</span>
                  <span>Sp.Attack: {pokemonData.stats[3]?.base_stat}</span>
                  <span>Sp.Defense: {pokemonData.stats[4]?.base_stat}</span>
                  <span>Speed: {pokemonData.stats[5]?.base_stat}</span>
                </div>
              </div>
            </section>
          ) : (
            <NotFound message={"Pokemon not found"} />
          )}
        </div>
      )}
      <footer className="text-white font-thin">Created by JaoShi</footer>{" "}
    </div>
  );
}

export default PokemonDetails;
