import {Link} from 'react-router-dom'
import React from 'react';
import amaron from '../../../img/nav logo.png';
import './Navbar.css'

const Navbar = () => {
    return (  
        
        <nav className="navbar">
        
            {/* <img src={amaron}   className="logo" alt= "Amaron Pitstop Kzm.logo" /> */}
            <Link to="/" >
            <img src={amaron}   className="logo" alt= "Amaron Pitstop Kzm.logo" />

            </Link>
            <div className="links">
               <Link to="/" >Home</Link>
            </div>
            
        </nav>
        
    );
}

 export default Navbar