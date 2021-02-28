import renderMovies from '../view/components/renderMovies'
let upComingMovies = []
const fetchUpComingMovies = (setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId) => {
    fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-upcoming-movies&page=1", {
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
            upComingMovies = []
            setTimeout(() => {
                results.forEach(movie => {
                    fetchUpComingMoviesPoster(movie.imdb_id, setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId)
                })
            }, 1000);
        })
}
const fetchUpComingMoviesPoster = async (movieId, setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId) => {
    await fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${movieId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
    })
        .then(r => r.json())
        .then(response => {
            upComingMovies.push(response)
        })

    if (upComingMovies.length === 10) {
        renderMovies(setMovies, setDisplaySearch, setMoreInfo, setMoreInfoId, upComingMovies)
    }
}
export default fetchUpComingMovies