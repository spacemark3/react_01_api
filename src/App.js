import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);


useEffect(() => {
  const controller = new AbortController();
  setLoading(true);

  axios
    .get(currentPageUrl, { signal: controller.signal })
    .then((res) => {
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results.map((p) => p.name));
      setLoading(false);
    })
    .catch((error) => {
      if (error.name === 'CanceledError') return; // Ignore cancellation
      console.error("Fetch error:", error);
      setLoading(false);
    });

  return () => controller.abort(); // Cleanup
}, [currentPageUrl]);

  if(loading) return "Loading...";

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  }
  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  }

 
  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination 
      goToPrevPage={prevPageUrl ? goToPrevPage : null}
      goToNextPage={nextPageUrl ? goToNextPage : null}
      loading={loading}
      />
    </>
  );
}

export default App;
