import React, { useEffect, useState } from 'react';

import './App.css';
import Movies from './components/Movie';

function App() {

  const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5ed31572a9e57ac5628957d887ea2b43&page=1'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=5ed31572a9e57ac5628957d887ea2b43&query=';

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  let getMovies = (API) => {
    fetch(API).then(response => response.json()).then(data => {
      setMovies(data['results']);
    });
  }

  let handleOnSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    }

  };

  let handleOnChange = (e) => {
    setSearchTerm(e.target.value.trim());
  };


  return (
    <div>

      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange} />
        </form>
      </header>

      <div className="movie-container">

        {movies.length > 0 && movies.map(movie =>
          (<Movies key={movie.id} {...movie} />)
        )}

      </div>

    </div>


  );
}

export default App;
