import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMenu= () => setClick(false);
  return (
   <>
    <nav className="navbar">
        <div className="navbar-container">
            <link to="/" className='navbar-logo'>
            
            </link>
                <div className='menu-icon' onClick={handleClick}>
                
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                    <link to='/' className='nav-links' onClick={closeMenu}>
                    Home
                    </link>
                   </li>
                   <li className='nav-item'>
                    <link to='/about' className='nav-links' onClick={closeMenu}>
                    About
                    </link>
                   </li>
                   <li className='nav-item'>
                    <link to='/shop' className='nav-links' onClick={closeMenu}>
                    Shop
                    </link>
                   </li>
                   <li className='nav-item'>
                    <link to='/login' className='nav-links-mobile' onClick={closeMenu}>
                    Login
                    </link>
                   </li>
                </ul>
        </div>
    </nav>
   </>
  )
}

export default Navbar

