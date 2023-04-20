import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import SearchBar from './components/Searchbar';
import MoviesContainer from './components/MoviesContainer';
import MovieDetails from './components/MovieDetails';
import SearchResults from './components/SearchResults';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <div className="flex justify-center mt-20">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<MoviesContainer searchQuery={searchQuery} />}
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
