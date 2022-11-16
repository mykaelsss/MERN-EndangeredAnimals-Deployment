import React from 'react'
import { Link } from 'react-router-dom'
const SourceLinks = (props) => {
    return (
        <ul className='navList'>
            <li onClick={() => props.isMobile && props.closeMobileMenu}>
                <Link to={'/'}>Home</Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu}>
                <Link to={'/donate'}>Donate</Link>
            </li>
        </ul>
    )
}

export default SourceLinks
