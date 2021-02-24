import fetchMoviesBySearch from '../../api/fetchSearch'

const SearchBar = (props) => {
    console.log('in search')

    const handleSearchMovie = (e) => {
        e.preventDefault()
        const searchedMovies = e.target.children.searchedMovie.value

        if (searchedMovies.length >= 2) {
            props.setDisplaySearch(false)
            props.setMovies('')
            fetchMoviesBySearch(props.setMovies, searchedMovies, props.setMoreInfo, props.setMoreInfoId, props.setDisplaySearch)
            props.setSearched(`You have searched: ${searchedMovies}`)
            props.setMoreInfo(false)
            e.target.reset()
        } else {
            e.target.reset()
            e.target.children.searchedMovie.placeholder = 'Must be more then 2 characters.'
        }
    }
    return (
        <form onSubmit={handleSearchMovie}>
            <input type='text' placeholder='Movie/Series' name='searchedMovie' />
            <button>Search</button>
        </form>
    )
}
export default SearchBar;