const fetchTrendingMovies = (setMovies) => {
    console.log('in fetch trending')
    fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-trending-movies&limit=10", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
    })
        .then(r => r.json())
        .then(response => {
            const results = response.movie_results
            results.splice(results.length - 15);
            setTimeout(() => {
                results.forEach(movie => {
                    fetchTreningMoviePoster(movie.imdb_id, setMovies)
                })
            }, 1000);
        })
}
const trendingMovies = []

const fetchTreningMoviePoster = async (movieId, setMovies) => {
    await fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${movieId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
    })
        .then(r => r.json())
        .then(response => {
            trendingMovies.push(response)
        })
    if (trendingMovies.length === 5) {
        renderTrendingMovie(trendingMovies, setMovies)
    }
}
const renderTrendingMovie = (movies, setMovies) => {

    const trending = movies.map((movie) => {
        return (
            <div className='singleMovie' key={movie.IMDB}>
                <img src={movie.poster} />
                <p>Movie Title: {movie.title}</p>
            </div>
        )
    })
    setMovies(trending)

}

export default fetchTrendingMovies