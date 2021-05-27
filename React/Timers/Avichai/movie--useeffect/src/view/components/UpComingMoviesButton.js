const UpComingMoviesButton = ({ setMovies, setUpComing, upComingMovies }) => {

    const handleUpComing = () => {
        setUpComing(!upComingMovies)
    }

    return (<button className='nav-link btn' onClick={handleUpComing}>Upcoming</button>)
}
export default UpComingMoviesButton