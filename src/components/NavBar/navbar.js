import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='navigation'>
      <nav className="navbar">
        <img src={logo} alt="LOGO" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-20} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() =>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>
          <img src={contactImg} alt="contactImg" className="desktopMenuImg" />Contact me</button>

          <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-20} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-40} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-40} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
      </nav>
    </div>
    
  )
}

export default Navbar
