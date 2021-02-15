import React, { useEffect, useState } from 'react';

import './App.css';
import Movies from './components/Movie';

function App() {

  const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5ed31572a9e57ac5628957d887ea2b43&page=1'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=5ed31572a9e57ac5628957d887ea2b43&query=';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API).then(response => response.json()).then(data => {
      console.log(data);
      setMovies(data['results']);
    });


  }, []);


  return (
    <div>

      <header>
        <input className="search" type="search" placeholder="Search..." />
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
