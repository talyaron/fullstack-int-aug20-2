const renderTrendingMovie = (movies, setMovies, setDisplaySearch) => {

    const trending = movies.map((movie) => {
        return (
            <div className='singleMovie' key={movie.IMDB}>
                <img src={movie.poster} />
                <p>Movie Title: {movie.title}</p>
            </div>
        )
    })
    setMovies(trending)
    setDisplaySearch(true)

}
export default renderTrendingMovie