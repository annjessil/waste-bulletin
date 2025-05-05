import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

import {Button} from './Button';


const NavBar = () => {
    const [click, setClick]  = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        IUSSC
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i>{click ? <FaTimes /> : <FaBars />}</i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/bulletin' className='nav-links' onClick={closeMobileMenu}>
                                Bulletin
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                                Search
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SEARCH</Button>}
                </div>
            </nav>
        </>

    );

};
export default NavBar;