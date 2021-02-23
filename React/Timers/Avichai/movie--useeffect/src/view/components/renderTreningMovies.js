const renderTrendingMovie = (movies, setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId) => {

    const handleMoreInfo = (movieId) => {
        // setShowForm(!showBigForm)
        setMoreInfo(true)
        setMoreInfoId(movieId)
    }

    const trendingMovies = movies.map((movie) => {
        return (
            <div className='singleMovie' onClick={() => handleMoreInfo(movie.IMDB)} key={movie.IMDB}>
                <img src={movie.poster} />
                <p>Movie Title: {movie.title}</p>
            </div>
        )
    })
    setMovies(trendingMovies)
    setDisplaySearch(true)
}
export default renderTrendingMovie