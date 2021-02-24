const fetchMoreInfoMovie = (movieId, setMovieInfo) => {

    fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=${movieId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
    })
        .then(r => r.json())
        .then(response => {
            setMovieInfo(response.description)
        })
}
export default fetchMoreInfoMovie