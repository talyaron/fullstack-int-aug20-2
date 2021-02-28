import fetchMoviesBySearch from '../../api/fetchSearch'

const SearchBar = (props) => {

    const handleSearchMovie = (e) => {
        e.preventDefault()
        const searchedMovies = e.target.children.searchedMovie.value

        if (searchedMovies.length >= 2) {
            props.setDisplaySearch(false)
            props.setMovies('')
            fetchMoviesBySearch(props.setMovies, searchedMovies, props.setMoreInfo, props.setMoreInfoId, props.setDisplaySearch)
            props.setSubTitle(`Movies that match: ${searchedMovies}`)
            props.setMoreInfo(false)
            e.target.children.searchedMovie.placeholder = 'Movie'
            e.target.reset()
        } else {
            e.target.reset()
            e.target.children.searchedMovie.placeholder = 'Must be more then 2 characters.'
        }
    }
    return (
        <form className="d-flex search" onSubmit={handleSearchMovie}>
            <input className="form-control me-2" type="search" placeholder="Movie" aria-label="Search" name='searchedMovie' />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}
export default SearchBar;