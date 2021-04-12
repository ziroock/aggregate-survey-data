import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav style={{position: 'fixed', zIndex: '5', top: '0'}}>
            <div className="nav-wrapper" style={{background: '#2C3E50'}}>
                <Link to={'/'} className="brand-logo" style={{marginLeft: '50px'}}>Survey Data Organizer</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down"
                    style={{marginRight: '100px'}}>
                    <li><Link to={'/'}>Home</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;