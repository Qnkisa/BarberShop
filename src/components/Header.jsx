import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom';

export default function Header() {

    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? { color: '#C69C6D' } : {};
      };

    const [nav,setNav] = useState(false);
    
    const handleNavbar = () =>{
        setNav(prevValue => !prevValue)
    }

    useEffect(() => {
        return () => {
          setNav(false);
        };
      }, [location]);


  return (
        <header>
            <nav>
                <div className="nav-logo">
                    <Link to="/">
                        <img src="/website-logo.png" alt="" />
                        <p>by Yanislav Angelov</p>
                    </Link>
                </div>
                <ul className={nav ? "active" : ""}>
                    <li><Link to="/" style={isActive('/')}>Home</Link></li>
                    <li><Link to="/services" style={isActive('/services')}>Services</Link></li>
                    <li><Link to="/gallery" style={isActive('/gallery')}>Gallery</Link></li>
                    <li><Link to="/contacts" style={isActive('/contacts')}>Contacts</Link></li>
                </ul>
                <div className="nav-link">    
                    <Link to="/contacts">View Where</Link>
                    <div className={nav ? "hamburger active" : "hamburger"} onClick={handleNavbar}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}
