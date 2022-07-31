import React from 'react';
import './Header.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
        <img src={logo} alt='logo' className='header-logo'/>
        <h2>Elephant Page</h2>
        <nav>
            <ul>
                <li Link to='/'>Home</li>
                <li>Breeds</li>
                <li>Life</li>
            </ul>
        </nav>

    </header>

  )
}

export default Header