import React, { useState, useEffect } from 'react';
import SearchBar from './view/components/search.js'
import fetchTrendingMovies from './api/fetchTrending'
import LoadingCircle from './view/components/loadingCircle'

function App() {
  console.log('in app')
  const [foundMovies, setMovies] = useState('')
  const [displaySearch, setDisplaySearch] = useState(false)

  useEffect(() => {
    fetchTrendingMovies(setMovies, setDisplaySearch)
  }, [])

  return (
    <div className="App">
      <h1>Welcome! Search for wanted Movie or Series!</h1>
      {
        displaySearch
          ?
          <SearchBar setMovies={setMovies} />
          :
          <LoadingCircle />
      }
      <div>{foundMovies}</div>
    </div>
  );
}

export default App;
