const renderTrendingMovie = (movies, setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId) => {

    const handleClickOnMovie = (movieId) => {
        setMoreInfo(true)
        setMoreInfoId(movieId)
    }

    const trending = movies.map((movie) => {
        return (
            <div className='singleMovie' onClick={() => handleClickOnMovie(movie.IMDB)} key={movie.IMDB}>
                <img src={movie.poster} />
                <p>Movie Title: {movie.title}</p>
            </div>
        )
    })
    setMovies(trending)
    setDisplaySearch(true)
}
export default renderTrendingMovie