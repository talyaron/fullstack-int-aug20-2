import React, { useState, useEffect } from 'react';
import fetchTrendingMovies from './api/fetchTrending'
import LoadingCircle from './view/components/LoadingCircle'
import Movies from './view/components/Movies'
import MovieMoreInfo from './view/components/MovieMoreInfo'
import Title from './view/components/Title'
import fetchUpComingMovies from './api/fetchUpComingMovies'
import fetchPopularMovies from './api/fetchPopularMovies'
import Navbar from './view/components/Navbar'

function App() {

  const [foundMovies, setMovies] = useState('')
  const [displaySearch, setDisplaySearch] = useState(false)
  const [subTitle, setSubTitle] = useState('')
  const [showMoreInfo, setMoreInfo] = useState(false)
  const [moreInfoId, setMoreInfoId] = useState('')
  const [trendingMovies, setTrending] = useState(false)
  const [upComingMovies, setUpComing] = useState(false)
  const [popularMovies, setPopular] = useState(false)
  const [firstRender, setFirstRender] = useState(true)


  useEffect(() => {
    setFirstRender(false)
  }, [])

  useEffect(() => {
    setMovies('')
    setSubTitle('Trending Movies')
    setMoreInfo(false)
    setDisplaySearch(false)
    fetchTrendingMovies(setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId)
  }, [trendingMovies])

  useEffect(() => {
    if (!firstRender) {
      setMovies('')
      setSubTitle('Up Coming Movies')
      setMoreInfo(false)
      setDisplaySearch(false)
      fetchUpComingMovies(setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId)
    }
  }, [upComingMovies])

  useEffect(() => {
    if (!firstRender) {
      setMovies('')
      setSubTitle('Popular Movies')
      setMoreInfo(false)
      setDisplaySearch(false)
      fetchPopularMovies(setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId)
    }
  }, [popularMovies])

  return (
    <div className="App">
      <Title />
      <Navbar
        setTrending={setTrending}
        trendingMovies={trendingMovies}
        setMovies={setMovies}
        popularMovies={popularMovies}
        setPopular={setPopular}
        setUpComing={setUpComing}
        upComingMovies={upComingMovies}
        setMoreInfo={setMoreInfo}
        setMoreInfoId={setMoreInfoId}
        setDisplaySearch={setDisplaySearch}
        setSubTitle={setSubTitle}
      />
      {
        displaySearch
          ?
          <div>
            <h3 className='subTitle'>{subTitle}</h3>
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
          <MovieMoreInfo moreInfoId={moreInfoId} setMoreInfo={setMoreInfo} showMoreInfo={showMoreInfo} setSubTitle={setSubTitle} />
      }
    </div>
  );
}

export default App;
