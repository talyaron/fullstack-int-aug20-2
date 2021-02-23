import React, { useState, useEffect } from 'react';
import SearchBar from './view/components/search.js'
import fetchTrendingMovies from './api/fetchTrending'

function App() {
  console.log('in app')
  const [foundMovies, setMovies] = useState('')

  useEffect(() => {
    fetchTrendingMovies(setMovies)
  }, [])

  return (
    <div className="App">
      <SearchBar setMovies={setMovies} />
      <div>{foundMovies}</div>
    </div>
  );
}

export default App;
