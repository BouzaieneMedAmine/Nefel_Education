import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllPokemon = async (url) => {
    try {
      const response = await axios.get(url);
      setPokemonList((prevList) => [...prevList, ...response.data.results]);

      if (response.data.next) {
        // Recursively fetch the next page
        fetchAllPokemon(response.data.next);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPokemon("https://pokeapi.co/api/v2/pokemon?limit=100"); // Start with the first batch
  }, []);

  return (
    <>
      <h1>Pokémon API</h1>
      {loading ? <p>Loading all Pokémon...</p> : <h2>All Pokémon</h2>}
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
          {index + 1} {pokemon.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;