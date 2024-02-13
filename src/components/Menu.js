import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'
const Menu=()=>{
    return (
        <div className='navbar'>
            {/* logo here */}
            <div className='menu-container'>
                <ul className='nav-links'>
                    <li>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About' className='nav-link'>About</Link>
                    </li>
                    <li>
                        <Link to='/Pictures' className='nav-link'>Pictures</Link>
                    </li>
                    <li>
                        <Link to='/Contact' className='nav-link'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Menu;