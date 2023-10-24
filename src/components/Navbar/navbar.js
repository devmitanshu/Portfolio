import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import contact_me from '../../assests/contact_me.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        
        <div className="desktopMenu">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Experience</Link>
          <Link className="desktopMenuListItem">Projects</Link>


        </div>  

        <button className="defaultMenuBtn">
          <img src ={contact_me} alt="" className="desktopMenuImg"/>Contact Me
        </button>

      
    </nav>
  )
}

export default Navbar