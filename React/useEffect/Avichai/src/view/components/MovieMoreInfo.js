import React, { useState, useEffect } from 'react';
import fetchMoreInfoMovie from '../../api/fetchMoreInfoMovie'
import LoadingCircle from './LoadingCircle';


const MovieMoreInfo = ({ moreInfoId, setMoreInfo, showMoreInfo }) => {
    const [movieMoreInfo, setMovieInfo] = useState('')

    useEffect(() => {
        if (showMoreInfo === true) {
            setMovieInfo(<LoadingCircle/>)
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