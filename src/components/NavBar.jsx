import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';



const NavBar = () => {
    const [click, setClick]  = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="https://iusscatucla7.wixsite.com/website" className="navbar-logo">
                        IUSSC
                    </Link>
                    <div className='nav-links'>
                        <Link to='/' className='nav-links'>
                            Home
                        </Link>
                    </div>
                    <div className='nav-links'>
                        <Link to='/bulletin' className='nav-links'>
                            Bulletin
                        </Link>
                    </div>
                    <div className='nav-links'>
                        <Link to='/search' className='nav-links'>
                            Search
                        </Link>
                    </div>
                </div>
            </nav>
        </>

    );

};
export default NavBar;