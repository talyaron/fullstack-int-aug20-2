const TrendingMoviesButton = ({ setTrending, trendingMovies }) => {
    return (
        <button onClick={() => setTrending(!trendingMovies)}>Trending Movies</button>
    )
}
export default TrendingMoviesButton