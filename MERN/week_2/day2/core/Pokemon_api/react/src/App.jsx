import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'


  function App() {
    const [pokemonList, setPokemonList] = useState([]);
    
    const fetchAllPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
        setPokemonList((prevList) => [...prevList, ...response.data.results]);
  
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        
      }
    };
  
    useEffect(() => {
      
      fetchAllPokemon()

      
    }, []);
  
    return (
      <>
        <h1>Pokémon API</h1>
        {/* {loading ? <p>Loading all Pokémon...</p> : <h2>All Pokémon</h2>} */}
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
  

  




export default App
