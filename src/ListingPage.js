// ListingPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListingPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
      const pokemonData = response.data.results;
      setPokemonList(pokemonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
    }
  };

  if (loading) {
    return <div>Loading Pokemon...</div>;
  }

  return (
    <div>
      {pokemonList.map(pokemon => (
        <div key={pokemon.name}>
          <Link to={`/details/${pokemon.name}`}>
            <h3>{pokemon.name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListingPage;
