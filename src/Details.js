// DetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Details() {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    fetchPokemonDetails();
  }, [pokemonName]);

  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const detailsData = response.data;
      setPokemonDetails(detailsData);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };

  if (!pokemonDetails) {
    return <div>Loading Pokemon details...</div>;
  }

  return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      {/* Display other details */}
    </div>
  );
}

export default Details;
