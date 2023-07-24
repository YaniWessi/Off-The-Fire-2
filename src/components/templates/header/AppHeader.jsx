import React from "react";
import { useRef } from "react";
import Logo from "../../molecules/logo/Logo";
import NavLinks from "../../molecules/navlinks/NavLinks";
import links from '../../../assets/config/headerLinks.json';
import { FaBars, FaTimes } from 'react-icons/fa';
import './appHeader.css';


const AppHeader = () => {

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
    <div  className="app-header">

       <Logo />

       <nav ref={navRef}>
       <NavLinks links={links}/>

       <button className="fa-icons nav-close-btn" onClick={showNavbar}>
       <FaTimes size={30} />
       </button>

       </nav>


       <button className="fa-icons" onClick={showNavbar} >
        <FaBars size={30} />
       </button>


       {/* {nav && (
           <ul className="second-links">
            <NavLinks links={links} className="media-links"/>
           </ul>
       )} */}
       
    </div>

    )
}  
export default AppHeader;