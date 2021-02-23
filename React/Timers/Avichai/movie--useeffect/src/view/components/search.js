import fetchMoviesBySearch from '../../api/fetchSearch'

const SearchBar = (props) => {
    console.log('in search')

    const handleSearchMovie = (e) => {
        e.preventDefault()
        const searchedMovies = e.target.children.searchedMovie.value
        fetchMoviesBySearch(props.setMovies, searchedMovies)
        e.target.reset()

    }
    return (
        <form onSubmit={handleSearchMovie}>
            <input type='text' placeholder='Movie/Series' name='searchedMovie' />
            <button>Search</button>
        </form>
    )
}
export default SearchBar;