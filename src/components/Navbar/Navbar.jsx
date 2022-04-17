import React, {useState, useEffect} from 'react';
import { MenuList } from "./menulist";
import { Link } from 'react-router-dom';

//images
import Logo from '../images/Digital Spaniel logo01-01.png';

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

//styling
import "./navbar.css";
import { NavLink } from 'react-router-dom';

//scripts
import '../../assets/main.js';

/** Display the menu items from MenuList file */
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [navVisibility, setNavVisibilty] = useState(true);

  const menuList = MenuList.map(({url, title}, index) => {
      return (
        <li key={index}>
          <NavLink exact="true" to={url} activeclassname="active">
            {title}
          </NavLink>
        </li>
      )
  });

   /** Handle the responsive menu click - when open show cross when closed show hamgburger icon */
   const handleClick = () => {
    setClicked(!clicked);
  }

  /** Handle the scrolling over a certain distance */
  const handleScroll = () => {
    if(window.scrollY > 100){
      setNavVisibilty(false);
    }
    else{
      setNavVisibilty(true);
    }
  };

  // new useEffect: to add event listener of scroll
  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);
  

    return (
        /** Navbar */
        <nav id="nav" style={{opacity: navVisibility ? '1' : '0'}}> 
          <Link to="/">
          <div className='logo'>
            <img src={Logo} alt="Digital Spaniel Logo"/>
          </div>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon className={clicked ? "timesIcon" : "barsIcon"} icon={clicked ? faTimes : faBars} />
          </div>
          <ul className={clicked ? 'menu-list' : 'menu-list close'}>
              {menuList}
          </ul>
        </nav>
    );
}

export default Navbar;