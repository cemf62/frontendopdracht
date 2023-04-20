import React, { useState } from 'react';
import '../index.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleQueryChange = async (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (newQuery === '') {
      setResults([]);
      return;
    }

    const response = await fetch(`http://www.omdbapi.com/?s=${newQuery}&apikey=121c48d2`);
    const data = await response.json();

    if (data.Search) {
      setResults(data.Search);
    } else {
      setResults([]);
    }
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  const handleResultClick = (title) => {
    setQuery(title);
    setResults([]);
    onSearch(title);
  };

  return (
    <div className="relative text-xl flex items-center">
      <div className="relative w-64 flex-grow mr-2">
        <input
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={handleQueryChange}
        />
        {results.length > 0 && (
          <ul className="absolute z-10 w-full mt-2 rounded-b-lg shadow-md bg-white">
            {results.map((result) => (
              <li
                key={result.imdbID}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleResultClick(result.Title)}
              >
                {result.Title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        className="px-4 py-2 font-bold text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
        type="button"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
