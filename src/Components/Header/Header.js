import React from 'react';
import Logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={Logo} alt="" srcset="" />
            <div>
                <a href="/home">Home</a>
                <a href="/orderreview">Order Review</a>
                <a href="/manageinventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;