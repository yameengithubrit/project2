import React, {useState} from 'react';

import './Header.css'
import {Link} from 'react-scroll';


export default function Header() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
      if (window.scrollY >= 50){
          setnav(true);
      }
      else{
          setnav(false);
      }
  }



  
  return (
    <div className='header'>
      <div>
      <img src='logo.png' alt='' className='logo' />
      </div>
      <ul className='header-menu'>
        <li><Link to="hero" smooth={true} duration={1000}>Home</Link></li>
        <li><Link to="program" smooth={true} duration={1000}>Services</Link></li>
        <li><Link to="reason" smooth={true} duration={1000}>Case Studies</Link></li>
        <li><Link to="testimonial" smooth={true} duration={1000}>About Us</Link></li>
       
        <li><Link to="footer" smooth={true} duration={1000}>Contact Us</Link></li>
       
      </ul>
    </div>
  )
}
