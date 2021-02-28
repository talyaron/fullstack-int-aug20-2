import renderMovies from '../view/components/renderMovies'

let popularMovies = []

const fetchPopularMovies = (setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId) => {
    fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-popular-movies&page=1&year=2020", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
    })
        .then(r => r.json())
        .then(response => {
            const results = response.movie_results
            results.splice(results.length - 10);
            popularMovies = []
            setTimeout(() => {
                results.forEach(movie => {
                    fetchPopularMoviesPoster(movie.imdb_id, setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId)
                })
            }, 1000);
        })
}
const fetchPopularMoviesPoster = async (movieId, setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId) => {
    await fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${movieId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
    })
        .then(r => r.json())
        .then(response => {
            popularMovies.push(response)
        })

    if (popularMovies.length === 10) {
        renderMovies(setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId, popularMovies)
    }
}
export default fetchPopularMovies