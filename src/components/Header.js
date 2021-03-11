import PropTypes from 'prop-types'
import Button from './Button'
import logo from '../logo.jpg'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <img src={logo} 
            style={{width: '40px', height: '40px'}} 
            alt='Task App Logo'/>
            <Button 
            onClick={onAdd} 
            color={showAdd ? '#000' : '#2abda4'} 
            text={showAdd ? 'Close' : 'Add'} >                
            </Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
