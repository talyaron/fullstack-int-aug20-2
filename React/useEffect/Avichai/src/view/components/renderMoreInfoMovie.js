const renderMoreInfoMovie = (movieInfo, movieImg, setMovieInfo, setMoreInfo, movieId) => {

    const handleCloseMoreInfo = () => {
        setMoreInfo(false)
        setMovieInfo('')
    }

    if (movieInfo.rated === null) {

        let IMDbLink = `https://www.imdb.com/title/${movieId}/`

        setMovieInfo(
            <div className="card moreInfoCard">
                <div className='row'>
                    <div className='col-sm-3 moreInfoImg'>
                        <img src={movieImg} className="card-img-top" alt="..." />
                    </div>
                    <div className='col-sm-9 mt-5'>
                        <div className="card-body">
                            <h3 className="card-title">Sorry!</h3>
                            <p className="card-text">We dont have information about this movie!</p>
                            <p className="card-text"> <a target="-no-target-blank" className='btn btn-primary' href={IMDbLink}>IMDb Page</a></p>
                            <button className='btn btn-primary' onClick={handleCloseMoreInfo}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        const movieGenres = movieInfo.genres.join(', ')
        const movieDirectors = movieInfo.directors.join(', ')

        const movieStarsR = movieInfo.stars.slice(0, 10)
        const movieStars = movieStarsR.join(', ')

        setMovieInfo(
            <div className="card moreInfoCard">
                <div className='row'>
                    <div className='col-sm-3 moreInfoImg'>
                        <img src={movieImg} className="card-img-top" alt="..." />
                    </div>
                    <div className='col-sm-9 mt-1'>
                        <div className="card-body">
                            <h5 className="card-title">Title: {movieInfo.title}</h5>
                            <p className="card-text">IMDB Rating: {movieInfo.imdb_rating}</p>
                            <p className="card-text">Genres: {movieGenres}</p>
                            <p className="card-text">Published Year: {movieInfo.year}</p>
                            <p className="card-text">Description: {movieInfo.description}</p>
                            <p className="card-text">Main actors: {movieStars}</p>
                            <p className="card-text">Directors: {movieDirectors}</p>
                            <button className='btn btn-primary' onClick={handleCloseMoreInfo}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default renderMoreInfoMovie