// About.js
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Search() {

  const [pokemonName, setPokemonName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate('/');
  }

  const handleSearch = async () => {
    if (pokemonName === '') {
      alert("Please Enter Pokemon Name")
    } else {
      try {
        setLoading(true);
        setError(null);
  
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
        );
  
        setPokemonData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    
  };

  return (
    <div>
      
      
    
      <h1>Pokemon Search</h1>
      <div>Example Names : 1.Pikachu, 2.Charizard, 3.Bulbasaur, 4.Squirtle, 5.Jigglypuff, 6.Eevee</div>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
        </div>
      )}
      
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Search;
