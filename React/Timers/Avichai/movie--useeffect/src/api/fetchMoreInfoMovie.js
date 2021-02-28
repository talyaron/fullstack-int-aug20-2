import renderMoreInfoMovie from '../view/components/renderMoreInfoMovie'
const fetchMoreInfoMovie = (movieId, setMovieInfo, setMoreInfo) => {

    fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=${movieId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
    })
        .then(r => r.json())
        .then(response => {
            fetchMoreInfoMoviePoster(movieId, response, setMovieInfo, setMoreInfo)
            renderMoreInfoMovie(response, setMovieInfo, setMoreInfo)
        })
}
const fetchMoreInfoMoviePoster = (movieId, movieInfo, setMovieInfo, setMoreInfo) => {
    fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${movieId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b409cd8af1mshbcaed3005a81a3bp157457jsnee4ece4ea8bd",
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
        }
    })
        .then(r => r.json())
        .then(response => {
            const movieImg = response.poster
            renderMoreInfoMovie(movieInfo,movieImg, setMovieInfo, setMoreInfo)

        })
}
export default fetchMoreInfoMovie