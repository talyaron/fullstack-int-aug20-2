import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd,showAdd}) => {
       return (
        <header className='header'>
            <h1 >{title}</h1>
           <Button  color={showAdd ? 'blue' : 'green' } text={showAdd ? "סגור" : 'הוסף משימה' } onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'מזכירון - תזכורת משימות',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/* const headingStyle = {
color: 'red',
backgroundColor: 'black',
margin:'auto'
}
 */
export default Header
