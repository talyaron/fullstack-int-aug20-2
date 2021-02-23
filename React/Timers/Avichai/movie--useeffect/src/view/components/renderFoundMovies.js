const renderFoundMovies = (setMovies, movies) => {
    console.log('in render')
    if (movies !== undefined) {
        const moviesMap = movies.map((movie) => {

            if (movie.Poster === '') {
                return
            }
            return (
                <div className='singleMovie' key={movie.imdbID}>
                    <img src={movie.Poster} />
                    <p>Movie Title: {movie.Title}</p>
                    <p>Publish Year: {movie.Year}</p>
                    <p>I am a {movie.Type}</p>
                </div>
            )
        })
        setMovies(moviesMap)
    } else {
        setMovies(<div>No Results Found!</div>)
    }
}
export default renderFoundMovies