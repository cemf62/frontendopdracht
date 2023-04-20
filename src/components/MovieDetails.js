import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=121c48d2`);
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center mt-8">
    <img src={movie.Poster} alt={movie.Title} className="w-64 h-auto" />
    <div className="mt-4 text-center">
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <p className="mt-2">{movie.Plot}</p>
    </div>
      <Link className="mt-4 ml-2 px-4 py-2 font-bold text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
      to="/">Back to Home</Link>
    </div>
    
  );
}

export default MovieDetails;
