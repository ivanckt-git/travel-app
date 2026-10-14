import React from 'react'
import { pageLinks } from '../../data';
import { Link, NavLink } from 'react-router';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import siteLogo from '../../images/site_logo_transparent.png';

const Navbar = ({groupClass}) => {
  return (
    <nav>
      <div>
        <a href='/#city'>
          {/* <i className="fa-brands fa-fort-awesome"></i> */}
          <img src={siteLogo} className="site_logo" alt="" />
        </a>
      </div>
      <div><PageLinks groupClass="main-menu-list"></PageLinks></div>
      <div>
        <SocialLinks groupClass="nav-icons" listItemClass={"nav-icon"}/></div>
    </nav>
  )
}

export default Navbar