import TrendingMoviesButton from './TrendingMoviesButton'
import UpComingMoviesButton from './UpComingMoviesButton'
import PopularMoviesButton from './PopularMoviesButton'
import SearchBar from './Search.js'


const Navbar = ({ setMovies, setTrending, trendingMovies, popularMovies, setPopular, setUpComing, upComingMovies, setMoreInfo, setMoreInfoId, setDisplaySearch, setSubTitle }) => {


    return (
        <div className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Movies</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <TrendingMoviesButton setTrending={setTrending} trendingMovies={trendingMovies} />
                    </li>
                    <li className="nav-item">
                        <PopularMoviesButton setMovies={setMovies} popularMovies={popularMovies} setPopular={setPopular} />
                    </li>
                    <li className="nav-item">
                        <UpComingMoviesButton setMovies={setMovies} setUpComing={setUpComing} upComingMovies={upComingMovies} />
                    </li>
                </ul>
                <SearchBar setMovies={setMovies} setMoreInfo={setMoreInfo} setMoreInfoId={setMoreInfoId} setDisplaySearch={setDisplaySearch} setSubTitle={setSubTitle} />
            </div>
        </div>
    )
}
export default Navbar