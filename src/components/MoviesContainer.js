import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MoviesContainer = ({ searchQuery }) => {
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
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center">
      {movies?.map((movie) => (
        <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-48 h-auto m-4"
          />
        </Link>
      ))}
    </div>
  );
};

export default MoviesContainer;
