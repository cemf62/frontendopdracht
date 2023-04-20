import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SearchResults({ searchQuery }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=121c48d2`);
      const data = await response.json();
      setMovies(data.Search);
    };
    fetchMovies();
  }, [searchQuery]);

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {movies?.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
