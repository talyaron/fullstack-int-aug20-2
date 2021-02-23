import React, { useState, useEffect } from 'react';
import SearchBar from './view/components/Search.js'
import fetchTrendingMovies from './api/fetchTrending'
import LoadingCircle from './view/components/LoadingCircle'
import Movies from './view/components/Movies'
import MovieMoreInfo from './view/components/MovieMoreInfo'
import Title from './view/components/Title'

function App() {
  console.log('in app')

  const [foundMovies, setMovies] = useState('')
  const [displaySearch, setDisplaySearch] = useState(false)
  const [showMoreInfo, setMoreInfo] = useState(false)
  const [moreInfoId, setMoreInfoId] = useState('')

  useEffect(() => {
    fetchTrendingMovies(setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId)
  }, [])

  return (
    <div className="App">
      <Title />
      {
        displaySearch
          ?
          <SearchBar setMovies={setMovies} />
          :
          <LoadingCircle/>
      }

      {
        !showMoreInfo
          ?
          <Movies foundMovies={foundMovies} />
          :
          <MovieMoreInfo moreInfoId={moreInfoId} setMoreInfo={setMoreInfo} />
      }
    </div>
  );
}

export default App;
