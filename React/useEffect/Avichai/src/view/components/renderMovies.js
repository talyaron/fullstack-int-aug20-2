const renderMovies = (setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId, movies) => {
        const handleMoreInfo = (movieId) => {
        setMoreInfo(true)
        setMoreInfoId(movieId)
    }

    const moviesMap = movies.map(movie => {
        return (
            <div className='singleMovie card' key={movie.IMDB}>
                <img className='card-img-top' alt={movie.title} src={movie.poster} />
                <div className='card-body'>
                    <h4 className='card-title'>{movie.title}</h4>
                </div>
                <div className='card-body'>
                    <button onClick={() => handleMoreInfo(movie.IMDB)} className='btn btn-primary m-auto'>More info</button>
                </div>
            </div>
        )
    })
    setDisplaySearch(true)
    setMovies(moviesMap)
}
export default renderMovies