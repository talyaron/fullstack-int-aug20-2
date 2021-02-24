import React, { useState, useEffect } from 'react';
import fetchMoreInfoMovie from '../../api/fetchMoreInfoMovie'


const MovieMoreInfo = ({ moreInfoId, setMoreInfo, showMoreInfo }) => {
    const [movieMoreInfo, setMovieInfo] = useState('')

    useEffect(() => {
        if (showMoreInfo === true) {
            console.log(moreInfoId)

            fetchMoreInfoMovie(moreInfoId, setMovieInfo)
        }
    }, [showMoreInfo])


    const handleCloseMoreInfo = () => {
        setMoreInfo(false)
        setMovieInfo('')
    }
    return (
        <div>
            movie id for more info {moreInfoId}
            <div>{movieMoreInfo}</div>
            <button onClick={handleCloseMoreInfo}>GoBack</button>
        </div>
    )
}

export default MovieMoreInfo