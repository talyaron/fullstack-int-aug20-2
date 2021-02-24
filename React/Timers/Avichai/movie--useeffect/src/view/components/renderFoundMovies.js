const renderFoundMovies = (setMovies, movies, setMoreInfo, setMoreInfoId, setDisplaySearch) => {

    const handleMoreInfo = (movieId) => {
        setMoreInfo(true)
        setMoreInfoId(movieId)
    }

    if (movies !== undefined) {
        const moviesMap = movies.map((movie) => {

            if (movie.Poster === 'N/A') {
                console.log('no poster')
                return
            }
            return (
                <div className='singleMovie' onClick={() => handleMoreInfo(movie.imdbID)} key={movie.imdbID}>
                    <img alt={movie.Title} src={movie.Poster} />
                    <p>Movie Title: {movie.Title}</p>
                    <p>Publish Year: {movie.Year}</p>
                </div>
            )
        })
        setDisplaySearch(true)
        setMovies(moviesMap)
    } else {
        setDisplaySearch(true)
        setMovies(<div>No Results Found!</div>)
    }
}
export default renderFoundMovies