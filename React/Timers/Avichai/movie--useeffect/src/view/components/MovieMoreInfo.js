import React, { useState, useEffect } from 'react';
import fetchMoreInfoMovie from '../../api/fetchMoreInfoMovie'


const MovieMoreInfo = ({ moreInfoId, setMoreInfo, showMoreInfo }) => {
    const [movieMoreInfo, setMovieInfo] = useState('')

    useEffect(() => {
        if (showMoreInfo === true) {

            fetchMoreInfoMovie(moreInfoId, setMovieInfo, setMoreInfo)
        }
    }, [showMoreInfo])

    return (
        <div>
            {movieMoreInfo}
        </div>
    )
}

export default MovieMoreInfo