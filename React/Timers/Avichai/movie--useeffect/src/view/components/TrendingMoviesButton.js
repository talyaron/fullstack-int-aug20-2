const TrendingMoviesButton = ({ setTrending, trendingMovies }) => {
    return (
        <div>
                <button className='nav-link btn' onClick={() => setTrending(!trendingMovies)}>Trending</button>
        </div>
    )
}
export default TrendingMoviesButton