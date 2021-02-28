const renderFoundMovies = (setMovies, movies, setMoreInfo, setMoreInfoId, setDisplaySearch) => {

    const handleMoreInfo = (movieId) => {
        setMoreInfo(true)
        setMoreInfoId(movieId)
    }

    if (movies !== undefined) {
        const moviesMap = movies.map((movie) => {

            if (movie.Poster === 'N/A' || movie.Type === 'series') {
                return null
            }
            return (
                <div className='singleMovie card' key={movie.imdbID}>
                    <img className='card-img-top' alt={movie.Title} src={movie.Poster} />
                    <div className='card-body'>
                        <h4 className='card-title'>{movie.Title}</h4>
                    </div>
                    <div className='card-body'>
                        <button onClick={() => handleMoreInfo(movie.imdbID)} className='btn btn-primary m-auto'>More info</button>
                    </div>
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