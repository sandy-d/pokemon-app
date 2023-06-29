import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useNavigate} from "react-router-dom";

const ListingPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState('');

  const navigate = useNavigate();

  function handleBack() {
    navigate('/');
  }

  useEffect(() => {
    fetchPokemonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemonList = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');

      setPokemonList((prevList) => [...prevList, ...response.data.results]);
      setNextUrl(response.data.next);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch Pokemon data.');
      setLoading(false);
    }
  };

  const loadMorePokemon = async () => {
    if (nextUrl) {
      try {
        setLoading(true);

        const response = await axios.get(nextUrl);

        setPokemonList((prevList) => [...prevList, ...response.data.results]);
        setNextUrl(response.data.next);
        setLoading(false);
      } catch (error) {
        setError('Failed to load more Pokemon.');
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h1>Pokemon Listing</h1>
      <button onClick={handleBack}>Back</button>

      {error && <p>{error}</p>}

      <InfiniteScroll
        dataLength={pokemonList.length}
        next={loadMorePokemon}
        hasMore={!!nextUrl}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more Pokemon to display.</p>}
      >
        <div className="pokemon-grid">
          {pokemonList.map((pokemon) => (
            <div key={pokemon.name} className="pokemon-item">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
                  .split('/')
                  .slice(-2)[0]}.png`}
                alt={pokemon.name}
              />
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ListingPage;
