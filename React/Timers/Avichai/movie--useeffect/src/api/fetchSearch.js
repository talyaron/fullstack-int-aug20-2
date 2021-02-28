import renderFoundMovies from '../view/components/renderFoundMovies'


const fetchMoviesBySearch = (setMovies, searchedMovies, setMoreInfo, setMoreInfoId, setDisplaySearch) => {

    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${searchedMovies}&page=1&r=json`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        }
    })
        .then(r => r.json())
        .then(response => {
            const results = response.Search
            renderFoundMovies(setMovies, results, setMoreInfo, setMoreInfoId, setDisplaySearch)
        })
}

export default fetchMoviesBySearch