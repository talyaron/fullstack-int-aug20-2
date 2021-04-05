const PopularMoviesButton = ({ setMovies, popularMovies, setPopular }) => {

    const handlePopular = () => {
        setPopular(!popularMovies)
    }

    return (<button className='nav-link btn' onClick={handlePopular}>Popular</button>)

}
export default PopularMoviesButton