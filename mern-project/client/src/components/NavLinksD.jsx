import React from 'react'
import { Link } from 'react-router-dom'
const NavLinksD = (props) => {
    return (
        <ul className='navList'>
            <li onClick={() => props.isMobile && props.closeMobileMenu}>
                <Link to={'/'}>Home</Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu}>
                <Link to={'/sources'}>Sources</Link>
            </li>
        </ul>
    )
}

export default NavLinksD
