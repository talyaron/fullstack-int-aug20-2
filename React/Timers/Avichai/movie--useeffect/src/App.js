import React, { useState, useEffect } from 'react';
import SearchBar from './view/components/Search.js'
import fetchTrendingMovies from './api/fetchTrending'
import LoadingCircle from './view/components/LoadingCircle'
import Movies from './view/components/Movies'
import MovieMoreInfo from './view/components/MovieMoreInfo'
import Title from './view/components/Title'
import TrendingMoviesButton from './view/components/TrendingMoviesButton'

function App() {
  console.log('in app')

  const [foundMovies, setMovies] = useState('')
  const [displaySearch, setDisplaySearch] = useState(false)
  const [searchedWord, setSearched] = useState('')
  const [showMoreInfo, setMoreInfo] = useState(false)
  const [moreInfoId, setMoreInfoId] = useState('')
  const [trendingMovies, setTrending] = useState(false)

  useEffect(() => {
    setMovies('')
    setSearched('')
    setMoreInfo(false)
    setDisplaySearch(false)
    fetchTrendingMovies(setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId)
  }, [trendingMovies])

  return (
    <div className="App">
      <Title />
      <TrendingMoviesButton setTrending={setTrending} trendingMovies={trendingMovies} setSearched={setSearched} />
      {
        displaySearch
          ?
          <div>
            <SearchBar setMovies={setMovies} setMoreInfo={setMoreInfo} setMoreInfoId={setMoreInfoId} setDisplaySearch={setDisplaySearch} setSearched={setSearched} />
            <div>{searchedWord}</div>
          </div>
          :
          <LoadingCircle />
      }
      {
        !showMoreInfo
          ?
          <Movies
            foundMovies={foundMovies}
            setMovies={setMovies}
            setDisplaySearch={setDisplaySearch}
            setMoreInfo={setMoreInfo}
            setMoreInfoId={setMoreInfoId}
          />
          :
          <MovieMoreInfo moreInfoId={moreInfoId} setMoreInfo={setMoreInfo} showMoreInfo={showMoreInfo} />
      }
    </div>
  );
}

export default App;
