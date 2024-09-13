import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi';
// import { FaPhoneVolume } from "react-icons/fa";
import { useState } from 'react';

export default function Header() {
    const [showMediaIcons,setShowMediaIcons] = useState(false);

  return (
    <header className='header border-b-2 border-black w-full'>
        
        <div className='web-logo'>
        <img className="logo" src="images/nav-logo.png" alt='Logo'/>
        </div>
  
        <nav className= {showMediaIcons ? "mobile-navbar" : 'navbar'} >
          <ul className= {showMediaIcons ? "mobile-navbar-list" : 'navbar-list '}>
            <li><a href="#home" className='navbar-link text-white no-underline'>Home</a></li>
            <li><a href="#about" className='navbar-link text-white no-underline'>About</a></li>
            <li><a href="#query" className='navbar-link text-white no-underline'>Query</a></li>
            <li><a href="#amenities" className='navbar-link text-white no-underline'>Amenities</a></li>
            <li><a href="#gallery" className='navbar-link text-white no-underline'>Gallery</a></li>
            <li><a href="#footer" className='navbar-link text-white no-underline'>Contact</a></li>
          </ul>
        </nav>
        {/* <a href="tel:+" className="text-3xl text-blue-500 jumping-icon">
          <FaPhoneVolume />
        </a> */}
  
        <div className='mobile-navbar-btn'>
          <button name='ham' className='mobile-nav-icon' onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu size={40}/>
          </button>
        </div>
      </header>
  )
}
