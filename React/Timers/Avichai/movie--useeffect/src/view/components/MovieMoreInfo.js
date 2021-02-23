const MovieMoreInfo = ({ moreInfoId, setMoreInfo }) => {
    // setMoreInfo(false)

    const handleCloseMoreInfo = () => {
        setMoreInfo(false)
    }
    return (
        <div>
            movie id for more info {moreInfoId}
            <button onClick={handleCloseMoreInfo}>GoBack</button>
        </div>
    )
}

export default MovieMoreInfo